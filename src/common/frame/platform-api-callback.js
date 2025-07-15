

/*
Communication protocols

Lua->Javascript: 
invoke disposable callback command
{
    "cmd": "InvokeJavascriptDisposableCallback",
    "args": [...encodedArgs],
    "callbackID": (identifier of javascript callback. NOTICE: CALLBACK CAN ONLY BE CALLED ONCE)
}

invoke non-disposable callback command
{
    "cmd": "InvokeJavascriptNondisposableCallback",
    "args": [...encodedArgs],
    "callbackID": (identifier of javascript callback, NOTICE: CALLBACK CAN BE CALLED MULITIPLE TIMES)
}

invoke lua return processor
{
    "cmd": "ProcessLuaReturn",
    "args": [...encodedArgs],
    // [callback args of result processor: (issuccess, err, ...returnResults)]
    "callbackID": (identifier of lua return results whitch temporary store in this.luaResultHandlers),
    "callSuccess": (is lua call successfully made),
    "err": (lua error)
}

Javascript->Lua:
normal call command:
{
    "func": "functionName",
    "args": [...encodedArgs],
}
*/

export let EventDispatcher = {}
const functionKey = {
    AddEventListener : "EventDispatcher.AddEventListener",
    DispatchEvent: "EventDispatcher.DispatchEvent",
    RemoveEventListener: "EventDispatcher.RemoveEventListener"
}

EventDispatcher.DispatchEvent = function(successHandler, failedHandler, ...args){
    PandoraSDKAdapter.getInstance().callLua(functionKey.DispatchEvent, successHandler, failedHandler, ...args);
}

EventDispatcher.AddEventListener = function(successHandler, failedHandler, eventKey, eventCallback){
    PandoraSDKAdapter.getInstance().callLua(functionKey.AddEventListener, successHandler, failedHandler, eventKey, eventCallback);
}

EventDispatcher.RemoveEventListener = function(successHandler, failedHandler, eventKey, eventCallback){
    PandoraSDKAdapter.getInstance().callLua(functionKey.RemoveEventListener, successHandler, failedHandler, eventKey, eventCallback);
}


let FUNCARG_OP_CODE = {
    "ADD_DISPOSABLE_FUNC": 0,
    "ADD_NONDISPOSABLE_FUNC": 1,
    "REMOVE_NONDISPOSABLE_FUNC": 2,
}

function makeSingleton(createInstance) {
    return (function () {
        var instance;
        return {
            getInstance: function () {
                if (!instance) {
                    instance = createInstance();
                }
                return instance;
            }
        }
    })();
}

function functionArgEncoder(adapter, funcOpCode, arg) {
    let wrapper = {};
    wrapper.valuetype = "function";
    switch (funcOpCode) {
        case FUNCARG_OP_CODE.ADD_DISPOSABLE_FUNC: {
            wrapper.callbackID = adapter.registerDisposableCallback(arg);
        }; break;
        case FUNCARG_OP_CODE.ADD_NONDISPOSABLE_FUNC: {
            wrapper.callbackID = adapter.registerNondisposableCallback(arg);
        }; break;
        case FUNCARG_OP_CODE.REMOVE_NONDISPOSABLE_FUNC: {
            wrapper.callbackID = adapter.getNondisposableCallbackID(arg);
            if (wrapper.callbackID != undefined)
                adapter.removeNondisposableCallbackByID(wrapper.callbackID);
        }; break;
    } 
    wrapper.funcOpCode = funcOpCode;
    return wrapper;
}

function objectArgEncoder(adapter, funcOpCode, arg) {
    let wrapper = {};
    wrapper.valuetype = "table";
    wrapper.value = JSON.stringify(arg);
    return wrapper;
}

function undefinedArgEncoder(adapter, funcOpCode, arg) {
    let wrapper = {};
    wrapper.valuetype = "nil";
    return wrapper;
}


let ARG_ENCODERS = {
    "function": functionArgEncoder,
    "object": objectArgEncoder,
    "undefined": undefinedArgEncoder,
};

function encodeArgs(adapter, funcOpCode, ...args) {
    let encodedArgs = [];
    for (let i = 0; i < args.length; ++i) {
        let argtype = typeof(args[i]);
        let encoder = ARG_ENCODERS[argtype];
        if (encoder === undefined) {
            encodedArgs.push(args[i]);
        } else {
            // let arg = encoder(adapter, funcOpCode, args[i]);
            encodedArgs.push(encoder(adapter, funcOpCode, args[i]));
        }
    }
    return encodedArgs;
}

function tableArgDecoder(arg) {
    return JSON.parse(arg.value);
}

function nilArgDecoder(arg) {
    return undefined;
}

let ARG_DECODERS = {
    "table": tableArgDecoder,
    "nil": nilArgDecoder,
};

function decodeArgs(args) {
    let decoededArgs = [];
    for (let i = 0; i < args.length; ++i) {
        let argtype = args[i].valuetype;
        let decoder = ARG_DECODERS[argtype];
        if (decoder === undefined) {
            decoededArgs.push(args[i]);
        } else {
            decoededArgs.push(decoder(args[i]));
        }
    }
    return decoededArgs;
}

let LUA_EVENT_HANDLER_MAPPER = {
    "InvokeJavascriptDisposableCallback": "onInvokeDisposableCallback",
    "InvokeJavascriptNondisposableCallback": "onInvokeNondisposableCallback",
    "ProcessLuaReturn": "onProcessLuaReturn",
}

