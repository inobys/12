"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var browser_headers_1 = require("browser-headers");
var impTransport = require("./transports/Transport");
var impTransportFetch = require("./transports/http/fetch");
var impTransportWebSocket = require("./transports/websocket/websocket");
var impTransportXhr = require("./transports/http/xhr");
var impTransportHttp = require("./transports/http/http");
var impCode = require("./Code");
var impInvoke = require("./invoke");
var impUnary = require("./unary");
var impClient = require("./client");
var grpc;
(function (grpc) {
    grpc.setDefaultTransport = impTransport.setDefaultTransportFactory;
    grpc.CrossBrowserHttpTransport = impTransportHttp.CrossBrowserHttpTransport;
    grpc.FetchReadableStreamTransport = impTransportFetch.FetchReadableStreamTransport;
    grpc.XhrTransport = impTransportXhr.XhrTransport;
    grpc.WebsocketTransport = impTransportWebSocket.WebsocketTransport;
    grpc.Code = impCode.Code;
    grpc.Metadata = browser_headers_1.BrowserHeaders;
    function client(methodDescriptor, props) {
        return impClient.client(methodDescriptor, props);
    }
    grpc.client = client;
    grpc.invoke = impInvoke.invoke;
    grpc.unary = impUnary.unary;
})(grpc = exports.grpc || (exports.grpc = {}));
//# sourceMappingURL=index.js.map