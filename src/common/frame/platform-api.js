

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
    "callbackID": (identifier of lua return results which used to find signal trigger stored in this.luaResultSignals),
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
import { appSettings } from "./appsettings.js"

let FUNCARG_OP_CODE = {
    "ADD_DISPOSABLE_FUNC": 0,
    "ADD_NONDISPOSABLE_FUNC": 1,
    "REMOVE_NONDISPOSABLE_FUNC": 2,
}

function makeSingleton(cls) {
    return (function () {
        var instance;
        return {
            getInstance: function () {
                if (!instance) {
                    instance = new cls();
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
    this.luaResultSignals = {};
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
                    // console.log("cmd processor " + cmd.cmd + " not defined");
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

    if (!this.luaResultSignals.hasOwnProperty(id)) {
        return undefined;
    }
    let results = decodeArgs(cmd.args);
    let signals = this.luaResultSignals[id];
    delete this.luaResultSignals[id];

    if (isSuccess) {
        if (results.length == 1) {
            signals.procDoneSignal(results[0]);
            return;
        }
        if (results.length <= 0) {
            signals.procDoneSignal();
            return;
        }
        signals.procDoneSignal(results);
    } else {
        signals.procFailedSignal(err);
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

PandoraSDKAdapterCls.prototype.callLua = function (funcname, ...args) {
    let bannedMessage = BANNED_FUNCTIONS[funcname];
    if (bannedMessage) {
        console.log(bannedMessage);
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

    var procDoneSignal;
    var procFailedSignal;
    let promise = new Promise(function(resolve, reject){
        procDoneSignal = resolve;
        procFailedSignal = reject;
    });
    this.luaResultSignals[callbackID] = {
        "procDoneSignal": procDoneSignal,
        "procFailedSignal": procFailedSignal
    };

    if(external.sendMessage){
        external.sendMessage(JSON.stringify(cmdobj));
    }
    return promise;
}

//----------------------
// 以下是平台API
//----------------------

// 是否可以调用小应用平台SDK API, 同步接口
// @return bool 
// Example：
// let canUsePlatformAPI = platformAPI.canUsePlatformAPI()
PandoraSDKAdapterCls.prototype.canUsePlatformAPI = () => {
    let sdk_info = appSettings.getQueryString("_sdk_info");
    if(sdk_info === "openplatform_unity" ){
        return true;
    }
    return false;
} 

// 获取 appId
// @return int
// let appId = platformAPI.getAppId()
PandoraSDKAdapterCls.prototype.getAppId = () => {
    return appSettings.getAppInfo().appId;
} 

PandoraSDKAdapterCls.prototype.getAppName = () => {
    return appSettings.getAppInfo().appName;
}

// 获取 appKey
// @return string 
// let appId = platformAPI.getAppKey()
PandoraSDKAdapterCls.prototype.getAppKey = () => {
    return appSettings.getAppInfo().appKey;
}

// Export OpenPlatform SDK API | 结果直接从返回值中获取， 调用时需要在函数前加 await
// Example : 
// let userdata = await platformAPI.getUserData();

// 获取用户登录态，返回值是一个登录态Object， 包括以下字段，均为string类型：
// sRoleId       角色ID
// sOpenId       用户标识
// sServiceType  游戏简称,如完美世界（wmsj，这个是跟接入AMS系统时的代号一致）
// sAcountType   帐号类型：qq(手Q) wx(微信) ttpp(游客)
// sArea         大区号，正式环境下微信为1，手Q为2，测试环境下各业务可能各不相同
// sPartition　　小区号（区服）
// sAppId        应用ID
// sAccessToken  登录token
// sPayToken     支付token,手Q有单独的支付token，微信支付token和登录token相同
// sGameVer      游戏版本号
// sPlatID       平台ID：0(ios) 1(android)
// sGameName     游戏名称，跟sServiceType一致
// sMSDKGameID   只有接入GCloud的业务使用此字段，游戏在MSDK平台注册的应用ID
// sSdkVersion   潘多拉SDK版本号，如SPEEDM-IOS-1，在SDK升级时会改变，也用于云端规则匹配
PandoraSDKAdapterCls.prototype.getUserData = async function ()  {
    return await this.callLua("Common.GetUserDataTable");
}

// 获取平台标识符，返回值类型：string  包括 pc android mac ios
PandoraSDKAdapterCls.prototype.getPlatformDesc = async function ()  {
    return await this.callLua("Common.GetPlatformDesc");
}

// 获取App版本号
// @return : string , 版本号字符串 
PandoraSDKAdapterCls.prototype.getAppVersion = async function ()  {
    return await this.callLua("Common.GetAppVersion", appSettings.getAppInfo().appId);
}

// 获取是否正式环境
// @return : bool
PandoraSDKAdapterCls.prototype.getIsProductEnvironment = async function ()  {
    return await this.callLua("Common.IsProductEnvironment");
}

// 写文件 
// 注意：为了避免不同活动写入的文件名重复，文件名会被加上appId后缀。文件超过一定时间后(目前是7天)将被自动删除
// @param fileName 文件名，相对路径，绝对路径是pandora的cookies目录+fileName
// @param content  文件内容
// @return 写文件成功返回true；否则返回false
PandoraSDKAdapterCls.prototype.writeCookie =  function(fileName, content){
    this.callLua("Common.WriteCookie" , fileName  + "_" + appSettings.getAppInfo().appId, content);
}

// 读文件 
// 注意：为了避免重复，文件名会被加上appId后缀
// @param fileName 文件名，相对路径，绝对路径是pandora的cookies目录+fileName
// @return 读取成功返回文件内容，读取失败返回空字符串
PandoraSDKAdapterCls.prototype.readCookie = async function(fileName){
    return await this.callLua("Common.ReadCookie" , fileName + "_" + appSettings.getAppInfo().appId);
}

// 设置缓存信息
// @dataKey : string  保存数据的key
// @dataValue ： string  要保存的数据 
PandoraSDKAdapterCls.prototype.setDataStash = async function (dataKey, dataValue)  {
    if(arguments.length === 2){
        this.callLua("Common.SetDataStash", appSettings.getAppInfo().appId, appSettings.getAppInfo().appKey, dataKey, dataValue);
    }else if(arguments.length === 3){
        // 兼容旧参数 appId , dataKey, dataValue
        this.callLua("Common.SetDataStash", appSettings.getAppInfo().appId, appSettings.getAppInfo().appKey, arguments[1], arguments[2]);
    }
}

// 获取缓存的信息
// @dataKey : string  保存数据的key
// @return : string 保存的数据
PandoraSDKAdapterCls.prototype.getDataStash = async function (dataKey)  {
    return await this.callLua("Common.GetDataStash", appSettings.getAppInfo().appId, dataKey);
}

// 清除缓存的信息
PandoraSDKAdapterCls.prototype.clearDataStash = async function ()  {
    this.callLua("Common.ClearDataStash", appSettings.getAppInfo().appId, appSettings.getAppInfo().appKey);
}

// 给游戏发json消息
// @jsonStr ： string 消息字符串
PandoraSDKAdapterCls.prototype.callGame = async function (jsonStr)  {
    this.callLua("Common.CallGame", jsonStr);
}

// JS 异常上报 | 上报字符串类型（用于分析异常）
// @content :   string  上报内容
PandoraSDKAdapterCls.prototype.reportJSExceptionStringToTdm =  function(content){
    if(appSettings.getSDKFrameVersion().length > 0 && appSettings.getAppPage().length > 0){
        this.callLua("Common.ReportJSExceptionToTdmEx" , content, appSettings.getAppInfo().appId, appSettings.getAppInfo().appKey, appSettings.getAppPage());  
    }else{
        this.callLua("Common.ReportJSExceptionToTdm" , content, appSettings.getAppInfo().appId, appSettings.getAppInfo().appKey);  
    }
}

// 自定义TAG上报 | TDM上报字符串类型（用于自定义统计）
// @content :   string  上报内容
// @tag :       string  特性点tag
PandoraSDKAdapterCls.prototype.reportStringToTdm =  function(content, tag){
    if(appSettings.getSDKFrameVersion().length > 0 && appSettings.getAppPage().length > 0){
        this.callLua("Common.ReportToTdmEx" , content, tag, 2, appSettings.getAppInfo().appId, appSettings.getAppInfo().appKey, appSettings.getAppPage());
    }else{
        this.callLua("Common.ReportToTdm" , content, tag, 2, appSettings.getAppInfo().appId, appSettings.getAppInfo().appKey);
    }
}

// 自定义TAG上报 | TDM上报累加类型（用于统计次数）
// @tag :     string  特性点tag
PandoraSDKAdapterCls.prototype.reportNumberToTdm =  function(tag){
    if(appSettings.getSDKFrameVersion().length > 0 && appSettings.getAppPage().length > 0){
        this.callLua("Common.ReportToTdmEx" , "", tag, 0, appSettings.getAppInfo().appId, appSettings.getAppInfo().appKey, appSettings.getAppPage());
    }else{
        this.callLua("Common.ReportToTdm" , "", tag, 0, appSettings.getAppInfo().appId, appSettings.getAppInfo().appKey);
    }
}

// 经分上报
PandoraSDKAdapterCls.prototype.reportStats =  function(iModule, iChannelId, iType, iActId, iJumpType, sJumpUrl,
    sRecommendId, iChangjingId, iGoodsId, iCountId, iFee,
    iCurrencyType, iActStyle, iFlowId, extendList){
    this.callLua("Common.OpenPlatformReportStats" , iModule, iChannelId, iType, iActId, iJumpType, sJumpUrl,
                 sRecommendId, iChangjingId, iGoodsId, iCountId, iFee,
                 iCurrencyType, iActStyle, iFlowId, extendList);
}

PandoraSDKAdapterCls.prototype.reportToATM = function(iType, iChangjingId, iGoodsId, iCountId, iFee, iFlowId, extendList){
    this.callLua("Common.OpenPlatformReportStats", 0, 0, iType, this.getAppId(), 0, "",0, iChangjingId, iGoodsId, iCountId, iFee, "openplat", 0, iFlowId, extendList);
}

// 注册收消息（用来收从别的虚拟机发过来的消息）
PandoraSDKAdapterCls.prototype.addEventListener =  function(eventType, listener){
    this.callLua("EventDispatcher.AddEventListener" , eventType, listener);
}

// 反注册
PandoraSDKAdapterCls.prototype.removeEventListener =  function(eventType, listener){
    this.callLua("EventDispatcher.RemoveEventListener" , eventType, listener);
}

// 发消息
PandoraSDKAdapterCls.prototype.dispatchEvent =  function(eventType, msg){
    this.callLua("EventDispatcher.DispatchEvent" , eventType, msg);
}

let PandoraSDKAdapter = makeSingleton(PandoraSDKAdapterCls);
export let platformAPI = PandoraSDKAdapter.getInstance();
