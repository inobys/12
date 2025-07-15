const common = require("./dwNewLottery/common7628.js");


/**
 * 道聚城下单购买（不使用）
 * @path /ide/?sIdeToken=kXvjb2&iChartId=249106
 * @returns
 */
export function DjcBuy7628(req) {
  let retData = common.BK_RequestWebIde("kXvjb2", "249106", "POST", req);
  console.log("DjcBuy: " + JSON.stringify(retData));
  return retData;
}


/**
 * 解锁高级
 * @path /ide/?sIdeToken=H8FKd5&iChartId=420600
 * @returns
 */
export function DjcBuySenior7628_684489(req) {
  let retData = common.BK_RequestWebIde7628("H8FKd5", "420600", "POST", req);
  console.log("DjcBuySenior: " + JSON.stringify(retData));
  return retData;
}

/**
 * 购买电玩券
 * @path /ide/?sIdeToken=sWQ4ys&iChartId=420598
 * @returns
 * raffleNum：1或2或10
 */
export function DjcBuyTicket7628_684489(req) {
  let retData = common.BK_RequestWebIde7628("sWQ4ys", "420598", "POST", req);
  console.log("DjcBuyTicket: " + JSON.stringify(retData));
  return retData;
}

/**
 * 购买抽奖券
 * @path /ide/?sIdeToken=zzWrFK&iChartId=422503
 * @returns
 * 1214136   300点券获得10美味暴击抽奖积分  300点券
 * 1214135   100限定点券或普通点券获得2美味暴击抽奖积分 100点券
 */
export function DjcBuyTicketTicket7628_684489(req) {
  let retData = common.BK_RequestWebIde7628("zzWrFK", "422503", "POST", req);
  console.log("DjcBuyTicket: " + JSON.stringify(retData));
  return retData;
}

/**
 * 初始化
 * @path /ide/?sIdeToken=i8fjtY&iChartId=420593
 * @returns
 */
export function GetActInfo7628_684489(req) {
  let retData = common.BK_RequestWebIde7628("i8fjtY", "420593", "POST", req);
  console.log("GetActInfo: " + JSON.stringify(retData));
  return retData;
}

/**
 * 抽奖记录
 * @path /ide/?sIdeToken=Jiv4sT&iChartId=420594
 * @returns
 */
export function GetRecord7628_684489(req) {
  let retData = common.BK_RequestWebIde7628("Jiv4sT", "420594", "POST", req);
  console.log("GetRecord: " + JSON.stringify(retData));
  return retData;
}

/**
 * 奖池列表
 * @path  /ide/?sIdeToken=5AdZyd&iChartId=420596
 * @returns
 */
export function GetJackpot7628_684489(req) {
  let retData = common.BK_RequestWebIde7628("5AdZyd", "420596", "POST", req);
  console.log("GetJackpot: " + JSON.stringify(retData));
  return retData;
}

/**
 * 抽奖
 * @path /ide/?sIdeToken=T1wtzm&iChartId=420595
 * @param raffleNum：1或2或10
 * @returns
 */
export function Lottery7628_684489(req) {
  let retData = common.BK_RequestWebIde7628("T1wtzm", "420595", "POST", req);
  console.log("Lottery: " + JSON.stringify(retData));
  return retData;
}

/**
 * 领取任务奖励
 * @path /ide/?sIdeToken=MYClmQ&iChartId=420599 
 * @returns
 */
export function TaskReceive7628_684489(req) {
  let retData = common.BK_RequestWebIde7628("MYClmQ", "420599", "POST", req);
  console.log("TaskReceive: " + JSON.stringify(retData));
  return retData;
}

/**
 * 获取任务列表
 * @path /ide/?sIdeToken=zPTD8S&iChartId=420602
 * @returns
 */
export function GetTaskInfo7628_684489(req) {
  let retData = common.BK_RequestWebIde7628("zPTD8S", "420602", "POST", req);
  console.log("GetTaskInfo: " + JSON.stringify(retData));
  return retData;
}

/**
 * 获取红点
 * @path /ide/?sIdeToken=NNdYvy&iChartId=420601
 * @returns
 */
export function GetRedInfo7628_684489(req) {
  let retData = common.BK_RequestWebIde7628("NNdYvy", "420601", "POST", req);
  console.log("GetRedInfo: " + JSON.stringify(retData));
  return retData;
}

/**
 * 获取积分
 * @path  /ide/?sIdeToken=dfnuK1&iChartId=420597
 * @returns
 */
export function GetJifen7628_684489(req) {
  let retData = common.BK_RequestWebIde7628("dfnuK1", "420597", "POST", req);
  console.log("GetJifen: " + JSON.stringify(retData));
  return retData;
}

// /**
//  * 兑换飞行器
//  * @path /ide/?sIdeToken=7u2Q6p&iChartId=413599
//  * @returns
//  */
export function ExchangeCraft7628_684489(req) {
  let retData = common.BK_RequestWebIde7628("7u2Q6p", "413599", "POST", req);
  console.log("ExchangeCraft: " + JSON.stringify(retData));
  return retData;
}

/**
 * 兑换限定皮肤
 * @path /ide/?sIdeToken=tSp7lY&iChartId=420604
 * @returns
 */
export function ExchangeSkin7628_684489(req) {
  let retData = common.BK_RequestWebIde7628("tSp7lY", "420604", "POST", req);
  console.log("ExchangeSkin: " + JSON.stringify(retData));
  return retData;
}