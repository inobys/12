import { grpc } from '@improbable-eng/grpc-web';
import { TransportOptions } from '@improbable-eng/grpc-web/dist/typings/transports/Transport';
import { Metadata } from '@improbable-eng/grpc-web/dist/typings/metadata';
import { ProtobufMessage, ProtobufMessageClass } from '@improbable-eng/grpc-web/dist/typings/message';

let debug = console.log;

const FINISH_SEND = 1;

function isEmpty(value) {
	return value === undefined || value === '' || value === null;
}

function headersToBytes(headers) {
	let asString = [];
	headers.forEach(function (key, values) {
		asString[String(key)] = values;
	});
	return asString;
}

export class Http2PixTransport implements grpc.Transport {
	constructor(public options) {
		options.debug && debug('GrpcPixTransport', options);
		this.initHttp2();
	}
	pixuiGrpcAddress = this.options.url;
	headers = new grpc.Metadata();
	sendQueue: Array<any> = [];
	flag = false;
	px: any;

	initHttp2 = () => {
		if (!window['isHttp2Started']) {
			window.Http2Connection.init();
			window['isHttp2Started'] = setInterval(function () {
				window.Http2Connection.run();
			}, 100);
		}
	};
	sendMsg = (toSend) => {
		if (toSend === FINISH_SEND) {
			this.options.debug && debug('sendMsg', toSend);
			this.px.send(new Uint8Array([1]));
		} else {
			this.options.debug && debug('sendMsg', toSend);
			this.px.send(toSend);
		}
	};
	sendMessage = (msgBytes) => {
		if (!this.px) {
			this.sendQueue.push(msgBytes);
		} else {
			this.sendMsg(msgBytes);
		}
	};
	finishSend = () => {
		if (!this.px) {
			this.sendQueue.push(FINISH_SEND);
		} else {
			this.sendMsg(FINISH_SEND);
		}
	};
	onHeaders = (e) => {
		let str = String(e);
		let splitted = str.split(':', 2);
		if (!isEmpty(splitted[0]) && !isEmpty(splitted[1])) {
			this.headers.set(splitted[0], splitted[1]);
		}
	};
	onChunk = (e) => {
		if (!this.flag) {
			this.flag = true;
			// this.headers.set('grpc-status','0');
			// this.headers.set('grpc-message','OK');
			this.options.debug && debug('pixuiGrpc.onHeaders', this.headers);
			this.options.onHeaders(this.headers, 200);
		}
		let data = new Uint8Array(e);
		this.options.debug && debug('onChunk', data);
		this.options.onChunk(data);
	};
	onEnd = (vv) => {
		console.log(vv['resCode'], vv['time']);
		this.options.debug && debug('pixuiGrpc.onEnd');
		this.options.onEnd();
		this.px = null;
	};
	start = (metadata) => {
		this.options.debug && debug('pixuiGrpc-start', JSON.stringify(metadata));
		this.px = new Http2Connection(this.pixuiGrpcAddress, headersToBytes(metadata), this.options.debug);
		this.px.setHeadersCallBack(this.onHeaders);
		this.px.setDataCallBack(this.onChunk);
		this.px.setEndCallBack(this.onEnd);
		this.sendQueue.forEach((toSend) => {
			this.sendMsg(toSend);
		});
	};
	cancel = () => {
		this.options.debug && debug('pixuiGrpc-cancel');
		this.options.debug && debug('pixuiGrpc.onclose');
		this.px.close();
	};
}
