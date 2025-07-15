"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = require("../../debug");
var ChunkParser_1 = require("../../ChunkParser");
var WebsocketSignal;
(function (WebsocketSignal) {
    WebsocketSignal[WebsocketSignal["FINISH_SEND"] = 1] = "FINISH_SEND";
})(WebsocketSignal || (WebsocketSignal = {}));
var finishSendFrame = new Uint8Array([1]);
function WebsocketTransport() {
    return function (opts) {
        return websocketRequest(opts);
    };
}
exports.WebsocketTransport = WebsocketTransport;
function websocketRequest(options) {
    options.debug && debug_1.debug("websocketRequest", options);
    var webSocketAddress = constructWebSocketAddress(options.url);
    var sendQueue = [];
    var ws;
    function sendToWebsocket(toSend) {
        if (toSend === WebsocketSignal.FINISH_SEND) {
            ws.send(finishSendFrame);
        }
        else {
            options.debug && debug_1.debug("sendToWebsocket", toSend);
            var byteArray = toSend;
            var c = new Int8Array(byteArray.byteLength + 1);
            c.set(new Uint8Array([0]));
            c.set(byteArray, 1);
            ws.send(c);
        }
    }
    return {
        sendMessage: function (msgBytes) {
            if (!ws || ws.readyState === ws.CONNECTING) {
                sendQueue.push(msgBytes);
            }
            else {
                sendToWebsocket(msgBytes);
            }
        },
        finishSend: function () {
            if (!ws || ws.readyState === ws.CONNECTING) {
                sendQueue.push(WebsocketSignal.FINISH_SEND);
            }
            else {
                sendToWebsocket(WebsocketSignal.FINISH_SEND);
            }
        },
        start: function (metadata) {
            ws = new WebSocket(webSocketAddress, ["grpc-websockets"]);
            ws.binaryType = "arraybuffer";
            ws.onopen = function () {
                options.debug && debug_1.debug("websocketRequest.onopen");
                ws.send(headersToBytes(metadata));
                sendQueue.forEach(function (toSend) {
                    sendToWebsocket(toSend);
                });
            };
            ws.onclose = function (closeEvent) {
                options.debug && debug_1.debug("websocketRequest.onclose", closeEvent);
                options.onEnd();
            };
            ws.onerror = function (error) {
                options.debug && debug_1.debug("websocketRequest.onerror", error);
            };
            ws.onmessage = function (e) {
                options.debug && debug_1.debug("ws.onmessage", e.data);
                options.onChunk(new Uint8Array(e.data));
            };
        },
        cancel: function () {
            options.debug && debug_1.debug("websocket.abort");
            ws.close();
        }
    };
}
function constructWebSocketAddress(url) {
    if (url.substr(0, 8) === "https://") {
        return "wss://" + url.substr(8);
    }
    else if (url.substr(0, 7) === "http://") {
        return "ws://" + url.substr(7);
    }
    throw new Error("Websocket transport constructed with non-https:// or http:// host.");
}
function headersToBytes(headers) {
    var asString = "";
    headers.forEach(function (key, values) {
        asString += key + ": " + values.join(", ") + "\r\n";
    });
    return ChunkParser_1.encodeASCII(asString);
}
//# sourceMappingURL=websocket.js.map