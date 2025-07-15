"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = require("../../metadata");
var debug_1 = require("../../debug");
var xhrUtil_1 = require("./xhrUtil");
function XhrTransport(init) {
    return function (opts) {
        if (xhrUtil_1.detectMozXHRSupport()) {
            return new MozChunkedArrayBufferXHR(opts, init);
        }
        else if (xhrUtil_1.detectXHROverrideMimeTypeSupport()) {
            return new XHR(opts, init);
        }
        else {
            throw new Error("This environment's XHR implementation cannot support binary transfer.");
        }
    };
}
exports.XhrTransport = XhrTransport;
var XHR = (function () {
    function XHR(transportOptions, init) {
        this.options = transportOptions;
        this.init = init;
    }
    XHR.prototype.onProgressEvent = function () {
        this.options.debug && debug_1.debug("XHR.onProgressEvent.length: ", this.xhr.response.length);
        var rawText = this.xhr.response.substr(this.index);
        this.index = this.xhr.response.length;
        var asArrayBuffer = stringToArrayBuffer(rawText);
        this.options.onChunk(asArrayBuffer);
    };
    XHR.prototype.onLoadEvent = function () {
        this.options.debug && debug_1.debug("XHR.onLoadEvent");
        this.options.onEnd();
    };
    XHR.prototype.onStateChange = function () {
        this.options.debug && debug_1.debug("XHR.onStateChange", this.xhr.readyState);
        if (this.xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
            this.options.onHeaders(new metadata_1.Metadata(this.xhr.getAllResponseHeaders()), this.xhr.status);
        }
    };
    XHR.prototype.sendMessage = function (msgBytes) {
        this.xhr.send(msgBytes);
    };
    XHR.prototype.finishSend = function () {
    };
    XHR.prototype.start = function (metadata) {
        var _this = this;
        this.metadata = metadata;
        var xhr = new XMLHttpRequest();
        this.xhr = xhr;
        xhr.open("POST", this.options.url);
        this.configureXhr();
        this.metadata.forEach(function (key, values) {
            xhr.setRequestHeader(key, values.join(", "));
        });
        xhr.withCredentials = Boolean(this.init.withCredentials);
        xhr.addEventListener("readystatechange", this.onStateChange.bind(this));
        xhr.addEventListener("progress", this.onProgressEvent.bind(this));
        xhr.addEventListener("loadend", this.onLoadEvent.bind(this));
        xhr.addEventListener("error", function (err) {
            _this.options.debug && debug_1.debug("XHR.error", err);
            _this.options.onEnd(err.error);
        });
    };
    XHR.prototype.configureXhr = function () {
        this.xhr.responseType = "text";
        this.xhr.overrideMimeType("text/plain; charset=x-user-defined");
    };
    XHR.prototype.cancel = function () {
        this.options.debug && debug_1.debug("XHR.abort");
        this.xhr.abort();
    };
    return XHR;
}());
exports.XHR = XHR;
var MozChunkedArrayBufferXHR = (function (_super) {
    __extends(MozChunkedArrayBufferXHR, _super);
    function MozChunkedArrayBufferXHR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MozChunkedArrayBufferXHR.prototype.configureXhr = function () {
        this.options.debug && debug_1.debug("MozXHR.configureXhr: setting responseType to 'moz-chunked-arraybuffer'");
        this.xhr.responseType = "moz-chunked-arraybuffer";
    };
    MozChunkedArrayBufferXHR.prototype.onProgressEvent = function () {
        var resp = this.xhr.response;
        this.options.debug && debug_1.debug("MozXHR.onProgressEvent: ", new Uint8Array(resp));
        this.options.onChunk(new Uint8Array(resp));
    };
    return MozChunkedArrayBufferXHR;
}(XHR));
exports.MozChunkedArrayBufferXHR = MozChunkedArrayBufferXHR;
function codePointAtPolyfill(str, index) {
    var code = str.charCodeAt(index);
    if (code >= 0xd800 && code <= 0xdbff) {
        var surr = str.charCodeAt(index + 1);
        if (surr >= 0xdc00 && surr <= 0xdfff) {
            code = 0x10000 + ((code - 0xd800) << 10) + (surr - 0xdc00);
        }
    }
    return code;
}
function stringToArrayBuffer(str) {
    var asArray = new Uint8Array(str.length);
    var arrayIndex = 0;
    for (var i = 0; i < str.length; i++) {
        var codePoint = String.prototype.codePointAt ? str.codePointAt(i) : codePointAtPolyfill(str, i);
        asArray[arrayIndex++] = codePoint & 0xFF;
    }
    return asArray;
}
exports.stringToArrayBuffer = stringToArrayBuffer;
//# sourceMappingURL=xhr.js.map