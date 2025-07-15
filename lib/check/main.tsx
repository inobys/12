import { renderDom } from '../dom';
import { getView } from './util';
import { hello } from './tool';

let renderJSX = () => {
	let v = getView();
	renderDom(v, document.getElementById('container')!);
};

let setTimer = () => {
	let div = document.getElementById('timer');
	let x = 1;
	setInterval(() => {
		div!.innerHTML = `prove this page is not refresh: time:${x++}`;
	}, 100);
};

renderJSX();
setTimer();
hello();

window.onerror = (evt) => {
	let e = evt as ErrorEvent;
	console.log('!!! onerror', e.message);
};

if (module.hot) {
	console.log('setup hot reload!');
	// prettier-ignore
	module.hot.accept([
		'../dom.ts',
		'./util.tsx',
	], (): void => {
		console.log('***** accept App hot update 1*******');
		renderJSX();
		console.log('***** accept App hot update 2*******');
	});
}

if (false) {
	throw new Error('throw an error');
}
