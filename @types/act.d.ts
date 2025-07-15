declare type StringNumber = string;

declare interface UserProfile {
  sOpenId: string; // 用户标识
  sArea: string; // 大区号，正式环境下微信为1，手Q为2，测试环境下各业务可能各不相同
  sPlatID: string; // 平台ID：0(ios) 1(android)
  sPartition: string; // 小区号（区服）
  sRoleId: string; // 角色ID
  sUniqueRoleId: string; // NewRoleID
  sAcountType: string; // 帐号类型：qq(手Q) wx(微信) ttpp(游客)
  sAppId: string; // 应用ID
  sAccessToken: string; // 登录token
  sPayToken: string; // 支付token,手Q有单独的支付token，微信支付token和登录token相同
  sAMSAppName: string; // AMS业务名称（英文缩写）
  sServiceType?: string; // 游戏简称，如完美世界（wmsj，这个是跟接入AMS系统时的代号一致）

  sGameName?: string; // 游戏名称，跟sServiceType一致
  sGameVer?: string; // 游戏版本号
  sGameResVer?: string;
  sMSDKGameID?: string; // 只有接入GCloud的业务使用此字段，游戏在MSDK平台注册的应用ID
  sSdkVersion?: string; // 潘多拉SDK版本号，如SPEEDM-IOS-1，在SDK升级时会改变，也用于云端规则匹配
  sLanguage?: string;

  sBrokerHost?: string;
  sBrokerIp?: string;
  sBrokerPort?: StringNumber;

  [key: string]: string | number | boolean | undefined;
}


/** 后端 BK_GetAppData 接口返回的应用程序数据 */
declare interface BKAppData {
  /** 平台通用信息 */
  openPlatform: {
    appid: `${number}`;
    service: 'yxzj';
    env: string;
    startTime: number;
    endTime: number;
    traceid: string;
    callerFn: string;
  };
  /** 运营配置 */
  config: OperationConfig;
  /** 用户信息 */
  userinfo: UserProfile;
  /** 服务器时间 */
  serverTime: number;
}

/** 自定义的应用程序数据，经过加工处理后的数据结构 */
declare interface AppData {
  /** 活动开始结束时间相关的开放平台运营配置 */
  openPlatform: BKAppData['openPlatform'];
  /** 自定义运营配置 */
  config: OperationConfig;
  /** 服务器时间 */
  serverTime: number;
  /** 其它配置信息 */
  [key: string]: any;
}

/** WEBIDE 请求通用结构 */
declare interface WebIdeRequest {
  /** 请求地址：(必选)星图IDE生成的完整url(包含sIdeToken/iChartId等参数),如 /ide/?sIdeToken=xx&iChartId=146078 */
  url: string;
  /** L5 地址 */
  serviceAddr?: { sid: string };
  /** 请求参数：(可选)用户自定义参数,平台将自动注入iUin/sRoleId/sArea/sPlatId/sPartition/client_ip/sServiceType等标准参数,可不填;以上参数也可传入同名参数覆盖。 */
  param?: { [key: string]: any };
  /** 请求Cookie：(可选)平台将自动注入openid/appid/acctype/access_token等鉴权参数,可不填;以上参数也可传入同名参数覆盖 */
  cookie?: { [key: string]: string };
}

/** WEBIDE 请求通用响应结构 */
declare interface WebIdeResponse {
  ret: number;
  iRet: number;
  sMsg: string;
  jData: {
    [key: string]: any;
  };
  sAmsSerial: string;
}

/** 自定义通用 Faas 请求响应结构 */
declare interface ActResult {
  /** 返回码，0 表示成功，其它表示失败 */
  iRet: number | `${number}`;
  /** 返回信息 */
  sMsg: string;
  /** 返回提示，用于用户提示 */
  sTip?: string;
  /** 一般用来表示返回数据 */
  jData?: object;
  /** 其它返回信息 */
  [key: string]: any;
}

/* |-------------------------------------|*/
// |            自定义请求结构            |
/* |-------------------------------------|*/

/** 自定义运营配置 */
declare interface OperationConfig {
  /** 活动标题 */
  title: string;
  /** 活动副标题 */
  subTitle: string;
  /** 活动界面展示用的时间 */
  time: string;
  /** 活动优先级 */
  sequence: `${number}`;
  /** 活动标签类型：推荐、新 等 */
  flagType: '' | `${number}`;

  // 其它业务自定义配置信息

  /** 其它信息 */
  [key: string]: string | number | any;
}

/** 初始化请求返回的内容 */
declare interface ActInitResult extends ActResult {
  jData?: AppData;
}

/** 对话框弹窗数据 */
declare interface DialogData {
  show?: boolean;
  /** 显示规则弹窗 */
  showRule?: boolean;
  /** 显示 tips 弹窗 */
  showTips?: { msg: string; title?: string; pkgIndex?: number };
  /** 显示 Toast 提示 */
  showToast?: string;
  /** 其它自定义扩展字段 */
  [key: string]: string | number | boolean | any;
}



declare namespace PixUICommandFromeJS {
  declare type EventType = 'PIXUI_COMMAND_FROM_JS';
  
  interface Base {
    /** 其他消息，只要 AppId 属于 pxFrame，转发给对应的 px 活动。 展示，隐藏 活动的消息也包含在这里处理，发给活动由活动自行响应 */
    type: string;
    /** 小应用平台的 appid，没有 appid 时，校验传来的 module 和 tab 是否和管理端配置的一样 */
    appId?: number;
    /** 需要打开的入口，只传模块名，不带 .html 后缀，如 index/preprocess/popup */
    entrance: string;
    /** 同 entrance */
    mainpage?: string;
    /** 未传 appid 且没有 module、tab 时传 */
    appName?: string;
    module?: string;
    tab?: string;
    [key: string]: string | number | undefined;
  }
  interface Open extends Base {
    type: 'open';
    /** 父节点路径 */
    parent: string;
    /** 同 parent */
    parentPath?: string;
    /** 指定打开后的页面链接 */
    url?: string;
    /** 拼接到页面链接 url 后面的自定义查询参数 */
    args?: string;
    actManagerTag?: string;
  }
  /** 关闭单个活动虚拟机 */
  interface Close extends Base {
    type: 'close';
  }
  /** 通知PxFrame某个活动面板已经被关闭了 */
  interface AlreadyClose extends Base {
    type: 'alreadyClose';
  }
  interface Show extends Base {
    type: 'show';
  }
  interface Hide extends Base {
    type: 'hide';
  }
}
