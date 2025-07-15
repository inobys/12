import { h } from 'preact';
import { renderDom } from 'lib/dom';
import { GameletAPI } from 'gamelet-pixui-frame';
import { MainPage } from './mainpage'

window.addEventListener('load', () => {

});
if (GameletAPI.getRuntimeEnv() == 'PxIDE' || GameletAPI.getRuntimeEnv() == 'unsupported') {
	let render = () => {
		renderDom(
			<MainPage/>,
			document.getElementById('container')!
		);
	};
	
	render();
} else {
	let returnAct = () => {
		console.log('act1-main export');
		if (!global['exportRoots']) {
			console.log('act1-main init');
			global['exportRoots'] = [];
			global['exportRoots'].push({ actName: 'dwBackLottery', actDom: <MainPage /> });
		} else {
			global['exportRoots'].push({ actName: 'dwBackLottery', actDom: <MainPage /> });
		}
	};
	returnAct();
}

