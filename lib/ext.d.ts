interface NodeModule {
	hot: any;
}

declare module '*.less' {
	const resource: { [key: string]: string };
	export = resource;
}

declare module '*.png' {
	const value: any;
	export default value;
}
declare module '*.gif' {
	const value: any;
	export default value;
}
declare module '*.jpg' {
	const value: any;
	export default value;
}

declare module '*.lottie' {
	const value: any;
	export default value;
}

declare module '*.mp4' {
	const value: any;
	export default value;
}

interface Console {
	enable_trace: (boolean) => {};
}

interface XMLHttpRequest {
	curlCode: number;
}

declare class Http2Connection {
	constructor(url: string, metadata?: string[string], debug?: bool);

	send(msg: Uint8Array): number;

	close(msg: Record<string, any>): number;

	setHeadersCallBack(func: Function): number;

	setDataCallBack(func: Function): number;

	setEndCallBack(func: Function): number;
}

interface IGamelet {
	openMessage: string | undefined;
	entranceConfig: string | undefined;
	appId: number;
	appName: string;
	env: string;
	mainpage: string;
	sdkInfo: string;
	isProductEnv : boolean;
	sdkVersion: string;
	appVersion: string;
	parentPath: string;
	userdataJson: string;
	startUpAppData: any;
}

declare const gamelet: IGamelet;

interface Window {
	Http2Connection: any;
	noProto: any;
}

interface External {
	sendMessage: (msg: any) => void;
	addEventListener:(type:string, handler:Function)=>void;
	onmessage: any;
}

declare function LuaProxy(): lua;
declare class WxCard {
	Ping(msg: string) {}
}
declare class PandoraCommon {
	static callLua(msg: string): any;
}
declare class PandoraSDKAdapter {
	static external: any;
	static getInstance();
	static callLua(name: string, f1: Function, f2: Function, msg: string): any;
}
declare class Lua {
	constructor();
	callLua(name: string, f1: Function, f2: Function, msg: string): any;
	PixWxCardRequest: WxCard;
}
