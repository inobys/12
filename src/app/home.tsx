import "./home.css";
import { observer } from "mobx-preact";
import { h, Component, CSSProperties } from "preact";
import { Faas, context } from "faas-lib/faas-proxy";
import { GameletAPI } from "gamelet-pixui-frame";
import { useState, useRef, useEffect } from "preact/hooks";
const util = require("./util.js");
// 活动中心入口隐藏红点协议
const actCenterHideRedpoint = {
  type: "actCenterHideRedpoint",
  appId: 7628,
  appName: "dwNewLottery",
  content: "0",
};
// 注入自测账号信息 unsupported
console.log(GameletAPI.getRuntimeEnv());
if (
  GameletAPI.getRuntimeEnv() == "PxIDE" ||
  GameletAPI.getRuntimeEnv() == "unsupported"
) {
  console.log("getRuntimeEnv: PxIDE");
  const appData = {
    pdr_appid: "7628",
    pdr_app_ver: "latest", // 必填，对应潘多拉的应用版本信息
    env: "OLSB", // 非必填，默认是OLSB
    userinfo: {
      gameid: "",
      sAppId: "1106576735",
      sArea: "310",
      sOpenId: "5B5B34C8FF2498EDA72B4FF946835588",
      sPartition: "1",
      sPlatID: "0",
      sRoleId: "",
      sAMSAppName: "bs",
      sAccessToken: "64132FD109CA08C6F43CE82A87FD4140",
      sAcountType: "qq",
      sUniqueRoleId: "",
      sPayToken: "",
    },
  };
  context.extraInfoFunction = function () {
    return appData;
  };
  GameletAPI.setUserData(appData.userinfo); // 设置用户信息
}

const setGameLetAppEnv = async () => await GameletAPI.setGameletAppEnv({
  appID: 7628,
  appName: "dwNewLottery",
  appVersion: "0.0.6", //需手动填写为正式版本  update by fqf 202506 旧：0.0.5
  appKey: "P898BbZQtTU3xwgRawaDO3VqioszTP9Q",
});
setGameLetAppEnv();

// 道聚城购买道具参数
const djcParams = {
  _app_id: 2005,
  _biz_code: "bs",
  _plug_id: 7200,
  iActionId: "41969",  // update by fqf 202506
  ActionId: "41969",  // update by fqf 202506
  propid: "565495", // 礼包id   待定  TODO
  paytype: "2", // 1：点券 2：人民币 3：金币 4：点券+金币 5：金币2
  buyNum: 1, // 购买数量（不填则为1）
  gameId: "bs", // 业务简称
  jifen_dikou: 0, // 是否使用积分抵扣1是 0否
  jifen_amount: 0, // 用户传入的积分抵扣数量
  djcActId: "41969", // 道聚城活动id   update by fqf 202506
  apptype: "3",
  appext: encodeURIComponent(`1`),
};

// 提示弹窗
const ToastTips = ({
  visible,
  message,
  duration,
  changeVisible,
  closeToastTips,
}) => {
  if (!visible) {
    return null;
  }
  // setTimeout(() => {
  //   changeVisible();
  // }, duration);
  return (
    <div className="tt111-toast-wrapper">
      <div className="toast-tips-box">
        <div className="toast-tips-title">提示</div>
        <div class="toast-tips-close" onClick={closeToastTips}></div>
        <div className="toast-tips-main">
          {visible && <text className="toast-tips-txt">{message}</text>}
        </div>
      </div>
    </div>
  );
};

// loading弹窗
const LoadingTips = ({ visible, message }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="tt111-toast-wrapper">
      {visible && <div className="tt111-toast-box">{message}</div>}
    </div>
  );
};

