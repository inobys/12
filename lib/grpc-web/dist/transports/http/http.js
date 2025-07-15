"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = require("./fetch");
var xhr_1 = require("./xhr");
function CrossBrowserHttpTransport(init) {
    if (fetch_1.detectFetchSupport()) {
        var fetchInit = {
            credentials: init.withCredentials ? "include" : "same-origin"
        };
        return fetch_1.FetchReadableStreamTransport(fetchInit);
    }
    return xhr_1.XhrTransport({ withCredentials: init.withCredentials });
}
exports.CrossBrowserHttpTransport = CrossBrowserHttpTransport;
//# sourceMappingURL=http.js.map