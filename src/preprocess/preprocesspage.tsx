import { Faas, context } from "faas-lib/faas-proxy";
import { GameletAPI } from "gamelet-pixui-frame";

// 注入自测账号信息 unsupported
if (GameletAPI.getRuntimeEnv() == "PxIDE") {
  console.log("getRuntimeEnv: PxIDE");
  const appData = {
    pdr_appid: "7628",
    pdr_app_ver: "0.0.1", // 必填，对应潘多拉的应用版本信息
    env: "OLSB", // 非必填，默认是OLSB
    userinfo: {
      gameid: "",
      sAppId: "1106576735",
      sArea: "302",
      sOpenId: "C7BCEF7AFB7CEB3F46B60B67104FB504",
      sPartition: "1",
      sPlatID: "0",
      sRoleId: "",
      sAMSAppName: "bs",
      sAccessToken: "F6F8737CA08BB0F18F439EAE333905B4",
      sAcountType: "qq",
      sUniqueRoleId: "",
      sPayToken: "",
    },
  };
  context.extraInfoFunction = function () {
    return appData;
  };
}

// 入口协议
const cmdShowEntrance = {
  type: "pandoraShowEntrance",
  appId: 7628,
  appName: "dwNewLottery",
  content: "1",
};

// 显示红点协议
const cmdShowRedpoint = {
  type: "pandoraShowRedpoint",
  appId: 7628,
  appName: "dwNewLottery",
  content: "1",
};

// 隐藏红点协议
const cmdHideRedpoint = {
  type: "pandoraShowRedpoint",
  appId: 7628,
  appName: "dwNewLottery",
  content: "0",
};

// 活动中心入口协议
const openByActCenter = {
  type: "openByActCenter",
  appId: 7628,
  appName: "dwNewLottery",
  weight: "50", //展示权重，活动中心根据这个权重排序，权重一样就按接收顺序
};

// 活动中心入口显示红点协议
const actCenterShowRedpoint = {
  type: "actCenterShowRedpoint",
  appId: 7628,
  appName: "dwNewLottery",
  content: "1",
};
// 活动中心入口隐藏红点协议
const actCenterHideRedpoint = {
  type: "actCenterHideRedpoint",
  appId: 7628,
  appName: "dwNewLottery",
  content: "0",
};

export class PreprocessPage {
  sPlatID: any;
  cmdShowRedpoint: any;
  cmdHideRedpoint: any;

  async sendData(needRedDot = false) {
    GameletAPI.setDataStash("actStatus", JSON.stringify(1));
    // 此处发消息给活动中心
    GameletAPI.dispatchEvent(
      "openByActCenter",
      JSON.stringify(openByActCenter)
    );
    console.log("send-openByActCenter", needRedDot);
    if (needRedDot) {
      // 显示红点
      GameletAPI.dispatchEvent(
        "actCenterShowRedpoint",
        JSON.stringify(actCenterShowRedpoint)
      );
    } else {
      // 隐藏红点
      GameletAPI.dispatchEvent(
        "actCenterHideRedpoint",
        JSON.stringify(actCenterHideRedpoint)
      );
    }
    console.log("pre-openByActCenter");
    console.log("pre-actCenterShowRedpoint");
  }
  // 由于活动可能先于活动中心加载，活动加载后除了向活动发消息还监听活动是否ready
  getActCenterReady() {
    GameletAPI.addEventListener("actCenterReady", async () => {
      this.sendData();
      console.log("5802 listen actCenterReady ,send openByActCenter");
    });
  }
  async init() {
    console.log("子应用5802init");
    let showRedPoint = false;
    // const res = await Faas.GetRedInfo5802_684489({
    //   sArea: 302,
    //   sPlatId: 0, // 平台
    //   partition: 1,
    // });
    // console.log("dyLotterRedInfo", JSON.stringify(res.jData));
    // showRedPoint = +res.jData.canGetGiftCount > 0;
    // this.sendData(false);
    try {
      const userData = await GameletAPI.getUserData();
      const res = await Faas.GetRedInfo7628_684489({
        sArea: userData.sArea,
        sPlatId: userData.sPlatID, // 平台
        partition: userData.sPartition || 1,
      });
      if (res.ret != 0) throw res;
      showRedPoint = +res.jData.canGetGiftCount > 0;
      GameletAPI.setDataStash('dyLotterRedInfo', JSON.stringify(res.jData));
    } catch (e) {
      console.error('preprocess get redpoint err', e);
    }
    this.sendData(showRedPoint);
    GameletAPI.addEventListener("actCenterReady", async () => {
      this.sendData(showRedPoint);
      console.log("5802 listen actCenterReady ,send openByActCenter");
    });
    window.onclose = () => {
      console.log("5802 PreprocessPage onclose");
    };
  }

  // 获取当前日期的字符串形式
  getCurrentDateStr() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  // 判断两个时间是否是同一天
  isSameDay(date1, date2) {
    const curDate1 = new Date(date1);
    const curDate2 = new Date(date2);
    return (
      curDate1.getFullYear() === curDate2.getFullYear() &&
      curDate1.getMonth() === curDate2.getMonth() &&
      curDate1.getDate() === curDate2.getDate()
    );
  }

  // 检查是否需要显示红点
  async checkNeedRedDot() {
    return true;
  }
}
