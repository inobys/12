declare module "frame"{
    import { UnityEngine, com, System } from 'csharp';
export declare class Common {
    static increasingCallId: number;
    static GAME_COMMAND: string;
    static SDK_COMMAND: string;
    static CLOSE_PANEL: string;
    static PUSH_DATA: string;
    static TIMEOUT_MESSAGE: string;
    static timestamp: {
        svr: number;
        client: number;
    };
    static CommandDelegate: com.tencent.pandora.JsEnvManager.CommandFromGameDelegate;
    static ExecuteCallbackDelegate: com.tencent.pandora.JsEnvManager.ExecuteCallbackDelegate;
    static RefreshTimestampDelegate: com.tencent.pandora.JsEnvManager.RefreshTimestampDelegate;
    static SetApplicationConfigDelegate: com.tencent.pandora.JsEnvManager.SetApplicationConfigDelegate;
    static GetBuiltinModulesDelegate: com.tencent.pandora.JsEnvManager.GetBuiltInModulesDelegate;
    static roleInfo: any;
    static IsHaveHeroSkinMethod: any;
    static IsHaveHeroMethod: any;
    static CRoleInfoManager: any;
    static Init(): void;
    static RequestFaasSvrViaXHR(): void;
    static InitDelegate(): void;
    /**
     * 获取平台类型
     * @returns 当前平台类型，包括:pc android mac ios
     */
    static GetPlatformDesc(): string;
    /**
     * 获取SDK版本号
     * @returns SDK版本号
     */
    static GetSDKVersion(): string;
    /**
     * 释放未使用的assets
     */
    static UnloadUnusedAssets(): void;
    /**
     * 获取用户数据
     * @returns UserData
     * UserData包括以下字段，均为string类型：
     * sRoleId       角色ID
     * sOpenId       用户标识
     * sServiceType  游戏简称,如完美世界（wmsj，这个是跟接入AMS系统时的代号一致）
     * sAcountType   帐号类型：qq(手Q) wx(微信) ttpp(游客)
     * sArea         大区号，正式环境下微信为1，手Q为2，测试环境下各业务可能各不相同
     * sPartition　　小区号（区服）
     * sAppId        应用ID
     * sAccessToken  登录token
     * sPayToken     支付token,手Q有单独的支付token，微信支付token和登录token相同
     * sGameVer      游戏版本号
     * sPlatID       平台ID：0(ios) 1(android)
     * sQQInstalled  手Q是否已安装，0（未安装），1（已安装）
     * sWXInstalled  微信是否已安装，0（未安装），1（已安装）
     * sGameName     游戏名称，跟sServiceType一致
     * sMSDKGameID   只有接入GCloud的业务使用此字段，游戏在MSDK平台注册的应用ID
     * sSdkVersion   潘多拉SDK版本号，如SPEEDM-IOS-1，在SDK升级时会改变，也用于云端规则匹配
     * sLevel        玩家等级，部分游戏在登录时可能获取不到玩家等级，此字段相应为空
     * sVender       游戏下载安装的渠道号，如通过应用宝安装，渠道号为2002
     * sOS           操作系统类型，1 - Android, 2 - iOS, 3 - Web，4 - Linux, 5 - windows
     *               只有接入GCloud的业务会使用sOS字段
     * sChannelID    登录渠道，1 - 微信(WeChat)，2 - 手Q(mqq)，3 - 游客(Guest)，4 - Facebook，5 - GameCenter,
     *               6 - GooglePlay, 100 - 自建账号体系，只有接入GCloud的业务会使用sChannelID字段
     */
    static GetUserData(): com.tencent.pandora.UserData;
    static GetJsObjectFormatUserdata(): {};
    /**
     * 刷新登录和支付token，调用此接口后，再通过Common.GetUserData()获取到的用户信息中就是最新的token
     * @returns
     */
    static RefreshUserDataTokens(): void;
    /**
     * 获取总开关
     * @returns 总开关开启，返回true；否则返回false
     */
    static GetTotalSwitch(): boolean;
    /**
     * 获取功能开关
     * @param funcName 要获取的功能开关名称
     * @returns        开关开启返回true，否则返回false
     */
    static GetFunctionSwitch(funcName: string): boolean;
    /**
     * 写文件，文件超过一定时间后(目前是7天)将被自动删除
     * @param fileName 文件名，相对路径，绝对路径是pandora的cookies目录+fileName
     * @param content  文件内容
     * @returns        写文件成功返回true；否则返回false
     */
    static WriteCookie(fileName: string, content: string): boolean;
    /**
     * 读文件
     * @param fileName 文件名，相对路径，绝对路径是pandora的cookies目录+fileName
     * @returns        读取成功返回文件内容，读取失败返回空字符串
     */
    static ReadCookie(fileName: string): string;
    /**
     * ts层向游戏发送请求
     * @param jsonStr 向游戏传递的json请求串
     */
    static CallGame(jsonStr: string): void;
    /**
     * ts层向游戏发送请求
     * @param jsonObj 参数为 table类型
     */
    static CallGameByJsonObj(jsonObj: object): void;
    static GetEmptyDict(): System.Collections.Generic.Dictionary$2<string, any>;
    static CallGameWithReturn(dict: System.Collections.Generic.Dictionary$2<string, any>, callback: (args: any[]) => void, ...args: any[]): string;
    /**
     * tnm2上报机制
     * @param content 内容，string类型
     * @param id      id，number类型
     * @param type    类型，number类型，0：叠加类型，1：平均值类型，2：字符型告警类型
     */
    static Report(content: string, id: number, type: number): void;
    /**
     * 上报错误接口
     * @param errMsg    错误信息，string类型
     * @param errorCode 错误码，number类型
     */
    static ReportError(errMsg: string, errorCode: number): void;
    /**
     * 检查上报的TDM tag是否有效
     * @param id
     * @returns true/false
     */
    static CheckTDMIDAvailable(id: any): boolean;
    /**
     * 开放平台应用上报监控数据
     * @param content 内容，string类型
     * @param id      tdm id，string类型
     * @param type    类型，number类型，0：叠加类型，1：平均值类型，2：字符型告警类型
     * @param appId   开放平台应用Id
     * @param appKey
     * @returns
     */
    static ReportToTdm(content: string, id: string, type: number, appId: number, appKey: string): void;
    static CheckAppKey(appId: number, appKey: string): boolean;
    /**
     * ts层向server发送请求
     * @param commandId 请求命令字，number类型，如拉取活动为9000
     * @param request 请求串，string类型
     * @param callback 处理响应的回调函数，回调函数被执行时，最后一个参数是返回的响应数据
     * @param moduleName 调用此函数的模块的名字，比如 拍脸 Pop，如果是小应用则为小应用的appid
     * @param timeout 超时时间
     * @param args 可变参数列表，此参数列表会排在前面传递回callback
     */
    static CallBroker(commandId: number, request: string, callback: (...args: any[]) => void, moduleName: string, timeout?: number, ...args: any[]): void;
    /**
     * 向server发送请求扩展接口，用于开放平台时可以传递subCommandId，applicationId
     * @param commandId 请求命令字，number类型，如拉取活动为9000
     * @param subCommandId 请求子命令字，number类型，如拉取活动为10000
     * @param applicationId Pandora应用Id
     * @param request 请求串，string类型
     * @param callback 处理响应的回调函数，回调函数被执行时，最后一个参数是返回的响应数据
     * @param moduleName 调用此函数的模块的名字，比如 拍脸 Pop，如果是小应用则为小应用的appid
     * @param timeout 超时时间
     * @param args 可变参数列表，此参数列表会排在前面传递回callback
     */
    static CallBrokerExtend(commandId: number, subCommandId: number, applicationId: number, request: string, callback: (...args: any[]) => void, moduleName: string, timeout?: number, ...args: any[]): void;
    /**
     * Common.CallBrokerExtend方法类似，小应用平台faas长链接应调用本接口
     * @param commandId
     * @param subCommandId
     * @param applicationId
     * @param appKey
     * @param requestBodyObject
     * @param callback
     * @param timeout
     * @param args
     */
    static CallApplicationBroker(commandId: number, subCommandId: number, applicationId: number, appKey: string, requestBodyObject: object, callback: (...args: any[]) => void, timeout?: number, ...args: any[]): void;
    static GenCallApplicationBrokerRequest(id: any, subCommandId: any, applicationId: any, appKey: any, requestbodyProxyDataObject: any): string;
    /**
     * 拼接 CallApplicationBroker 的签名
     * @param headerTable 请求header
     * @param appkey 应用的appkey
     * @returns
     */
    static CalculateCallApplicationBrokerSign(headerTable: any, appkey: any): string;
    /**
     * 获取应用的appid, 查询失败时返回 -10001
     * @param moduleName 模块名
     * @returns AppId 或 -10001(失败)
     */
    static GetAppId(moduleName: string): number;
    /**
     * 获取应用的版本号
     * @param appId 开放平台应用Id
     * @returns     版本号
     */
    static GetAppVersion(appId: number): string;
    /**
     * 获取url指定的图片
     * @param url       图片的地址
     * @param callback  回调函数，如果图片加载成功，图片的Texture会作为最后一个参数传递给callback
     * @param args      可变参数列表，此参数列表会排在前面传递回callback
     */
    static GetImage(url: string, callback: (args: any[]) => void, ...args: any[]): void;
    static GetImageCallback(jsonStr: string): void;
    /**
     * 获取url指定的文本
     * @param url       文本的地址
     * @param callback  回调函数，如果文本加载成功，文本会作为最后一个参数传递给callback
     * @param args      可变参数列表，此参数列表会排在前面传递回callback
     */
    static GetText(url: string, callback: (args: any[]) => void, ...args: any[]): void;
    /**
     * @deprecated this method is deprecated, please use CreatePanelAndReportStats instead
     * 创建面板
     * @param panelName 面板名称
     * @param callback 创建面板完成后的回调函数，若创建面板成功，面板的gameobject会作为最后一个参数传递给callback；
     * @param args 可变参数列表，此参数列表会排在前面传递回callback
     */
    static CreatePanel(panelName: string, callback: (args: any[]) => void, ...args: any[]): void;
    /**
     * 创建面板并上报
     * @param panelName 面板名称
     * @param appId  应用id
     * @param callback 创建面板完成后的回调函数，若创建面板成功，面板的gameobject会作为最后一个参数传递给callback；
     * @param args 可变参数列表，此参数列表会排在前面传递回callback
     */
    static CreatePanelAndReportStats(panelName: string, appId: number, callback: (args: any[]) => void, ...args: any[]): void;
    static CreatePanelCallback(args: any[]): void;
    /**
     * 关闭所有pandora面板，需要所有活动都注册了对Common.CLOSE_PANEL事件的监听
     */
    static CloseAllPanel(): void;
    /**
     * 关闭指定名称的pandora面板，需要对应活动注册了对Common.CLOSE_PANEL事件的监听
     * @param panelName 面板名称
     */
    static ClosePanel(panelName: string): void;
    /**
     * 获取面板
     * @param panelName 面板名称
     * @returns GameObject
     */
    static GetPanel(panelName: string): UnityEngine.GameObject;
    /**
     * @deprecated this method is deprecated, please use DestroyPanelAndReportStats instead
     * 销毁面板
     * @param panelName 面板名称
     * @param needReleaseCDNImages 是否释放此面板中使用的CDN图片
     */
    static DestroyPanel(panelName: string, needReleaseCDNImages?: boolean): void;
    /**
     * 销毁面板并上报
     * @param panelName 面板名称
     * @param appId 应用id
     * @param needReleaseCDNImages 是否释放此面板中使用的CDN图片
     */
    static DestroyPanelAndReportStats(panelName: string, appId: number, needReleaseCDNImages?: boolean): void;
    /**
     * 显示图片
     * @param panelName         面板名称，在哪个面板上显示图片
     * @param url               图片的url
     * @param imageHost         显示图片的UITexture/Image所在的节点
     * @param isCacheInMemory   图片加载完毕后，是否缓存在内存中
     * @param callback          回调函数，显示图片结果将会以最后一个参数传递给callback，其格式是{"RetCode":"0", "PanelName":"PanelName", "Url":"Url"}，0表示显示图片成功
     * @param args              可变参数列表，此参数列表会排在前面传递回callback
     */
    static ShowImage(panelName: string, url: string, imageHost: UnityEngine.GameObject, isCacheInMemory: boolean, callback: (args: any[]) => void, ...args: any[]): void;
    /**
     * 显示头像，参数和ShowImage含义相同，支持Gif格式
     * @param panelName
     * @param url
     * @param imageHost
     * @param isCacheInMemory
     * @param callback
     * @param args
     */
    static ShowPortrait(panelName: string, url: string, imageHost: UnityEngine.GameObject, isCacheInMemory: boolean, callback: (args: any[]) => void, ...args: any[]): void;
    /**
     * 下载图片到本地磁盘
     * @param url 图片的url
     */
    static CacheImage(url: string): void;
    /**
     * 判断图片是否已经下载到本地磁盘
     * @param url 图片的url
     * @returns   图片已下载到本地磁盘返回true；否则返回false
     */
    static IsImageCached(url: string): boolean;
    /**
     * 判断文件是否已经下载到本地磁盘
     * @param url 下载的url
     * @returns   文件已下载到本地磁盘返回true；否则返回false
     */
    static IsAssetCached(url: string): boolean;
    /**
     * 释放强引用资源（如果url指定的资源被缓存在强引用池中，使用此接口减少在强引用池中的引用计数，当计数为0后，该资源会被释放）
     * @param url 资源的url
     */
    static ReleaseAsset(url: string): void;
    /**
     * 获取资源的通用接口
     * @param url 资源的url
     * @returns
     */
    static GetAsset(url: string): System.Object;
    /**
     * 加载普通Prefab
     * @param url               Prefab的url
     * @param isCacheInMemory   Prefab加载完毕后，是否缓存在内存中
     * @param callback          回调函数，Prefab加载后会被实例化，实例化得到的GameObject会传给callback
     */
    static LoadGameObject(url: string, isCacheInMemory: boolean, callback: any): void;
    static LoadGameObjectByPanelName(appid: string, panelName: string, callback: any): void;
    static GetAssetbundleUrl(appid: string, panelName: string): string;
    /**
     * 加载AssetBundle
     * @param url        AssetBundle的url
     * @param callback   加载完成后的回调函数，加载到的AssetBundle会做为最后一个参数传给callback
     * @param args       可变参数列表，此参数列表会排在前面传递回callback
     */
    static LoadAssetBundle(url: string, callback: (args: any[]) => void, ...args: any[]): void;
    static OnLoadAsset(jsonStr: string): void;
    /**
     * 发送http请求
     * @param url           请求的url
     * @param reqParams     请求的参数
     * @param isPost        bool型参数，true表示POST请求，false表示GET请求
     * @param callback      回调函数，请求结果会作为最后一个参数传递给callback
     *                      其格式是{"RetCode":"0", "Resp":"XXXXXXXXXXX"}，
     *                      其中RetCode的值为0表示成功，否则失败；Resp字段中的数据是真正的响应数据
     * @param moduleName    调用此函数的模块的名字，比如 拍脸 Pop，如果是小应用则为小应用的appid
     * @param args          可变参数列表，此参数列表会排在前面传递回callback
     */
    static SendWwwRequest(url: string, reqParams: string, isPost: boolean, callback: (args: any[]) => void, moduleName: string, ...args: any[]): void;
    /**
     * 发送附带二进制数据的http请求
     * @param url           请求的url
     * @param reqParams     请求的参数
     * @param binaryData    二进制数据,Byte[]类型
     * @param isPost        bool型参数，这里只能为true
     * @param callback      回调函数，请求结果会作为最后一个参数传递给callback
     *                      其格式是{"RetCode":"0", "Resp":"XXXXXXXXXXX"}，
     *                      其中RetCode的值为0表示成功，否则失败；Resp字段中的数据是真正的响应数据
     * @param moduleName    调用此函数的模块的名字，比如 拍脸 Pop，如果是小应用则为小应用的appid
     * @param args          可变参数列表，此参数列表会排在前面传递回callback
     */
    static SendWwwRequestWithBinaryData(url: string, reqParams: string, binaryData: System.Array$1<number>, isPost: boolean, callback: (args: any[]) => void, moduleName: string, ...args: any[]): void;
    /**
     * 发送携带字符串格式数据的http请求
     * @param url           请求的url
     * @param postString    发送的字符串数据
     * @param callback      回调函数，请求结果会作为最后一个参数传递给callback
     *                      其格式是{"RetCode":"0", "Resp":"XXXXXXXXXXX"}，
     *                      其中RetCode的值为0表示成功，否则失败；Resp字段中的数据是真正的响应数据
     * @param args          可变参数列表，此参数列表会排在前面传递回callback
     */
    static SendWwwRequestWithText(url: string, postString: string, callback: (args: any[]) => void, ...args: any[]): void;
    /**
     * 发送字符串数据到服务器，同时带上调用者信息，标识从哪个模块调用的
     * @param url 请求的url
     * @param reqParams 请求的参数
     * @param postString 发送的字符串数据
     * @param callback 回调函数，请求结果会作为最后一个参数传递给callback
     * @param moduleName 调用此函数的模块的名字，比如 拍脸 Pop，如果是小应用则为小应用的appid
     * @param timeout 请求超时时间
     * @param requestHeaders 请求头设置
     * @param args 可变参数列表，此参数列表会排在前面传递回callback
     * 数据返回结构：
        {
            Resp={
                status = "http 状态码";
                header = "http 返回头，json格式";
                body = "http 返回的具体内容";
                error = "错误信息，如果为空，表示无错误";
            };
            RetCode = "状态码，一般不用这个判断请求状态";
        }
    */
    static PostStringWithModuleName(url: string, reqParams: string, postString: string, callback: (args: any[]) => void, moduleName: string, timeout: number, requestHeaders: string, ...args: any[]): void;
    /**
     * 上报统计数据
     * @param iModule       上报模块 1-活动中心 2-公告中心 3-整体 4-图片公告 5-幸运星 6-拍脸
     * @param iChannelId    公告中心-频道id，活动中心-固定1
     * @param iType         上报类型 1-展现 2-点击 3-跳转 4-打开 5-关闭 6-初始化 7-主界面上点击详情 8-购买点击 9-左按钮点击 10-右按钮点击 11-详情界面上点击购买等
     * @param iActId        活动中心-活动id，公告中心-公告id
     * @param iJumpType     跳转类型 3-图片公告 1-前往按钮 2-富文本内容
     * @param sJumpUrl      跳转URL 当公告中心时有跳转链接时上报
     * @param sRecommendId  推荐接口上报id，上报时填入上报协议，用来数据中心推荐效果统计
     * @param iChangjingId  触发场景id，后台填写固定值上报，客户端不用填写
     * @param iGoodsId      礼包ID，即数据中心为用户推荐的道具ID
     * @param iCountId      物品购买数量，如果数量大于1请填写此值，如果不填写后台默认该值为1
     * @param iFee          购买金额
     * @param iCurrencyType 货币种类 1-游戏币，2-人民币
     * @param iActStyle     活动类型 1-单按钮活动,3-多按钮活动,4-静态展示页面,无AMS活动号, 5-幸运星活动,6-新近玩家活动,7-老手回流活动,9-兑换活动
     * @param iFlowId       活动流程号
     * @param extendList    扩展字段 数组每个成员为name/value形式，例如：{{"name":"reserve0","value":"0"}, {"name":"reserve1","value":"1"}, ...}，name和value的值都是字符串类型。默认支持10个扩展字段（reserve0~reserve9），需按顺序填写，多余的字段会被忽略，不会落在表里。
     * @param extendList    注意：1.value字段必须为string类型；2.如果扩展字段为空的话，默认不传参数即可，不要传空table
     * extendList 示例如下
        let extendList = [];
        let extend0 = {};
        extend0['name'] = 'reserve0';
        extend0['value'] = '1';
        extend0['type'] = 'system'; // system 代表是系统预留字段,不赋值或其他值代表活动的预留字段

        extendList[0] = extend0;
     */
    static ReportStats(iModule: number, iChannelId: number, iType: number, iActId: number, iJumpType: number, sJumpUrl: string, sRecommendId: number, iChangjingId: string, iGoodsId: number, iCountId: number, iFee: number, iCurrencyType: string | number, iActStyle: number, iFlowId: number, extendList: any[] | undefined): void;
    /**
     *  接受游戏的消息
     * @param jsonStr   从游戏发送过来的json格式消息
     */
    static CommandFromGame(jsonStr: string): void;
    static CommandFromSDK(jsonStr: string): void;
    static GenCallId(): number;
    /**
     * 获取当前时间戳，单位为毫秒
     * @returns
     */
    static GetNowMilliseconds(): bigint;
    static ExecuteCallback(id: number, jsonStr: string): void;
    static OnGetPushData(jsonStr: string): void;
    /**
     * 结构化消息分享到微信
     * @param title             标题
     * @param desc              描述
     * @param imgUrl            分享缩略图的url
     * @param userOpenId        要分享的好友openId，如果不填需要玩家手动选择好友，如果填了，系统会自动选择好友（定向分享）。
     * @param mediaTagName      此值会传到微信供统计用，可传空串。
     * @param messageExt        游戏自定义透传字段，当前传空串。
     * @param extraJson         扩展字段，游戏透传给MSDK 常见参数为{\"game_data\":\"\",\"isFriendInGame\":false}。
    */
    static ShareStructMessageToWX(title: any, desc: any, imgUrl: any, userOpenId: any, mediaTagName: any, messageExt: any, extraJson: any): void;
    /**
     * 结构化消息分享到QQ
     * @param title             标题
     * @param desc              描述
     * @param imgUrl            分享缩略图的url
     * @param targetUrl         跳转url，若填手Q游戏中心详情页链接, 点击消息可拉起游戏；填其他链接则跳转对应链接。
     * @param isToSession       是否分享到会话，true：分享到会话，false：分享到空间。
    */
    static ShareStructMessageToQQ(title: any, desc: any, imgUrl: any, targetUrl: any, isToSession: any): void;
    /**
     * 大图分享到微信
     * @param photoGameObject      待截图的节点gameObject
     * @param isToSession          是否分享到会话，true：分享到会话，false：分享到朋友圈。
     * @param mediaTagName         此值会传到微信供统计用，可传空串。
     * @param messageExt           游戏自定义透传字段，可传空串。
     * @param messageAction        分享到朋友圈时，游戏可以自定义朋友圈小尾巴行为，可传空串。
     */
    static SharePhotoToWX(photoGameObject: any, isToSession: any, mediaTagName: any, messageExt: any, messageAction: any): void;
    /**
     * 预置大图分享到微信
     * @param isToSession          是否分享到会话，true：分享到会话，false：分享到朋友圈。
     * @param mediaTagName         此值会传到微信供统计用，可传空串。
     * @param messageExt           游戏自定义透传字段，可传空串。
     * @param messageAction        分享到朋友圈时，游戏可以自定义朋友圈小尾巴行为，可传空串。
     * @param imgUrl               预置图片的url。
     * @param shareType            经分统计用，传给游戏，游戏来上报，这个值来源于埋点数据。
     * @param actionId             经分统计用，传给游戏，游戏来上报，这个值来源于管理端的活动id。
     */
    static SharePresetPhotoToWX(isToSession: any, mediaTagName: any, messageExt: any, messageAction: any, imgUrl: any, shareType: any, actionId: any): void;
    /**
    * 大图分享到QQ
    * @param photoGameObject      待截图的节点gameObject
    * @param isToSession          是否分享到会话，true：分享到会话，false：分享到空间。
    */
    static SharePhotoToQQ(photoGameObject: any, isToSession: any): void;
    /**
     * 预置大图分享到QQ
     * @param isToSession          是否分享到会话，true：分享到会话，false：分享到空间。
     * @param imgUrl               预置图片的url。
     * @param shareType            经分统计用，传给游戏，游戏来上报，这个值来源于埋点数据。
     * @param actionId             经分统计用，传给游戏，游戏来上报，这个值来源于管理端的活动id。
     */
    static SharePresetPhotoToQQ(isToSession: any, imgUrl: any, shareType: any, actionId: any): void;
    /**
     * 链接分享到微信
     * @param title             标题
     * @param desc              描述
     * @param imgUrl            分享缩略图的url
     * @param targetUrl         跳转地址
     * @param userOpenId        要分享的好友openId，如果不填需要玩家手动选择好友，如果填了，系统会自动选择好友（相当于定向分享）。
     * @param isToSession       是否分享到会话，true：分享到会话，false：分享到朋友圈。
     * @param mediaTagName      此值会传到微信供统计用，可传空串。
     * @param messageExt        游戏自定义透传字段，可传空串。
     * @param extraJson         扩展字段，游戏透传给MSDK 常见参数为{\"game_data\":\"\",\"isFriendInGame\":false}。
     */
    static ShareUrlToWX(title: any, desc: any, imgUrl: any, targetUrl: any, userOpenId: any, isToSession: any, mediaTagName: any, messageExt: any, extraJson: any): void;
    /**
     * 小程序分享到微信
     * @param title             标题
     * @param desc              描述
     * @param imgUrl            分享缩略图的url
     * @param webpageUrl        普通页面url，用于兼容旧版本微信，当打不开该小程序时就会打开此url。
     * @param userName          小程序username，如gh_d43f693ca31f，名称均为gh_这种形式，如果填错，会出现“由于不支持的分享类型，无法分享到微信”。
     * @param path              可通过该字段指定跳转小程序的某个页面（若不传，默认跳转首页）
     * @param withShareTicket   是否带shareTicket转发，如果小程序页面要展示用户维度的数据，并且小程序可能分享到群，需要设置为true。
     * @param programType       指定小程序版本，可选值为："Release" "Test", "Preview"。
     * @param userOpenId        要分享的好友openId，如果不填需要玩家手动选择好友，如果填了，系统会自动选择好友（相当于定向分享）。
     * @param isToSession       是否分享到会话，true：分享到会话，false：分享到朋友圈。
     * @param mediaTagName      此值会传到微信供统计用，可传空串。
     * @param messageExt        游戏自定义透传字段，可传空串。
     * @param messageAction     自定义小尾巴行为,可传空串。
     */
    static ShareMiniAppToWX(title: any, desc: any, imgUrl: any, webpageUrl: any, userName: any, path: any, withShareTicket: any, programType: any, userOpenId: any, isToSession: any, mediaTagName: any, messageExt: any, messageAction: any): void;
    /**
     * 跳转  SDK对接时，跳转游戏参数格式确定后，需补充此接口说明
     * @param jumpType  跳转类型，string类型，可选值如下
     *                  pandoraOpenUrl为使用MSDK浏览器打开网页
     *                  pandoraGoSystem为跳转游戏界面
     *                  pandoraGoPandora为跳转Pandora界面
     * @param content   跳转参数，string类型，跳转类型不同，参数格式不同
     */
    static Jump(jumpType: string, content: string): void;
    /**
     * 播放游戏内声音文件
     * @param id    声音文件的id，string类型
     */
    static PlaySound(id: string): void;
    /**
     * 获取游戏内最新货币数量
     * @returns     currency1 一级代币,currency2 二级代币,key值固定，对接时游戏侧需按潘多拉的需求设置代币的key
     */
    static GetCurrency(): System.Collections.Generic.Dictionary$2<string, string>;
    /**
     * 显示游戏内物品格子
     * @param go            物品格子挂载点
     * @param itemId        物品Id
     * @param itemCount     物品数量
     */
    static ShowItem(go: UnityEngine.GameObject, itemId: number, itemCount: number): void;
    /**
     * 显示游戏内物品icon图片
     * @param go        图片挂载点
     * @param itemId    物品Id
     */
    static ShowItemIcon(go: UnityEngine.UI.Image, itemId: number): void;
    /**
     * 显示游戏内物品Tips
     * @param go        Tips挂载点
     * @param itemId    物品Id
     */
    static ShowItemTips(go: string, itemId: number): void;
    /**
     * 克隆GameObject并挂载到指定父节点下
     * @param template  模板GameObject
     * @param name      对象的名字
     * @param parent    父节点GameObject
     * @returns         返回克隆得到的GameObject
     */
    static CloneAndAddToParent(template: UnityEngine.GameObject, name: string, parent: UnityEngine.GameObject): UnityEngine.GameObject;
    /**
     * 检查玩家是否使用模拟器
     * @returns
     */
    static IsEmulatorDevice(): boolean;
    /**
     * 为Url添加常规参数
     * @param originalUrl   原始Url
     * @returns             返回添加参数后的Url
     */
    static AppendGeneralParametersForUrl(originalUrl: string): string;
    /**
     * 获取gameobject在Hierarchy下的路径
     * @param gameObject
     * @returns
     */
    static GetGameObjectPath(gameObject: UnityEngine.GameObject): string;
    static IsProductEnvironment(): boolean;
    static GetPandoraGameObject(): UnityEngine.GameObject;
    /**
     * 自定义Tdm上报
     * @param json          json格式的上报内容，key必须和TDM上创建的数据表字段一致
     * @param eventName     在TDM上创建的数据表
     * @param srcId         创建的TDM数据表所属的srcId
     */
    static ReportCustomDataByTdm(json: string, eventName: string, srcId: number): void;
    static RefreshTimestamp(svrTimestamp: number): void;
    /**
     * 设置之后即将打开的小应用的相关信息(小应用平台专用)
     * @param json  json格式的活动信息
     */
    static SetApplicationConfig(json: string): void;
    /**
     * 读取之后即将打开的小应用的相关信息(小应用平台专用)
     * @returns
     */
    static GetApplicationConfig(): string;
    static GetBuildinModules(): System.Array$1<string>;
    /**
     * 创建一个沙箱环境
     * @returns
     */
    static CreateNewSandbox(): ProxySandbox;
    static GetTimestamp(): any;
    static IsPuertsRestart(): boolean;
    static GC(): void;
    static GAME_CALL_SAVE_TO_ALBUM: string;
    static GAME_CALL_SOCAIL_MESSAGE_TO_BROKER: string;
    static SafeCall(func: (...args: any[]) => any, ...params: any[]): any;
    static GetTextureBase64Data(texture: UnityEngine.Texture2D): string;
    /**
     * 通过rankGrade, rankClass获取游戏段位背景图片路径.这里的参数顺序和Common.lua中的接口一致，与CSharpInterface中的顺序相反
     * @param rankGrade
     * @param rankClass
     * @returns
     */
    static GetGameImgPath(rankGrade: number, rankClass: number): string;
    /**
     * 展示game icon，这里的参数和Common.lua中保持一样，跟C#中的参数位置不一致，不清楚Common.lua中为啥是这样
     * @param go
     * @param rankShowGrade
     * @param rankClass
     * @returns
     */
    static ShowGameIcon(go: UnityEngine.GameObject, rankShowGrade: number, rankClass: number): number;
    static ShowGameImage(djType: number, djID: number, uitexture: UnityEngine.GameObject, callback: (args: any[]) => void, ...args: any[]): void;
    static AsyncDownloadImage(url: string, callback: (args: any[]) => void, ...args: any[]): void;
    static AddClick(go: UnityEngine.GameObject, func: (go: UnityEngine.GameObject) => void): void;
    static RemoveClick(go: UnityEngine.GameObject): void;
    static AddUGUIOnClickDown(go: UnityEngine.GameObject, func: (go: UnityEngine.GameObject, pressPos: UnityEngine.Vector2) => void): void;
    static AddUGUIOnClickUp(go: UnityEngine.GameObject, func: (go: UnityEngine.GameObject, pressPos: UnityEngine.Vector2) => void): void;
    static AddBeginDragListener(gameObject: UnityEngine.GameObject, func: (go: UnityEngine.GameObject, pressPos: UnityEngine.Vector2) => void): void;
    static AddDragEventListener(gameObject: UnityEngine.GameObject, func: (go: UnityEngine.GameObject, pressPos: UnityEngine.Vector2) => void): void;
    static AddEndDragListener(gameObject: UnityEngine.GameObject, func: (go: UnityEngine.GameObject) => void): void;
    static AddNewEndDragListener(gameObject: UnityEngine.GameObject, func: (go: UnityEngine.GameObject, pressPos: UnityEngine.Vector2) => void): void;
    static AddUGUIOnValueChanged(gameObject: UnityEngine.GameObject, func: (value: boolean) => void): void;
    static AddIputFieldOnValueChanged(gameObject: UnityEngine.GameObject, func: (value: string) => void): void;
    static AddSliderOnValueChanged(gameObject: UnityEngine.GameObject, func: (value: number) => void): void;
    static ReportStringStats(stringReport: string): void;
    static testAreaId: string;
    static GetDjcArea(acctype: any, plat: any): string;
    static SetPosition(go: UnityEngine.GameObject, x: number, y: number, z: number): void;
    static SetScale(go: UnityEngine.GameObject, x: number, y: number, z: number): void;
    static SetPosZ(go: UnityEngine.GameObject, z: number): void;
    static QueryFriendsList(): string;
    static QuerySearchConfig(): string;
    static QueryRankShowName(rankShowGrade: number, rankClass: number): string;
    static OpenUrl(sUrl: string): void;
    static RefreshToken(): string;
    static GetPanelParent(panelParentName: string): UnityEngine.GameObject;
    static AsyncGetLocationFromGame(): void;
    static AERA_ANDROID_QQ: number;
    static AERA_IOS_QQ: number;
    static AERA_ANDROID_WX: number;
    static AERA_IOS_WX: number;
    static AERA_IOS_TOURISTS: number;
    static AERA_ANDROID_QQ_PRIORITY: number;
    static AERA_ANDROID_WX_PRIORITY: number;
    static AERA_ANDROID_WX_EXPERIENCE: number;
    static getAeraFromWorldID(worldid: number): number;
    static getPlatformFromWorldID(worldid: number | string): string;
    static getAcountTypeFromWorldID(worldid: number | string): string;
    static SendTextPostRequest(url: string, reqParams: string, isPost: boolean, callback: (...args: any[]) => void, ...args: any[]): void;
    static UploadBinaryFileToVod(url: string, requestHead: string, filePath: string, callback: (...args: any[]) => void, ...args: any[]): void;
    /**
     * 是否拥有对应英雄
     * @param heroid 英雄ID  ，例如 106 小乔
     * @returns 为true 则拥有该英雄 为false 则未拥有该英雄
     */
    static IsHaveHero(heroid: number): boolean;
    /**
     * 是否拥有对应英雄皮肤
     * @param heroid 英雄ID  ，例如 106 小乔
     * @param skinid 皮肤ID  ，例如 0 默认皮肤 1 万圣前夜 2 天鹅之梦 3 纯白花嫁 4 独角兽
     * @returns 为true 则拥有该皮肤 为false 则未拥有该皮肤
     */
    static IsHaveHeroSkin(heroid: number, skinid: number): boolean;
    /**
     * 头像地址转换函数
     * @param sUrl 源URL地址
     * @param style 格式 1：大头像，2：小头像
     * @returns
     */
    static TransferHeadUrl(sUrl: string, style: number): string;
    /**
     * 传入go和图片路径，由游戏赋值图片
     * @param go
     * @param iconPath
     * @returns
     */
    static ShowGameImgByPath(go: UnityEngine.GameObject, iconPath: string): number;
    static ShowSkinImage(imageHost: UnityEngine.GameObject, id: string, hasEffect: boolean): void;
    /**
     * 显示指定的半身像图标
     * @param imageHost 显示图片的Image所在的节点
     * @param id 需要显示的半身像的皮肤ID
     */
    static ShowSkinIcon(imageHost: UnityEngine.GameObject, id: string): void;
    /**
     * 显示指定的品质ID
     * @param imageHost 显示图片的Image所在的节点
     * @param id 需要显示的品质ID
     */
    static ShowQualityImage(imageHost: UnityEngine.GameObject, id: string): void;
    /**
     * 查询指定的app 是否开启了debug 开关
     * @param appId 需要查询的appid
     * @returns 返回指定的appid 是否开启了日志开关
     */
    static IsApplicationDebug(appId: number): boolean;
    static Md5EncodeString(str: string): any;
}
export declare class ClipboardHelper {
    private static isinitialized;
    private static PUERTS_GAME_COMMAND_PROCESS_FUNC;
    static CLIPBOARD_CHANGE_EVENT: string;
    static Init(): void;
    private static BuildEventListener;
    private static OnGameInterface;
    private static GetCallId;
    static SetClipboard(content: string): void;
    static GetClipboard(callback: (content: string) => void): void;
    private static OnGetClipboard;
    private static OnClipboardChange;
}
export declare class EventDispatcher {
    static InternalEventType: string[];
    static InitEventDispatcher(): void;
    static AddEventListener(eventType: any, listener: (...args: any[]) => void, ...args: any[]): void;
    static RemoveEventListener(eventType: any, listener: (...args: any[]) => void): void;
    static RemoveEventAllListener(eventType: any): void;
    /**
     * @deprecated this method is deprecated, please use TriggerEvent instead
     */
    static DispatchEvent(eventType: any, ...args: any[]): void;
    /**
     * 触发注册的事件，响应函数通过可变参数的展开形式来接收参数
     * @param eventType
     * @param args 不定参数
     * @returns
     * @samples
     * function OnEventTrigger(arg1,arg2,arg3){}
     * EventDispatcher.AddEventListener("eventType",OnEventTrigger);
     * EventDispatcher.TriggerEvent("eventType",arg1,arg2,arg3);
     *
     * 不再使用下面接收参数的形式
     * function OnEventTrigger(args:any[]){}
     */
    static TriggerEvent(eventType: any, ...args: any[]): void;
    static HasEventListener(eventType: any): boolean;
}
import { UnityEngine } from "csharp";
export declare class ActivityCenter {
    static ActivityReady(activityInfo: object): void;
    static ActivityRefresh(activityInfo: object): void;
    static BindAppearActivityEvent(activityId: string, handlerFunc: (go: UnityEngine.GameObject, order: number) => void): void;
    static BindHideActivityEvent(activityId: string, handlerFunc: () => void): void;
    static BindBeforeDestroyActivityEvent(activityId: string, handlerFunc: () => void): void;
    static BindDestroyActivityEvent(activityId: string, handlerFunc: () => void): void;
}
import { UnityEngine } from "csharp";
export declare class ActivityInfo {
    activityId: string;
    activityTitle: string;
    activityName: string;
    redDotProp: string;
    sequence: string;
    flagType: string;
    startTime: number;
    endTime: number;
    panelName: string;
    tadSequence: string;
    themesId: string;
    isPuertsApp: string;
    enableGameFramwork: boolean;
    OnAppear: ((go: UnityEngine.GameObject, order: number) => void) | null;
    OnHide: (() => void) | null;
    OnDestroy: (() => void) | null;
    OnBeforeDestroy: (() => void) | null;
    constructor();
    Assign(info: object): void;
    private CheckInfo;
    private PrintError;
    ToJson(): object;
}
import { BaseGameletAPI, GameletLogger } from './BaseGameletAPI';
export interface IEventDispatcher {
    AddEventListener: (eventType: any, listener: (...args: any[]) => void, ...args: any[]) => void;
    RemoveEventListener: (eventType: any, listener: (...args: any[]) => void) => void;
    RemoveEventAllListener: (eventType: any) => void;
    /**
     * @deprecated this method is deprecated, please use TriggerEvent instead
     */
    DispatchEvent: (eventType: any, ...args: any[]) => void;
    /**
     * 触发注册的事件，响应函数通过可变参数的展开形式来接收参数
     * @param eventType
     * @param args 不定参数
     * @returns
     * @samples
     * function OnEventTrigger(arg1,arg2,arg3){}
     * this.InnerEventDispatcher.AddEventListener("eventType",OnEventTrigger);
     * this.InnerEventDispatcher.TriggerEvent("eventType",arg1,arg2,arg3);
     *
     * 不再使用下面接收参数的形式
     * function OnEventTrigger(args:any[]){}
     */
    TriggerEvent: (eventType: any, ...args: any[]) => void;
    HasEventListener: (eventType: any) => boolean;
}
export declare abstract class BasePuertsController {
    gamelet: any;
    proxy: any;
    InnerEventDispatcher: IEventDispatcher;
    constructor(GameletAPI: BaseGameletAPI, logger?: GameletLogger);
}
/** -------------------
 * 预定义接口和结构体
 * --------------------
 */
interface IGameletEnv {
    appId: number;
    appKey: string;
    appName: string;
    appVersion: string;
}
/** -------------------
 * 定义平台API
 * --------------------
 */
declare class BaseGameletAPI {
    Gamelet: any;
    constructor();
    /**
     * 判断是否可以使用小应用平台API
     */
    canUsePlatformAPI(): boolean;
    /**
     * 获取小应用平台环境
     */
    getGameletEnv(): IGameletEnv;
    /**
     * 获取appId
     * @returns 成功时返回appId, 错误时返回-1
     */
    getAppId(): number;
    /**
     * 获取appKey
     * @returns 成功时返回appKey，错误时返回空字符串
     */
    getAppKey(): string;
    /**
     * 获取appName
     * @returns 成功时返回appName, 错误时返回空字符串
     */
    getAppName(): string;
    /**
     * 获取appVersion
     * @returns 成功时返回appVersion, 错误时返回空字符串
     */
    getAppVersion(): string;
    /**
     * 获取管理端填写的自定义配置
     * @key 管理端自定义配置的key
     */
    getAppCustomConfig(key: string): string;
    /**
     * 判断是否正式环境
     * @returns true:正式环境 / false:测试环境
     */
    getIsProductEnvironment(): boolean;
    /**
     * 获取平台描述符
     * @returns pc/android/mac/ios
     */
    getPlatformDesc(): string;
    /**
     * 获取登录态
     * @returns 登录态Object
     */
    getUserData(): any;
    /**
     * 上报异常信息到TDM，在小应用管理端  监控及告警 - 应用监控 - 标签: JSScriptException 下查询
     * @param content 异常信息字符串
     */
    reportJSExceptionStringToTdm(content: string): void;
    /**
     * 上报自定义字符串，注意控制上报数量
     * @param content 内容
     * @param tag 标签
     */
    reportStringToTdm(content: string, tag: string): void;
    /**
     * 上报累加类型
     * @param tag 标签
     */
    reportNumberToTdm(tag: string): void;
    /**
     * ATM 经分上报接口
     * @param iType 行为类型, 从可以1开始
     * @param iChangjingId 行为中文名称，比如活动曝光
     * @param iGoodsId 礼包信息，填写礼包id
     * @param iCountId 任务信息
     * @param iFee 购买信息，填写购买数量
     * @param iFlowId 推荐信息，填写推荐指标id
     * @param extendList 保留字段，扩展字段是一个数组（不要用object）， 数组每个成员为name/value形式，例如：[{"name":"reserve0","value":"0"}, {"name":"reserve1","value":"1"}, ...]，name和value的值都是字符串类型。默认支持10个扩展字段（reserve0~reserve9），需按顺序填写，多余的字段会被忽略，不会落在表里。
     *                   注意：1.value字段必须为string类型；2.如果扩展字段为空的话，默认不传参数即可，不要传空table
     */
    reportToATM(iType: number, iChangjingId: string, iGoodsId: number, iCountId: number, iFee: number, iFlowId: number, extendList: any[] | undefined): void;
    /**
     * [注意] 用户手动设置环境，仅供测试使用。因为环境会自动注入，通常无需调用此方法。
     * @param gamelet 用户设置的环境结构
     */
    setGameletEnv(gamelet: IGameletEnv, forceCover?: boolean): boolean;
}
declare class GameletLogger {
    appid: number;
    initlog(_appid: any): void;
    constructlogHeaderStr: () => string;
    log(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}
export { GameletLogger, BaseGameletAPI, IGameletEnv };
}