export declare let platformAPI:{
    // 获取环境信息
	/**
	 * 是否可以调用小应用平台SDK API, 同步接口
	 * Example：let canUsePlatformAPI = platformAPI.canUsePlatformAPI()
	 */
    canUsePlatformAPI():boolean;

    /**
	 * 获取当前应用的 appId
	 * Example：let appId = platformAPI.getAppId()
	 */
    getAppId():number;

	/**
	 * 获取当前应用的 appName
	 * Example：let appName = platformAPI.getAppName()
	 */
	getAppName():string | undefined;

    /**
	 * 获取当前应用的 appKey
	 * Example：let appId = platformAPI.getAppKey()
	 */
    getAppKey():string;

    /**
	 * 获取用户登录态，返回值是一个登录态Object，其中包括以下字段，均为string类型：     
     * Example : let userdata = await platformAPI.getUserData();
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
	 * sGameName     游戏名称，跟sServiceType一致
	 * sMSDKGameID   只有接入GCloud的业务使用此字段，游戏在MSDK平台注册的应用ID
	 * sSdkVersion   潘多拉SDK版本号，如SPEEDM-IOS-1，在SDK升级时会改变，也用于云端规则匹配
	 */
    async getUserData():object;

    /**
	 * 获取平台标识符，返回值类型：string  包括 pc android mac ios
	 */
    async getPlatformDesc():string;

    /**
	 * 获取App版本号
	 */
    async getAppVersion():string;

    /**
	 * 获取是否正式环境
	 */
	async getIsProductEnvironment(): boolean;

	/**
	 * 写文件
	 * 注意：文件超过一定时间后(目前是7天)将被自动删除
	 * @param fileName 文件名，相对路径，绝对路径是pandora的cookies目录+fileName
	 * @param content  文件内容
	 * @return 写文件成功返回true；否则返回false
	 */
	async writeCookie(fileName : string, content : string): boolean;

   	/**
	 * 读文件
	 * @param fileName 文件名，相对路径，绝对路径是pandora的cookies目录+fileName
	 * @return 读取成功返回文件内容，读取失败返回空字符串
	 */
	async readCookie(fileName : string): string; 

    /**
	 * 设置缓存信息
	 * @dataKey : string  保存数据的key
	 * @dataValue ： string  要保存的数据
	 */
	async setDataStash(dataKey : string, dataValue : string): void;

    /**
	 * 获取缓存的信息
	 * @dataKey : string  保存数据的key
	 * @return : string 保存的数据
	 */
	async getDataStash(dataKey : string): string;

    /**
	 * 清除缓存的信息
	 */
	async clearDataStash(): void;

    /**
	 * 给游戏发json消息
	 * @jsonStr ： string 消息字符串
	 */
	async callGame(jsonStr : any): void;

    // 数据上报
    /**
	 * JS 异常上报 | 上报字符串类型（用于分析异常）
	 * @content :   string  上报内容
	 */
	reportJSExceptionStringToTdm(content : string): void;

    /**
	 * 自定义TAG上报 | TDM上报字符串类型（用于自定义统计）
	 * @content :   string  上报内容
	 * @tag :       string  特性点tag
	 */
	reportStringToTdm(content : string, tag : string): void;

    /**
	 * 自定义TAG上报 | TDM上报累加类型（用于统计次数）
	 * @tag :     string  特性点tag
	 */
	reportNumberToTdm(tag : string): void;

    /**
	 * 经分上报
	 * @param iModule 
	 * @param iChannelId 
	 * @param iType 
	 * @param iActId 
	 * @param iJumpType 
	 * @param sJumpUrl 
	 * @param sRecommendId 
	 * @param iChangjingId 
	 * @param iGoodsId 
	 * @param iCountId 
	 * @param iFee 
	 * @param iCurrencyType 
	 * @param iActStyle 
	 * @param iFlowId 
	 * @param extendList [{"name":"reserve0","value":"0"}, {"name":"reserve1","value":"1"}, ...]，name和value的值都是字符串类型。默认支持10个扩展字段（reserve0~reserve9），需按顺序填写，多余的字段会被忽略，不会落在表里。 注意：1.value字段必须为string类型；2.如果扩展字段为空的话，默认不传参数即可
	 */
    reportStats(iModule : any, iChannelId : any, iType : any, iActId : any, iJumpType : any, sJumpUrl : any, sRecommendId : any, iChangjingId : any, iGoodsId : any, iCountId : any, iFee : any, iCurrencyType : any, iActStyle : any, iFlowId : any, extendList: any[] | undefined): void;

 
     /**
      * 简化参数的 ATM 经分上报接口
      * @param iType 行为类型, 从可以1开始
      * @param iChangjingId 行为中文名称，比如活动曝光
      * @param iGoodsId 礼包信息，填写礼包id
      * @param iCountId 任务信息
      * @param iFee 购买信息，填写购买数量
      * @param iFlowId 推荐信息，填写推荐指标id
      * @param extendList 保留字段，扩展字段是一个数组（不要用object）， 数组每个成员为name/value形式，例如：[{"name":"reserve0","value":"0"}, {"name":"reserve1","value":"1"}, ...]，name和value的值都是字符串类型。默认支持10个扩展字段（reserve0~reserve9），需按顺序填写，多余的字段会被忽略，不会落在表里。
      *                   注意：1.value字段必须为string类型；2.如果扩展字段为空的话，默认不传参数即可，不要传空table
      */
	reportToATM(iType:number, iChangjingId:string, iGoodsId:number, iCountId:number, iFee:number, iFlowId:number, extendList:any[]|undefined);
	
    // 事件监听（注意关闭窗口时注销监听事件）
    /**
	 * 注册收消息（用来收从别的虚拟机发过来的消息）
	 */
	addEventListener(eventType : string, listener : any): void;

	/**
	 * 反注册
	 * @param eventType 
	 * @param listener 
	 * 
	 */
	removeEventListener(eventType : string, listener : any): void;
		
	/**
	 * 发消息
	 * @param eventType 
	 * @param msg 
	 */
	dispatchEvent(eventType : string, msg : string): void;
}