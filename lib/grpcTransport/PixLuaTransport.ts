import {grpc} from '@improbable-eng/grpc-web';
import {TransportOptions} from '@improbable-eng/grpc-web/dist/typings/transports/Transport';
import {Metadata} from '@improbable-eng/grpc-web/dist/typings/metadata';

let debug = console.log;
let callbackId = 0;
let pendingCall = {};

function getNewID() {
	let id = callbackId;
	callbackId += 1;
	return id.toString();
}
//接收调用返回值
(window as any).onRPCMessage = function (msg) {
    window.requestAnimationFrame(() => {
        let res = JSON.parse(msg);
        let func = pendingCall[res.meta.callbackId];
        func(res);
    });
};

export class LuaPixTransport implements grpc.Transport { 
	constructor(public options: TransportOptions) {
        window.noProto=true;
        options.debug && debug('LuaPixTransport', options);
	}

    headers = new grpc.Metadata();
    sendMsg = (this.options as any).callFunc;
    data;
    responseType = this.options.methodDefinition.responseType.prototype.constructor;
    meta = new Map<string, string>();

    sendMessage = (msg) => {
        this.options.debug && debug('sendMessage', msg);
        this.data = msg.toObject();
    };

    finishSend = () => {
        try {
            let {service, methodName} = this.options.methodDefinition;
            const funcName = 'grpc.' + service.serviceName + '.' + methodName;
            this.options.debug && debug('finishSend, call: ', funcName);
            let callbackId = getNewID();
            this.meta['callbackId'] = callbackId;
            this.meta['windowId'] = (external as any).id;
            const req = {
                func: funcName,
                args: this.data,
                meta: this.meta,
            };
            pendingCall[callbackId] = (res) => {
                this.options.onChunk(new this.responseType(res.body), true);
                if (this.options.methodDefinition.responseStream) {
                    //
                } else {
                    //如果是单次调用，补上onEnd，并清空回调
                    this.options.onEnd();
                    delete pendingCall[callbackId];
                }
            };
            this.sendMsg(JSON.stringify(req));
        } catch (e) {
            console.log('rpc error', e);
        }
    };

	start = (metadata) => {
		//unary调用需要
		this.headers.set('grpc-status', '0');
		this.headers.set('grpc-message', 'OK');
		this.options.onHeaders(this.headers, 200);

		metadata.forEach((key, values) => {
			this.meta[String(key)] = values;
		});
	};
	cancel = () => {};
}
