import { h, Component } from 'preact';
import { subscribers, getCurrentUrl, Link as StaticLink, exec } from 'preact-router';

export class Match extends Component {
	componentDidMount() {
		this.update = url => {
			this.nextUrl = url;
			this.setState({});
		};
		subscribers.push(this.update);
	}
	componentWillUnmount() {
		subscribers.splice(subscribers.indexOf(this.update)>>>0, 1);
	}
	render(props) {
		let url = this.nextUrl || getCurrentUrl(),
			path = url.replace(/\?.+$/,'');
		this.nextUrl = null;
		return props.children({
			url,
			path,
			matches: exec(path, props.path, {}) !== false
		});
	}
}

export const Link = ({ activeClassName, path, ...props }) => (
	<Match path={path || props.href}>
		{ ({ matches }) => {
			let cls=[props.class || props.className, matches && activeClassName].filter(Boolean).join(' ');
			return <StaticLink {...props} className={cls} />;
		} }
	</Match>
);

export default Match;
