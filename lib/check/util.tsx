import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import css from './main.less';
import pix from '../assets/pixui.png';
import preact from '../assets/preact.png';
import border from '../assets/border.png';

type State = {
	value: number;
};
class Counter extends Component<any, State> {
	state = {
		value: 0,
	};

	increment = () => {
		this.setState((prev) => ({ value: prev.value + 1 }));
	};

	render(props, state) {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					// color: '#f93f00',
					backgroundColor: state.value % 2 ? '#992288' : '#33ff54',
				}}
			>
				Counter: {state.value}
				<div style={{ width: '20px' }} />
				<div onClick={this.increment}>Increment</div>
			</div>
		);
	}
}

let wp = (p) => (p ? `/check/${p}` : '/check');

class Title extends Component<any, { title: string }> {
	state = {
		title: 'hello,pixui',
	};

	render(props, state) {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: '#f98833',
				}}
			>
				title: {state.title}
				<Link href={wp('')}>back home</Link>
			</div>
		);
	}
}

let makeError1 = () => {
	throw new Error('throw an error');
};

let makeError2 = (p?: any) => {
	let b = p.name;
};
let makeError3 = async () => {
	return JSON.parse('sdf={]');
};

export const getView = () => {
	return (
		<div style={{ width: '99%' }}>
			{/* <Counter /> */}
			<Router>
				<Counter loggedIn={true} path={wp('')} />
				<Title path={wp('hi')} />
			</Router>
			<Link href={wp('hi')}>Profile</Link>
			<div className={css.flexrow}>
				<img
					src={preact}
					onClick={() => {
						console.log('click preact...');
						makeError2();
					}}
				></img>
				<img src={pix}></img>
				<div style={{ width: '200px', height: '100px', borderImage: `url(${border}) 2 2 2 2 fill stretch` }} />
			</div>
			<div style={{ border: '1px solid black', width: 200, height: 200 }}>
				<video autoPlay src={'https://www.runoob.com/try/demo_source/mov_bbb.mp4'} style={{ loop: 'loop', width: 200, height: 200 }} />
			</div>
			<div onClick={(e) => console.log('click', e)}>Pixui is a embeddable browser engine</div>
			<div>Preact is a react-like framework</div>
			<div>with webpack and typescript workflow</div>
			<div className={css.flexrow}>
				<div>easy! </div>
				<div>beautiful!</div>
				<div>crossplatform!</div>
			</div>
			<div>let's start and go further!</div>
		</div>
	);
};
