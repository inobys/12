import { assign } from './util';
import { diff, commitRoot } from './diff/index';
import options from './options';
import { Fragment } from './create-element';

/**
 * Base Component class. Provides `setState()` and `forceUpdate()`, which
 * trigger rendering
 * @param {object} props The initial component props
 * @param {object} context The initial context from parent components'
 * getChildContext
 */
export function Component(props, context) {
	this.props = props;
	this.context = context;
}

/**
 * Update component state and schedule a re-render.
 * @param {object | ((s: object, p: object) => object)} update A hash of state
 * properties to update with new values or a function that given the current
 * state and props returns a new partial state
 * @param {() => void} [callback] A function to be called once component state is
 * updated
 */
Component.prototype.setState = function (update, callback) {
	// only clone state when copying to nextState the first time.
	let s;
	if (this._nextState !== this.state) {
		s = this._nextState;
	} else {
		s = this._nextState = assign({}, this.state);
	}

	if (typeof update == 'function') {
		update = update(s, this.props);
	}

	if (update) {
		assign(s, update);
	}

	// Skip update if updater function returned null
	if (update == null) return;

	if (this._vnode) {
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	}
};

/**
 * Immediately perform a synchronous re-render of the component
 * @param {() => void} [callback] A function to be called after component is
 * re-rendered
 */
Component.prototype.forceUpdate = function (callback) {
	if (this._vnode) {
		// Set render mode so that we can differentiate where the render request
		// is coming from. We need this because forceUpdate should never call
		// shouldComponentUpdate
		this._force = true;
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	}
};

/**
 * Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
 * Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
 * @param {object} props Props (eg: JSX attributes) received from parent
 * element/component
 * @param {object} state The component's current state
 * @param {object} context Context object, as returned by the nearest
 * ancestor's `getChildContext()`
 * @returns {import('./index').ComponentChildren | void}
 */
Component.prototype.render = Fragment;

/**
 * @param {import('./internal').VNode} vnode
 * @param {number | null} [childIndex]
 */
export function getDomSibling(vnode, childIndex) {
	if (childIndex == null) {
		// Use childIndex==null as a signal to resume the search from the vnode's sibling
		return vnode._parent
			? getDomSibling(vnode._parent, vnode._parent._children.indexOf(vnode) + 1)
			: null;
	}

	let sibling;
	for (; childIndex < vnode._children.length; childIndex++) {
		sibling = vnode._children[childIndex];

		if (sibling != null && sibling._dom != null) {
			// Since updateParentDomPointers keeps _dom pointer correct,
			// we can rely on _dom to tell us if this subtree contains a
			// rendered DOM node, and what the first rendered DOM node is
			return sibling._dom;
		}
	}

	// If we get here, we have not found a DOM node in this vnode's children.
	// We must resume from this vnode's sibling (in it's parent _children array)
	// Only climb up and search the parent if we aren't searching through a DOM
	// VNode (meaning we reached the DOM parent of the original vnode that began
	// the search)
	return typeof vnode.type == 'function' ? getDomSibling(vnode) : null;
}

/**
 * Trigger in-place re-rendering of a component.
 * @param {import('./internal').Component} component The component to rerender
 */
function renderComponent(component) {
	let vnode = component._vnode,
		oldDom = vnode._dom,
		parentDom = component._parentDom;

	if (parentDom) {
		let commitQueue = [];
		const oldVNode = assign({}, vnode);
		oldVNode._original = oldVNode;

		window.clearOP();

		let newDom = diff(
			parentDom,
			vnode,
			oldVNode,
			component._globalContext,
			parentDom.ownerSVGElement !== undefined,
			null,
			commitQueue,
			oldDom == null ? getDomSibling(vnode) : oldDom
		);
		commitRoot(commitQueue, vnode);

		window.dumpOP('renderComponent');

		if (newDom != oldDom) {
			updateParentDomPointers(vnode);
		}
	}
}

/**
 * @param {import('./internal').VNode} vnode
 */
function updateParentDomPointers(vnode) {
	if ((vnode = vnode._parent) != null && vnode._component != null) {
		vnode._dom = vnode._component.base = null;
		for (let i = 0; i < vnode._children.length; i++) {
			let child = vnode._children[i];
			if (child != null && child._dom != null) {
				vnode._dom = vnode._component.base = child._dom;
				break;
			}
		}

		return updateParentDomPointers(vnode);
	}
}

/**
 * The render queue
 * @type {Array<import('./internal').Component>}
 */
let rerenderQueue = [];
let rerenderCount = 0;

/**
 * Asynchronously schedule a callback
 * @type {(cb: () => void) => void}
 */
/* istanbul ignore next */
// Note the following line isn't tree-shaken by rollup cuz of rollup/rollup#2566
const defer =
	typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

/*
 * The value of `Component.debounce` must asynchronously invoke the passed in callback. It is
 * important that contributors to Preact can consistently reason about what calls to `setState`, etc.
 * do, and when their effects will be applied. See the links below for some further reading on designing
 * asynchronous APIs.
 * * [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony)
 * * [Callbacks synchronous and asynchronous](https://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/)
 */

let prevDebounce;

/**
 * Enqueue a rerender of a component
 * @param {import('./internal').Component} c The component to rerender
 */
export function enqueueRender(c) {
	if (
		(!c._dirty && (c._dirty = true) && rerenderQueue.push(c) && !rerenderCount++) ||
		prevDebounce !== options.debounceRendering
	) {
		prevDebounce = options.debounceRendering;
		(prevDebounce || defer)(process);
	}
}

/** Flush the render queue by rerendering all queued components */
function process() {
	let queue;
	while ((rerenderCount = rerenderQueue.length)) {
		queue = rerenderQueue.sort((a, b) => a._vnode._depth - b._vnode._depth);
		rerenderQueue = [];
		// Don't update `renderCount` yet. Keep its value non-zero to prevent unnecessary
		// process() calls from getting scheduled while `queue` is still being consumed.
		queue.some((c) => {
			if (c._dirty) renderComponent(c);
		});
	}
}