let PandoraSDKAdapterCls = function () {
    this.callbackID = 0;
    this.disposableCallbacks = {};
    this.nonDisposableCallbacks = {};
    this.luaResultHandlers = {};
    this.customMessageHandler = undefined;
    let inst = this;
    if(external.addEventListener){
        external.addEventListener("message", function (msg) {
            let cmd = JSON.parse(msg.data);
            if (LUA_EVENT_HANDLER_MAPPER.hasOwnProperty(cmd.cmd)) {
                let funcName = LUA_EVENT_HANDLER_MAPPER[cmd.cmd];
                if (typeof(inst[funcName]) == "function") {
                    inst[funcName](cmd);
                }
            }
            else {
                if (typeof (inst.customMessageHandler) == "function") {
                    inst.customMessageHandler(cmd);
                    return;
                }
                else {
                    return;
                }
            }
        });
    }
}

PandoraSDKAdapterCls.prototype.getNewID = function () {
    let id = this.callbackID;
    this.callbackID += 1;
    return id.toString();
}

PandoraSDKAdapterCls.prototype.getNondisposableCallbackID = function(func) {
    for (let k in this.nonDisposableCallbacks) {
        let f = this.nonDisposableCallbacks[k];
        if (func === f) {
            return k;
        }
    }
    return undefined;
}

PandoraSDKAdapterCls.prototype.registerCustomMessageHandler = function(handler) {
    this.customMessageHandler = handler;
}

PandoraSDKAdapterCls.prototype.registerDisposableCallback = function (callback) {
    let id = this.getNewID();
    this.disposableCallbacks[id] = callback;
    return id;
}

PandoraSDKAdapterCls.prototype.registerNondisposableCallback = function (callback) {
    let id = this.getNewID();
    this.nonDisposableCallbacks[id] = callback;
    return id;
}

PandoraSDKAdapterCls.prototype.removeNondisposableCallbackByID = function (id) {
    if (this.nonDisposableCallbacks.hasOwnProperty(id)) {
        delete this.nonDisposableCallbacks[id];
    }
}

// when callback is invoked, it will be remove from this.disposableCallbacks
PandoraSDKAdapterCls.prototype.onInvokeDisposableCallback = function (cmd) {
    let id = cmd.callbackID;
    if (id == undefined) {
        return;
    }

    let callback = this.disposableCallbacks[id];
    if (callback == undefined) {
        return;
    }
    delete this.disposableCallbacks[id];
    let args = decodeArgs(cmd.args);
    callback(...args);
}

PandoraSDKAdapterCls.prototype.onInvokeNondisposableCallback = function (cmd) {
    let id = cmd.callbackID;
    if (id == undefined) {
        return;
    }

    let callback = this.nonDisposableCallbacks[id];
    if (callback == undefined) {
        return;
    }
    let args = decodeArgs(cmd.args);
    callback(...args);
}

PandoraSDKAdapterCls.prototype.onProcessLuaReturn = function (cmd) {
    let isSuccess = cmd.callSuccess;
    let err = cmd.err;
    let id = cmd.callbackID;

    if (!this.luaResultHandlers.hasOwnProperty(id)) {
        return undefined;
    }
    let results = decodeArgs(cmd.args);
    let handlers = this.luaResultHandlers[id];
    delete this.luaResultHandlers[id];

    if (isSuccess) {
        if (handlers.hasOwnProperty("successHandler")) {
            handlers["successHandler"](...results);
        }
    } else {
        if (handlers.hasOwnProperty("failedHandler")) {
            handlers["failedHandler"](err);
        }
    }
}

let BANNED_FUNCTIONS = {
    "LuaTimer.Add": "LuaTimer is not allowed to call from javascript, use window.setInterval and window.setTimeout instead",
    "LuaTimer.Delete": "LuaTimer is not allowed to call from javascript, use window.setInterval and window.setTimeout instead",
}

let LUAFUNC_ARG_OP_CODE = {
    "EventDispatcher.AddEventListener": FUNCARG_OP_CODE.ADD_NONDISPOSABLE_FUNC,
    "EventDispatcher.RemoveEventListener": FUNCARG_OP_CODE.REMOVE_NONDISPOSABLE_FUNC,
}

PandoraSDKAdapterCls.prototype.callLua = function (funcname, successHandler, failedHandler, ...args) {
    let bannedMessage = BANNED_FUNCTIONS[funcname];
    if (bannedMessage) {
        return undefined;
    }
    
    let cmdobj = {};
    cmdobj.func = funcname;
    let opcode = LUAFUNC_ARG_OP_CODE[funcname];
    if (opcode == undefined) {
        opcode = FUNCARG_OP_CODE.ADD_DISPOSABLE_FUNC;
    }
    cmdobj.args = encodeArgs(this, opcode, ...args);
    let callbackID = this.getNewID();
    cmdobj.callbackID = callbackID;
    if (successHandler != undefined || failedHandler != undefined)
    {
        this.luaResultHandlers[callbackID] = {
            "successHandler": successHandler,
            "failedHandler": failedHandler
        };
    }
    if(external.sendMessage){
        external.sendMessage(JSON.stringify(cmdobj));
    }
}

// Export OpenPlatform SDK async API
// 调用网络接口
PandoraSDKAdapterCls.prototype.callBroker = function (successHandler,  cmdid, request, callback) {
    return this.callLua("Common.CallBroker", successHandler, null, cmdid, request, callback);
}

// 调用网络接口，访问下游服务器
PandoraSDKAdapterCls.prototype.callApplicationBroker = function (successHandler, commandId, subCommandId, applicationId, appKey, requestBodyObject, callback) {
    return this.callLua("Common.CallApplicationBroker", successHandler, null, commandId, subCommandId, applicationId, appKey, requestBodyObject, callback);
}

function createInstance() {
    let instance = new PandoraSDKAdapterCls();
    return instance;
}

export let PandoraSDKAdapter = makeSingleton(createInstance);
export let platformAPIwithCallback = PandoraSDKAdapter.getInstance();
