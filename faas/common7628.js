const metrics = require("./common/metrics.js");
const base = require("./common/px_base.js");
const http = require("./common/inner_base.js");
const mod = require("./common/webide_component.js");

/**
 * 通用返回
 * @param {number} ret 返回码
 * @param {string} msg 返回信息
 * @param {object} data 返回数据
 * @returns
 */
export function BK_CommonRsp(ret, msg, data = {}) {
  if (ret != 0) {
    const errorMsg = BK_GetErrorMsg(ret);
    if (errorMsg !== undefined) {
      msg = errorMsg;
    }
  }
  // 上报
  console.log("BK_CommonRsp ret:", ret);

  // Prometheus上报
  let tag = "chaoFaaSTest_CommonRsp";
  let code = ret;
  let recordRet = metrics.BK_gameletRecordCount(tag, code);
  console.log("recordRet: ", recordRet);
  // FaasUtil.report_stats("4177", "http", "get", "0", 1000);

  return { ret: ret, data: data, msg: msg };
}

/**
 * 获取错误信息
 * @param {number} ret 返回码
 * @returns
 */
export function BK_GetErrorMsg(ret) {
  const errorMsg = {
    "-1": "参数错误",
    "-2": "签名错误",
    "-3": "接口异常",
    "-9": "系统繁忙",
  };

  return errorMsg[ret];
}

/**
 * 发送星图请求
 * @param {JSON} retData 请求返回
 * @returns
 */
export function BK_RequestIDE7628(token, chartId, method = "GET", req = {}) {
  let appData = base.BK_getAppData();
  let ideData = getIDEData();
  console.log(ideData);
  let appid = appData.userinfo.sAppId;
  let acctype = "qq";
  if (appid && appid.slice(0, 2) == "wx") {
    acctype = "wx";
  }
  let query =
    "&iUin=" +
    appData.userinfo.sOpenId +
    "&sArea=" +
    appData.userinfo.sArea +
    "&sPlatId=" +
    appData.userinfo.sPlatID +
    "&sRole=" +
    appData.userinfo.sRoleId +
    "&acctype=" +
    acctype +
    "&appid=" +
    appData.userinfo.sAppId +
    "&openid=" +
    appData.userinfo.sOpenId +
    "&access_token=" +
    appData.userinfo.sAccessToken +
    "&ts=" +
    new Date().getTime().toString() +
    "&pixuiEnv=" +
    appData.openPlatform.env +
    "&ideL5=" +
    ideData.ideL5;
  console.log("BK_RequestIDE query:" + query);

  try {
    let rsp = {};
    if (method == "POST") {
      rsp = http.BK_Http_Request({
        type: "POST",
        target: {
          proto: "http",
          sid: ideData.ideL5,
          path: "/ide/?sIdeToken=" + token + "&iChartId=" + chartId + query,
        },
        body: req,
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      });
    } else {
      let params = "";
      Object.keys(req).map((k) => {
        params += `&${k}=${req[k]}`;
      });
      rsp = http.BK_Http_Request({
        type: "GET",
        target: {
          proto: "http",
          sid: ideData.ideL5, //星图IDE_L5
          path:
            "/ide/?sIdeToken=" +
            token +
            "&iChartId=" +
            chartId +
            query +
            params,
        },
        timeout: 10000,
      });
    }
    // console.log("BK_RequestIDE rsp: " + JSON.stringify(rsp));

    return rsp;
  } catch (e) {
    console.log("BK_RequestIDE error: ", e.toString());
    return false;
  }
}

// const LOG_L5 = "192002625:478113" //日志上报l5，固定

let getIDEData = function () {
  //应用运行时的一些信息
  let ideData = {
    ideL5: "",
  };

  let appData = base.BK_getAppData();
  console.log("appData", appData);
  if (appData.openPlatform.env == "OLSB") {
    if (
      appData.userinfo.sArea == "301" ||
      appData.userinfo.sArea == "302" ||
      appData.userinfo.sArea == "310"
    ) {
      ideData.ideL5 = "64255937:14745600"; // 星图走测试环境（访问IDIP测试）
    } else {
      ideData.ideL5 = "64255937:16121856"; //如果小应用沙箱环境，则星图走测试环境（访问IDIP正式）
    }
  } else {
    //这里替换了l5
    ideData.ideL5 = "64069121:91226112"; //正式:64069121:91226112 预发布：64255937:16121856 测试：64255937:14745600
  }

  return ideData;
};

/**
 * 发送星图请求
 * @param {JSON} retData 请求返回
 * @returns
 */
export function BK_RequestWebIde7628(token, chartId, method = "GET", req = {}) {
  try {
    console.log("BK_RequestWebIde req: ", req);
    let ideData = getIDEData();
    let appData = base.BK_getAppData();
    const {
      userinfo: { sAppId, sAcountType, sOpenId, sAccessToken },
    } = appData;
    let acctype = "qq";
    if ((sAppId && sAppId.slice(0, 2) == "wx") || sAcountType == "wx") {
      acctype = "wx";
    }
    const cookie = {
      acctype: sAcountType || acctype,
    };
    let query = "";
    let param = {
      acctype: sAcountType || acctype,
      appid: sAppId,
      openid: sOpenId,
      access_token: sAccessToken,
    };
    param = Object.assign(param, req);
    Object.keys(param).map((k) => {
      query += `&${k}=${param[k]}`;
    });
    return mod.BK_CallWebIde({
      url: `/ide/?sIdeToken=${token}&iChartId=${chartId}${query}`,
      param,
      serviceAddr: { sid: ideData.ideL5 },
      cookie,
      timeout: 10000,
    });
  } catch (e) {
    console.log("BK_CallWebIde error: ", e.toString());
    return false;
  }
}
