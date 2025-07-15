import { h, render, Component } from 'preact';

export let makeDOM = (type, props, ...children) => {
	console.log('==>dom', 'type', type, 'props', props, 'chlidren', children);
	return {
		type,
		props,
		children,
	};
};

export let renderDom = render;

//注：这个default是给webpack里的jsx-pragmatic插件用的，它会将所有jsx标记替换为这个函数调用
// export default makeDOM;
export default h;