@observer
export class Home extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      toastPopVisible: false, // 控制toast的弹窗显隐
      toastMsg: "", // toast的文本内容
      loadingPopVisible: false, // 控制loading的弹窗显隐
      loadingMsg: "", // loading的文本内容
    };
  }
  async componentWillMount() {
    console.log("HomePage componentWillMount");
    console.log(`appEnv
                     appId:${GameletAPI.getAppID()} appKey:${GameletAPI.getAppKey()}
                     appName:${GameletAPI.getAppName()} appVersion:${GameletAPI.getAppVersion()}`);
    console.log(`runtime
                     runtimeEnv:${GameletAPI.getRuntimeEnv()} canUsePlatformAPI:${GameletAPI.canUsePlatformAPI()} 
                     getIsProductEnvironment:${GameletAPI.getIsProductEnvironment()} getPlatformDesc:${GameletAPI.getPlatformDesc()}`);
    console.log(`userdata
                     userdata:${JSON.stringify(
                       await GameletAPI.getUserData()
                     )}`);
    console.log(`openArgs
                     openArgs:${GameletAPI.getOpenArgs()}`);
    console.log(`userdata:${JSON.stringify(await GameletAPI.getUserData())}`);

    if (!window.addEventListener) return;
    let html = document.documentElement;
    function setFont() {
      let k = 1920;
      html.style.fontSize = (html.clientWidth / k) * 100 + "px";
    }
    setFont();

    document.addEventListener("DOMContentLoaded", setFont, false);
    window.addEventListener("resize", setFont, false);
    window.addEventListener("load", setFont, false);

    // 隐藏红点
    GameletAPI.dispatchEvent(
      "actCenterHideRedpoint",
      JSON.stringify(actCenterHideRedpoint)
    );
    this.observer();
  }
  observer() {
    console.log("7628开始监听协议");
    GameletAPI.addOnGameCommandListener((jsonStr) => {
      console.log(`7628接收协议jsonStr=====>${jsonStr}`);
      const data = JSON.parse(jsonStr || "");
      console.log("7628接收协议type=====>", data.type);
      switch (data.type) {
        case "midasPayCallback":
          if (data.result == "success") {
            this.showToastTips("支付成功");
          } else {
            this.showToastTips(data.resultMessage || "支付失败");
          }
          break;
        case "onSetVisibility":
          // 页面是否显示
          console.log("7628页面是否显示", data.content);
          // 通知全局页面显示/隐藏
          GameletAPI.dispatchLocalEvent("pandoraShowView", data.content);
          break;
        default:
          break;
      }
    });
  }
  djcBuy = async () => {
    try {
      console.log("djcBuy");
      this.showLoading();
      const userData = await GameletAPI.getUserData();
      const param = Object.assign({}, djcParams, {
        plat: userData.sPlatID,
        areaid: userData.sArea,
        roleid: userData.sRoleId,
        partition: userData.sPartition || 1,
        buyNum: 1, // 购买数量（不填则为1）
        propid: "565495", // 礼包id   todo  先放着 这个活动没有人民币购买
        paytype: "2", // 1：点券 2：人民币 3：金币 4：点券+金币 5：金币2
      });
      console.log("djcBuy-param", param);
      const res: any = await Faas.DjcBuy7628(param);
      console.log("djcBuy-res", res, res.jData);
      const { jData: data, iRet } = res;
      if (iRet != 0) throw res;
      console.log("djcBuy-data", data);
      const djcData = data.djc.data;
      this.hideLoading();
      const cmdPandoraPay = {
        type: "pandoraMidasPay",
        appId: 7628,
        appName: "dwNewLottery",
        content: "rmb",
        platId: userData.sPlatID,
        offerId: djcData.offerId,
        goodsTokenUrl: djcData.urlParams,
      };
      const str = JSON.stringify(cmdPandoraPay);
      console.log("callGame-str", str);
      GameletAPI.callGame(str);
    } catch (error) {
      this.hideLoading();
      console.log("djcBuy-error", JSON.stringify(error));
      this.showToastTips(
        (error as { sMsg: string }).sMsg || "系统繁忙，请稍后重试~"
      );
    }
  };
  changeToastTips = () => {
    this.setState({
      toastPopVisible: false,
    });
  };
  showToastTips = (msg = "") => {
    this.setState({
      toastPopVisible: true,
      toastMsg: msg,
    });
  };
  closeToastTips = () => {
    this.setState({
      toastPopVisible: false,
    });
  };
  showLoading = (msg = "加载中...") => {
    this.setState({
      loadingPopVisible: true,
      loadingMsg: msg,
    });
  };
  hideLoading = () => {
    this.setState({
      loadingPopVisible: false,
    });
  };
  render() {
    return (
      <div className="timeTravel111-page-container">
        <div className="timeTravel111-page-box">
          <div className="tt111-time-remaining-wrapper">
            <div className="tt111-time-remaining-icon"></div>
          </div>
          <div className="buy-box">
            <div
              className="buy-btn"
              onClick={() => {
                this.djcBuy();
              }}
            >
              购买
            </div>
          </div>

          <ToastTips
            visible={this.state.toastPopVisible}
            message={this.state.toastMsg}
            duration={3000}
            changeVisible={this.changeToastTips}
            closeToastTips={this.closeToastTips}
          />
          <LoadingTips
            visible={this.state.loadingPopVisible}
            message={this.state.loadingMsg}
          />
        </div>
      </div>
    );
  }
}
