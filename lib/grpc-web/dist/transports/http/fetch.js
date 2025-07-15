"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = require("../../metadata");
var debug_1 = require("../../debug");
function FetchReadableStreamTransport(init) {
    return function (opts) {
        return fetchRequest(opts, init);
    };
}
exports.FetchReadableStreamTransport = FetchReadableStreamTransport;
function fetchRequest(options, init) {
    options.debug && debug_1.debug("fetchRequest", options);
    return new Fetch(options, init);
}
var Fetch = (function () {
    function Fetch(transportOptions, init) {
        this.cancelled = false;
        this.controller = self.AbortController && new AbortController();
        this.options = transportOptions;
        this.init = init;
    }
    Fetch.prototype.pump = function (readerArg, res) {
        var _this = this;
        this.reader = readerArg;
        if (this.cancelled) {
            this.options.debug && debug_1.debug("Fetch.pump.cancel at first pump");
            this.reader.cancel();
            return;
        }
        this.reader.read()
            .then(function (result) {
            if (result.done) {
                _this.options.onEnd();
                return res;
            }
            _this.options.onChunk(result.value);
            _this.pump(_this.reader, res);
            return;
        })
            .catch(function (err) {
            if (_this.cancelled) {
                _this.options.debug && debug_1.debug("Fetch.catch - request cancelled");
                return;
            }
            _this.cancelled = true;
            _this.options.debug && debug_1.debug("Fetch.catch", err.message);
            _this.options.onEnd(err);
        });
    };
    Fetch.prototype.send = function (msgBytes) {
        var _this = this;
        fetch(this.options.url, __assign({}, this.init, { headers: this.metadata.toHeaders(), method: "POST", body: msgBytes, signal: this.controller && this.controller.signal })).then(function (res) {
            _this.options.debug && debug_1.debug("Fetch.response", res);
            _this.options.onHeaders(new metadata_1.Metadata(res.headers), res.status);
            if (res.body) {
                _this.pump(res.body.getReader(), res);
                return;
            }
            return res;
        }).catch(function (err) {
            if (_this.cancelled) {
                _this.options.debug && debug_1.debug("Fetch.catch - request cancelled");
                return;
            }
            _this.cancelled = true;
            _this.options.debug && debug_1.debug("Fetch.catch", err.message);
            _this.options.onEnd(err);
        });
    };
    Fetch.prototype.sendMessage = function (msgBytes) {
        this.send(msgBytes);
    };
    Fetch.prototype.finishSend = function () {
    };
    Fetch.prototype.start = function (metadata) {
        this.metadata = metadata;
    };
    Fetch.prototype.cancel = function () {
        if (this.cancelled) {
            this.options.debug && debug_1.debug("Fetch.abort.cancel already cancelled");
            return;
        }
        this.cancelled = true;
        if (this.reader) {
            this.options.debug && debug_1.debug("Fetch.abort.cancel");
            this.reader.cancel();
        }
        else {
            this.options.debug && debug_1.debug("Fetch.abort.cancel before reader");
        }
        if (this.controller) {
            this.controller.abort();
        }
    };
    return Fetch;
}());
function detectFetchSupport() {
    return typeof Response !== "undefined" && Response.prototype.hasOwnProperty("body") && typeof Headers === "function";
}
exports.detectFetchSupport = detectFetchSupport;
//# sourceMappingURL=fetch.js.map