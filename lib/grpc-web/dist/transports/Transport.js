"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./http/http");
var defaultTransportFactory = function (options) { return http_1.CrossBrowserHttpTransport({ withCredentials: false })(options); };
function setDefaultTransportFactory(t) {
    defaultTransportFactory = t;
}
exports.setDefaultTransportFactory = setDefaultTransportFactory;
function makeDefaultTransport(options) {
    return defaultTransportFactory(options);
}
exports.makeDefaultTransport = makeDefaultTransport;
//# sourceMappingURL=Transport.js.map