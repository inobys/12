/*
    说明
    JS Frame 是活动的公用代码
    appsettings.js   提供了环境获取接口， 本文件需要在每个页面启动时被加载，否则日志可能无法正常输出
    platform-api.js  提供了小应用平台 SDK API 常用接口
*/

let { appIdRelease, appKeyRelease, appIdDebug, appKeyDebug, appId , appKey} = APP_SETTING.APP_CFG;
let appSettings = {};
let jsFrameVersion = "1.3.4";
let _isProductEnv;

// 获取 JSFrame 版本号
appSettings.getJSFrameVersion = () => {
    return jsFrameVersion;
}

appSettings.getSDKFrameVersion = () => {
    if( typeof gamelet === 'object' && gamelet){
        return gamelet.gameServiceFrameVersion;
    }
    return "";
}

appSettings.getAppPage = () => {
    if( typeof gamelet === 'object' && gamelet){
        return gamelet.mainpage;
    }
    return "";
}

// 设置正式/测试环境。系统会自动获取潘多拉连接的环境，通常无需手动设置
// @isProductEnv : bool  true正式环境 / false测试环境
appSettings.setIsProductEnv = ( isProductEnv ) => {
    _isProductEnv = isProductEnv;
};

// 获取正式/测试环境
// @return : bool true正式环境 / false测试环境 
// 使用示例 : appSettings.getIsProductEnv()
appSettings.getIsProductEnv = () => {
    // 1 尝试从 gamelet 变量中取值
    if(!_isProductEnv){
        if( typeof gamelet === 'object' && gamelet){
            _isProductEnv = gamelet.isProductEnv;
        }    
    }

    // 2 从URL中取值
    if(!_isProductEnv){
        _isProductEnv = appSettings.getQueryString('_isProductEnv') === 'true' ? true : false;
    }
    return _isProductEnv;
};

// 获取App信息
// 使用示例 : appSettings.GetAppInfo().appId , appSettings.GetAppInfo().appKey
appSettings.getAppInfo = () => {
    let retAppId, retAppKey; 

    // 第一步，从gamelet中读取
    if( typeof gamelet === 'object' && gamelet){
        retAppId = gamelet.appId;
        retAppKey = gamelet.appKey;
    }

    // 第二步，从全局信息读取
    if(!retAppId && appId){
        retAppId = appId;
    }
    if(!retAppKey && appKey){
        retAppKey = appKey;
    }

    // 第三步，从debug/release读取
    if(appSettings.getIsProductEnv() === true){
        // 正式环境
        if(!retAppId && appIdRelease){
            retAppId = appIdRelease;
        }
        if(!retAppKey && appKeyRelease){
            retAppKey = appKeyRelease;
        }
    }else if(appSettings.getIsProductEnv() === false){
        // 测试环境
        if(!retAppId && appIdDebug){
            retAppId = appIdDebug;
        }
        if(!retAppKey && appKeyDebug){
            retAppKey = appKeyDebug;
        }
    }
    return {appId: retAppId , appKey: retAppKey};
};

// 日志函数重载，加入appid
let logger = {
    log : console.log,
    warn : console.warn,
    error : console.error
}

console.log = (...args) => {
    logger.log("[AppId:" + appSettings.getAppInfo().appId + "]",...args);
}

console.warn = (...args) =>{
    logger.warn("[AppId:" + appSettings.getAppInfo().appId + "]",...args);
}

console.error = (...args) =>{
    logger.error("[AppId:" + appSettings.getAppInfo().appId + "]",...args);
}

appSettings.getQueryString = (queryName) => {
    var query = decodeURI(window.location.search.substring(0));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == queryName) { return pair[1]; }
    }
    return null;
}

export { appSettings };
