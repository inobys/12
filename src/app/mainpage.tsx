import "./mainpage.css";
import { observer } from "mobx-preact";
import { h, Component } from "preact";
import { Faas, context } from "faas-lib/faas-proxy";
import { GameletAPI } from "gamelet-pixui-frame";
import TaskBox from "src/app/components/taskBox";
import JackpotPop from "./components/jackpotPop";
import { reportStats, reportParams, timeTest } from "src/app/util";
import RotateBox from "./components/rotateBox";
import RotateBox22 from "./components/RotateBox22";
import RewardPop from "./components/rewardPop";
import { Button } from "./components/button";
import RecordPop from "./components/recordPop";
import { DjcBuyTicketTicket7628_684489 } from "../../faas/api7628";
// 活动中心入口显示红点协议
const actCenterShowRedpoint = {
    type: 'actCenterShowRedpoint',
    appId: 7628,
    appName: 'dwNewLottery',
    content: '1',
};
const actCenterHideRedpoint = {
    type: "actCenterHideRedpoint",
    appId: 7628,
    appName: "dwNewLottery",
    content: "0",
};
// 点券刷新协议
const pandoraTicketPayCallback = {
    type: 'pandoraTicketPayCallback',
    appId: 7628,
    appName: 'dwNewLottery',
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
            sArea: "302",
            sOpenId: "B3686390D28FC20CA10B5680DBA4F280",
            sPartition: "1",
            sPlatID: "0",
            sRoleId: "",
            sAMSAppName: "bs",
            sAccessToken: "6D830A9DD7B99D6936CC8FBF21FC4B75",
            sAcountType: "qq",
            sUniqueRoleId: "",
            sPayToken: "",
        },
    };
    context.extraInfoFunction = function () {
        return appData;
    };
}

// 道聚城购买道具参数
const djcParams = {
    _app_id: 2005,
    _biz_code: "bs",
    _plug_id: 7200,
    iActionId: "42123",   // update by fqf 202506
    ActionId: "42123",   // update by fqf 202506
    propid: "1214134", // 礼包id     待定  TODO   先放着，下面逻辑好像额外写了
    paytype: "1", // 1：点券 2：人民币 3：金币 4：点券+金币 5：金币2
    buyNum: 1, // 购买数量（不填则为1）
    gameId: "bs", // 业务简称
    jifen_dikou: 0, // 是否使用积分抵扣1是 0否
    jifen_amount: 0, // 用户传入的积分抵扣数量
    djcActId: "42123", // 道聚城活动id  update by fqf 202506
    apptype: "3",
    appext: encodeURIComponent(`1`),
};

//活动缓存信息
let userData: any = null;
let appVersion: any = '';
// 加载时间测试
let startTime = (new Date()).getTime();
//加载定时器
let actInitTimerId: any = null;

@observer
export class MainPage extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            inited: false,
            actInfo: {
                ticket: 0,
                isGetFourSkin: false,
                visible1: false,
                visible2: false,
                visible3: false,
                visible4: false,
                visible5: false,
                drawNum: 0
            },
            redInfo: {
                canGetGiftCount: 0
            },
            taskInfo: {},
            lotteryType: 2,
            lotteryResult: [],
            rotateVisible: false,
            taskVisible: false,
            exchangeVisible: false,
            exchangeType: 1,
            toastVisible: false, // 控制toast的弹窗显隐
            toastMsg: "", // toast的文本内容
            toastShowBtn: false, // toast弹窗是否显示确认按钮
            loadingVisible: false, // 控制loading的弹窗显隐
            loadingMsg: "", // loading的文本内容
            videoUrl: "",
            bagType: 1,
            confirmTicketVisible: false,
            confirmBuyVisible: false,
            confirmBuyPurVisible: false,
            confirmSeniorVisible: false,
            confirmUnlockVisible: false,
            confirmExchangeVisible: false,
            showRulesPop: false,
            jackpotVisible: false,
            recordVisible: false,
            balance: 0,
            // windowHeight: 0, //视频加载高
            // windowWidth: 0, //视频加载宽
            btnSingleClass: 'btn-single',
            btnMultiClass: 'btn-multi',
            showGotAllTips: true,
            rotateInit: false,
            rotatePlay: false,
            preventRequest: false,
            ticketTips: false,
            foreInit: false,
            forePlay: false,
            purchaseVisible: false,
        };
    }

    // private bgVideo: HTMLVideoElement | null = null;
    componentWillMount() {
        console.log("Main Page componentWillMount");
        startTime = (new Date()).getTime();

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
        // timeTest('start initVideoBg',startTime);
        // this.initVideoBg();
        timeTest('start init', startTime);
        this.init();
    }

    componentWillUnmount() {
        clearInterval(actInitTimerId);
    }

    componentDidMount() {
        this.setState({
            foreInit: true
        });
    }

    async init() {
        await this.setAppInfo();
        this.getActInfo();
        this.getRedInfo();
        userData = await GameletAPI.getUserData();
    }

    async setAppInfo() {
        try {
            if (GameletAPI.getRuntimeEnv() != 'PxIDE' && GameletAPI.getRuntimeEnv() != 'unsupported' && !appVersion) {
                timeTest('getAppInfo start', startTime);
                let info = await GameletAPI.getAppInfo(7628, "P898BbZQtTU3xwgRawaDO3VqioszTP9Q");
                console.log('-----info-----', JSON.stringify(info))
                appVersion = info.appVersion;
                timeTest('getAppInfo success', startTime);
                GameletAPI.setGameletAppEnv({
                    appID: 7628,
                    appName: 'dwNewLottery',
                    appVersion,
                    appKey: 'P898BbZQtTU3xwgRawaDO3VqioszTP9Q'
                });
                timeTest('setAppInfo success', startTime);
            }
        } catch (e) {
            console.log('setAppInfo err: ', e);
        }
    }

    checkActInit = () => {
        return new Promise((resolve, reject) => {
            if (this.state.inited) return resolve(1);
            actInitTimerId && clearInterval(actInitTimerId);
            actInitTimerId = setInterval(() => {
                const { inited } = this.state;
                if (inited) {
                    clearInterval(actInitTimerId);
                    resolve(1);
                }
            }, 200);
        });
    };

    //更新活动信息
    async updateActInfo(actInfo, callback = () => {
    }) {
        this.setState({
            actInfo,
            inited: true
        }, () => {
            setTimeout(callback, 300);
        });
        GameletAPI.setDataStash('dwBackLotteryInfo', JSON.stringify(actInfo));
    }

    //更新红点信息
    async updateRedInfo(redInfo, taskInfo: any = null) {
        if (taskInfo) {
            redInfo.canGetGiftCount = taskInfo.canGetGiftCount;
            this.setState({
                taskInfo,
                redInfo
            });
        } else {
            this.setState({
                redInfo
            });
        }
        //展示红点-有未领取的奖励
        if (+redInfo.canGetGiftCount > 0) {
            GameletAPI.dispatchEvent('actCenterShowRedpoint', JSON.stringify(actCenterShowRedpoint));
        } else {
            GameletAPI.dispatchEvent('actCenterHideRedpoint', JSON.stringify(actCenterHideRedpoint));
        }
        GameletAPI.setDataStash('dyLotterRedInfo', JSON.stringify(redInfo));
    }

    //红点信息
    getRedInfo = async (force = false) => {
        try {
            let redInfo: any = null;
            if (!force) {
                try {
                    const redInfoJson = await GameletAPI.getDataStash('dyLotterRedInfo');
                    console.warn('getDataStash RedInfo--------->', redInfoJson);
                    redInfo = JSON.parse(redInfoJson);
                    timeTest('getRedInfo stash success', startTime);
                    console.warn(`getDataStash RedInfo Success--------->`, redInfo);
                } catch (e) {
                    console.error('红点——getDataStash RedInfo err: ', e);
                }
            }
            if (!redInfo) {
                if (!userData) userData = await GameletAPI.getUserData();
                const res = await Faas.GetRedInfo7628_684489({
                    sArea: userData.sArea,
                    sPlatId: userData.sPlatID, // 平台
                    partition: userData.sPartition || 1,
                });
                if (res.ret != 0) throw res;
                redInfo = res.jData;
                timeTest('getRedInfo data success', startTime);
                this.updateRedInfo(redInfo);
            }
            console.log('getRedInfo Success--------->', redInfo);
            timeTest('getRedInfo Success', startTime);
        } catch (error) {
            console.error('getRedInfo Error--------->', error);
            this.showToastTips(
                (error as { sMsg: string }).sMsg || "很抱歉，系统繁忙，请稍后重试~"
            );
        }
    }
    //初始化
    getActInfo = async (force = false) => {
        timeTest('getActInfo start', startTime);
        try {
            let actInfo: any = null;
            if (!force) {
                try {
                    const actInfoJson = await GameletAPI.getDataStash('dwBackLotteryInfo');
                    console.warn('getDataStash ActInfo--------->', actInfoJson);
                    actInfo = JSON.parse(actInfoJson);
                    console.warn(`getDataStash ActInfo Success--------->`, actInfo);
                    timeTest('getActInfo stash success', startTime);
                } catch (e) {
                    console.error('页面_getDataStash ActInfo err: ', e);
                }
            }
            if (!actInfo) {
                if (!userData) userData = await GameletAPI.getUserData();
                const res = await Faas.GetActInfo7628_684489({
                    sArea: userData.sArea,
                    sPlatId: userData.sPlatID, // 平台
                    partition: userData.sPartition || 1,
                });
                console.log('getActInfo res--------->', JSON.stringify(res));
                if (res.ret != 0) throw res;
                actInfo = res.jData;
                timeTest('初始化额——getActInfo data Success', startTime);
                this.updateActInfo(actInfo, () => {
                    if (!force) {
                        this.setState({
                            rotateInit: true,
                            forePlay: true
                        });
                    }
                });
            } else {
                this.updateActInfo(actInfo, () => {
                    this.getActInfo(true);
                    this.setState({
                        rotateInit: true,
                        forePlay: true
                    });
                });
            }
            console.log('getActInfo Success--------->', JSON.stringify(actInfo));
            timeTest('getActInfo Success', startTime);
        } catch (error) {
            console.error('getActInfo Error--------->', error);
            this.showToastTips(
                (error as { sMsg: string }).sMsg || "很抱歉，系统繁忙，请稍后重试~"
            );
        }
        reportStats({ ...reportParams[2], iGoodsId: 1 });
    };
    //初始化
    getTaskInfo = async () => {
        if (this.state.preventRequest) {
            console.warn('prevent request!');
            return;
        }
        this.setState({
            preventRequest: true
        });
        this.showLoading('加载中');
        try {
            if (!userData) userData = await GameletAPI.getUserData();
            const res = await Faas.GetTaskInfo7628_684489({
                sArea: userData.sArea,
                sPlatId: userData.sPlatID, // 平台
                partition: userData.sPartition || 1,
            });
            const ress = await Faas.GetJackpot7628_684489()
            console.log(ress, 'ress')

            if (res.ret != 0) throw res;
            const { redInfo } = this.state;
            this.updateRedInfo(redInfo, res.jData);
            this.setState({
                taskVisible: true
            });
            console.log('getTaskInfo Success--------->', res.jData);
        } catch (error) {
            console.error('getTaskInfo Error--------->', error);
            this.showToastTips(
                (error as { sMsg: string }).sMsg || "很抱歉，系统繁忙，请稍后重试~"
            );
        }
        this.setState({
            preventRequest: false
        });
        this.hideLoading();
    };
    // 打开规则弹窗
    showRules = () => {
        this.setState({
            showRulesPop: true
        });
        reportStats({ ...reportParams[2], iGoodsId: 2 });
    };
    //解锁高级通行证
    // type: 1: 解锁高级通行证   2: 电玩通票一次性解锁  3: 已买通行证，再次付费解锁所有奖励
    buySenior = async (type = 1) => {
        console.log('------------type------------', type)
        this.setState({
            confirmSeniorVisible: false,
            confirmUnlockVisible: false
        });

        let propid = '';
        switch (type) {
            case 1:
                propid = '1196964';      // update by fqf 202506  旧：842245
                break;
            case 2:
                propid = '706538';  //202412（四期）这期没有这个功能，该功能只有二期使用
                break;
            case 3:
                propid = '706542';   //202412（四期）这期没有这个功能，该功能只有二期使用
                break;
        }
        this.showLoading('购买中');
        console.log('------------propid------------', propid)
        try {
            if (!userData) userData = await GameletAPI.getUserData();
            const param = Object.assign({}, djcParams, {
                plat: userData.sPlatID,
                areaid: userData.sArea,
                roleid: userData.sRoleId,
                partition: userData.sPartition || 1,
                propid, // 礼包id
                paytype: "1", // 1：点券 2：人民币 3：金币 4：点券+金币 5：金币2
            });
            const res = await Faas.DjcBuySenior7628_684489(param);

            if (res.ret != 0) throw res;
            this.showToastTips("解锁成功");
            const { taskInfo, redInfo } = this.state;
            if (type == 2 || type == 3) {
                taskInfo.loginDay = 5;
                taskInfo.ticket239 = 1;
            }
            type == 1 && (taskInfo.ticket240 = 1);
            taskInfo.taskList.forEach(task => {
                if (type == 1) {
                    taskInfo.loginDay = 7
                }
                if (type == 1 && +task.gift_status == 0) {
                    task.gift_status = 1;
                }
                if ((type == 2 && task.gift_status == 0) || (type == 3 && task.gift_status == 0)) {
                    task.gift_status = 1;
                    taskInfo.canGetGiftCount += 1;
                }
            });
            this.updateRedInfo(redInfo, { ...taskInfo });

            GameletAPI.callGame(JSON.stringify(pandoraTicketPayCallback));
        } catch (error) {
            if ((error as { iRet: string }).iRet == "668866") {
                this.showToastTips("很抱歉，点券余额不足");
            } else {
                this.showToastTips((error as { sMsg: string }).sMsg || "很抱歉，系统繁忙，请稍后重试~");
            }
            console.error('buySenior err: ', JSON.stringify(error));
        }
        this.hideLoading();
    };
    //购买电玩券
    buyTicket = async (paytype) => {
        const { balance, actInfo, lotteryType, } = this.state;
        this.showLoading('购买中');
        console.log(lotteryType, 'lotteryType');
        try {
            if (!userData) userData = await GameletAPI.getUserData();
            const param = Object.assign({}, djcParams, {
                plat: userData.sPlatID,
                areaid: userData.sArea,
                roleid: userData.sRoleId,
                partition: userData.sPartition || 1,
                propid: '1214134', // 礼包id    // update by fqf 202506  旧：842246
                paytype, // 1：点券 2：人民币 3：金币 4：点券+金币 5：金币2
                buyNum: lotteryType == 1 ? 1 : 10,
                raffleNum: lotteryType == 1 ? 1 : 10
            });
            const res = await Faas.DjcBuyTicket7628_684489(param);
            console.log('购买结果 =====', JSON.stringify(res));

            if (res.ret != 0) throw res;
            this.hideLoading();
            this.setState({
                confirmBuyVisible: false
            })
            this.lotteryShow(res, 2);
            if (paytype == '1') {
                GameletAPI.callGame(JSON.stringify(pandoraTicketPayCallback));
            }
        } catch (error) {
            this.hideLoading();
            let iRet = (error as { iRet: string }).iRet;
            if (iRet != "668866" && iRet != "100107") {
                setTimeout(() => {
                    this.getJiFenEvent();
                }, 1000);
                this.showToastTips("投币未成功，请稍后重试");
                return;
            } else {
                this.showToastTips((error as { sMsg: string }).sMsg || "很抱歉，系统繁忙，请稍后重试~");
            }
            console.error('buyTicket err: ', error);
        }
    };
    //领取任务礼包
    receiveGift = async (task) => {
        const { taskInfo, redInfo } = this.state;
        console.log('--------task-------', task);
        // 高级通行证这一栏，未购买高级通行证且gift_status 为0
        if (task.task_type > 5 && +task.gift_status == 0 && taskInfo.ticket239 == 0 && taskInfo.ticket240 == 0) {
            this.showToastTips("您尚未购买黄金通票~", true);
            return;
        } else if (+task.gift_status == 0 && +task.task_type > 7) {
            this.showToastTips("购买黄金通票后，即可立即领取黄金通票与普通通票的全部7天奖励，无需等待～", true);
            return;
        } else if (+task.gift_status == 0 && +task.task_type < 8) {
            this.showToastTips("您的登录天数不足，暂未解锁", true);
            return;
        } else if (+task.gift_status == 2) {
            this.showToastTips("该奖励已经领取过啦~", true);
            return;
        }
        this.showLoading('领取中');
        try {
            if (!userData) userData = await GameletAPI.getUserData();
            const res = await Faas.TaskReceive7628_684489({
                sArea: userData.sArea,
                sPlatId: userData.sPlatID, // 平台
                partition: userData.sPartition || 1,
                task_type: task.task_type
            });
            if (res.ret != 0) throw res;
            this.showRewardTips([{ ...task, sp: +task.task_type > 7 ? 1 : 0 }]);
            taskInfo.taskList.find(g => task.task_type == g.task_type).gift_status = 2;
            taskInfo.canGetGiftCount -= 1;
            this.updateRedInfo(redInfo, { ...taskInfo });
            //刷新电玩券
            if (task.name.indexOf('电玩券') > -1) {
                this.getJiFenEvent();
            }
            reportStats({ ...reportParams[1], iGoodsId: task.id });
        } catch (error) {
            if ((error as { iRet: string }).iRet == "-7213") {
                this.showToastTips("很抱歉，宝石余额不足");
            } else {
                this.showToastTips((error as { sMsg: string }).sMsg || "很抱歉，系统繁忙，请稍后重试~");
            }
            console.error('receiveGift err: ', error);
        }
        this.hideLoading();
    };
    //抽奖
    lottery = async () => {
        const { lotteryType, actInfo, isUsingTicket } = this.state;
        this.showLoading('投币中');

        // 模拟抽奖 - 根据抽奖类型返回不同数量的奖品
        // const mockResults = [
        //     { iPackageId: 6643185, sPackageName: '冰糖葫芦杰西' },
        //     { iPackageId: 6643185, sPackageName: '冰糖葫芦杰西' },
        //     { iPackageId: 6643188, sPackageName: '变态辣科莱特' },
        //     { iPackageId: 6643187, sPackageName: '葡萄甜心杰西' },
        //     { iPackageId: 6643186, sPackageName: '麻婆豆腐科莱特' },
        //     { iPackageId: 6643185, sPackageName: '冰糖葫芦杰西' },
        //     { iPackageId: 6643188, sPackageName: '变态辣科莱特' },
        //     { iPackageId: 6643188, sPackageName: '变态辣科莱特' },
        //     { iPackageId: 6643187, sPackageName: '葡萄甜心杰西' },
        //     { iPackageId: 6643186, sPackageName: '麻婆豆腐科莱特' },
        // ];

        // this.setState({
        //     rotatePlay: true,
        //     lotteryResult: mockResults
        // });
        // // this.hideLoading();
        // return false



        try {
            if (!userData) userData = await GameletAPI.getUserData();
            let raffleNum = lotteryType == 1 ? 1 : 10
            console.log(raffleNum, 'raffleNum')
            const res = await Faas.Lottery7628_684489({
                sArea: userData.sArea,
                sPlatId: userData.sPlatID, // 平台
                partition: userData.sPartition || 1,
                raffleNum
            });
            console.log(res, 'res')
            if (res.ret != 0) throw res;
            this.lotteryShow(res);
            this.getActInfo();
        } catch (error) {
            this.showToastTips(
                (error as { sMsg: string }).sMsg || "很抱歉，系统繁忙，请稍后重试~"
            );
            console.error('lottery err: ', error);
        }
        this.hideLoading();
    };
    // 处理抽奖结果
    lotteryShow = async (res, costType = 1) => {
        const { lotteryType, actInfo } = this.state;
        const { giftInfo, visible1, visible2, visible3, visible4, isGetFourSkin } = res.jData;
        let raffleNum = lotteryType == 1 ? 1 : 10
        const lotteryResult: any[] = [];
        const tmpList: any[] = [];
        const pkgIds = giftInfo.iPackageId.split(',');
        const pkgNames = giftInfo.sPackageName.split(',');
        pkgIds.forEach((p, e) => {
            if (p.indexOf('6643201') == -1) {    // update by fqf 202506  旧：[5848243] 礼包名称100金币  新：[5848243] 礼包名称100金币
                tmpList.push({
                    iPackageId: p,
                    sPackageName: pkgNames[e]
                });
            }
        });
        tmpList.forEach(g => {
            const sp = g.iPackageId.split(':');
            if (sp.length == 2) {
                for (let i = 0; i < sp[1]; i++)
                    lotteryResult.push({
                        iPackageId: sp[0],
                        sPackageName: g.sPackageName
                    });
            } else {
                lotteryResult.push(g);
            }
        });
        console.log(lotteryResult, 'lotteryResult11')
        console.log(tmpList, 'tmpList')
        //抽中飞行器钥匙
        const flyKeyGet = lotteryResult.reduce((n, r) => {
            if (r.iPackageId == '6551400') {    // update by fqf 202506  旧：[5848250] 礼包名称无畏火箭飞行器
                actInfo.wuweiFly = 1;
            }
            if (r.iPackageId == '6551401') {   // update by fqf 202506  旧：[5848251] 礼包名称爆裂火箭飞行器
                actInfo.baolieFly = 1;
            }
            return (r.iPackageId == '6551372' || r.iPackageId == '6551392') ? (n + 1) : n;  // update by fqf 202506  旧：[5848222] 礼包名称飞行器钥匙  [5848242] 礼包名称飞行器钥匙
        }, 0);
        this.setState({
            rotatePlay: true,
            lotteryResult: lotteryResult.slice(0, raffleNum)
        });
        actInfo.visible1 = visible1;
        actInfo.visible2 = visible2;
        actInfo.visible3 = visible3;
        actInfo.visible4 = visible4;
        actInfo.isGetFourSkin = isGetFourSkin;
        actInfo.flyKeyTotalNum = +actInfo.flyKeyTotalNum + flyKeyGet;
        actInfo.flyKeyNum = +actInfo.flyKeyNum + flyKeyGet;
        // 更新奖券数量
        actInfo.ticket = +actInfo.ticket > raffleNum * 60 ? +actInfo.ticket - raffleNum * 60 : 0;
        actInfo.drawNum = +actInfo.drawNum + raffleNum;
        this.updateActInfo(actInfo);
        // 埋点上报
        let rptParam = reportParams[0];
        rptParam.iChangjingId = lotteryType == 1 ? '单抽' : '十抽';
        //10次上报
        lotteryResult.forEach(res => {
            rptParam.iGoodsId = res.iPackageId;
            rptParam.iFee = costType == 2 ? (lotteryType == 1 ? 15 : 75) : 0;
            rptParam.extendList[0].value = lotteryType == 1 ? '60' : '600';
            rptParam.extendList[1].value = actInfo.ticket.toString();
            reportStats({ ...rptParam, });
        });
    };
    // 查询积分
    getJiFenEvent = async () => {
        const { actInfo } = this.state;
        try {
            const res = await Faas.GetJifen7628_684489({});
            if (res.iRet != 0) return;
            console.log('getJiFenEvent', res)
            actInfo.ticket = res.jData.ticket;
            this.updateActInfo(actInfo);
        } catch (error) {
            console.log('getJiFenEvent err: ', error);
        }
    };

    confirmBuy = async (paytype = '1') => {
        try {
            if (!userData) userData = await GameletAPI.getUserData();
            this.setState({
                confirmBuyVisible: false
            });
            this.buyTicket(paytype);
        } catch (error) {
            console.error('buy&lottery err: ', error);
        }
    };
    handleLottery = async (type) => {
        await this.checkActInit();
        const { actInfo } = this.state;
        if ((type == 1 && +actInfo.ticket < 1) || (type == 2 && +actInfo.ticket < 10)) {
            const balance = (type == 1 ? 30 : 150) - actInfo.ticket;
            this.setState({
                confirmBuyVisible: true,
                lotteryType: type === 2 ? 10 : type,
                balance: balance % 2 == 0 ? balance : balance + 1  // 添加取余宝石向上取整
            });
        } else {
            this.setState({
                confirmTicketVisible: true,
                lotteryType: type === 2 ? 10 : type
            });
        }
    };
    exchangeCraft = async () => {
        const { actInfo } = this.state;
        this.setState({
            confirmExchangeVisible: false
        });
        this.showLoading('兑换中');
        try {
            if (!userData) userData = await GameletAPI.getUserData();
            const res = await Faas.ExchangeCraft7628_684489({
                sArea: userData.sArea,
                sPlatId: userData.sPlatID, // 平台
                partition: userData.sPartition || 1,
            });
            if (res.iRet != 0) throw res;
            console.log('exchangeCraft', res);
            const {
                iPackageId
            } = res.jData.giftInfo;
            if (iPackageId == '6551394') {   // update by fqf 202506  旧：5848244
                this.showRewardTips([{
                    name: '爆裂火箭飞行器',
                    pic: 'jackpot/022.png',
                    sp: 1
                }]);
                actInfo.baolieFly = 1;
            }
            if (iPackageId == '6551395') {  // update by fqf 202506  旧：5848245
                this.showRewardTips([{
                    name: '无畏火箭飞行器',
                    pic: 'jackpot/021.png',
                    sp: 1
                }]);
                actInfo.wuweiFly = 1;
            }
            if (iPackageId == '6551385') {   // update by fqf 202506  旧：5848235
                this.showRewardTips([{
                    name: '100金币',
                    pic: 'jackpot/017.png'
                }]);
            }
            actInfo.flyKeyNum -= 3;
            this.updateActInfo(actInfo);
        } catch (error) {
            this.showToastTips(
                (error as { sMsg: string }).sMsg || "很抱歉，系统繁忙，请稍后重试~"
            );
            console.log('exchangeCraft err: ', error);
        }
        this.hideLoading();
    };
    confirmLottery = () => {
        this.setState({
            confirmTicketVisible: false,
        });
        this.lottery();
        return;
    };
    callbackLottery = (res) => {
        this.setState({
            rotatePlay: false,
            forePlay: true
        });
        this.showRewardTips(res);
    };
    callbackRotate = () => {

        this.setState({
            forePlay: false
        });
    };
    confirmExchange = async (type) => {
        const { flyKeyNum, isGetFourSkin, wuweiFly, baolieFly } = this.state.actInfo;
        if ((type == 1 && +flyKeyNum < 1) || (type == 2 && +flyKeyNum < 3)) {
            this.showToastTips('您的飞行器钥匙不足');
            return;
        }
        if (type == 1 && isGetFourSkin) {
            this.showToastTips('您已拥有全部电玩皮肤');
            return;
        }
        if (type == 2 && wuweiFly == 1 && baolieFly == 1) {
            this.showToastTips('您已拥有全部飞行器');
            return;
        }
        this.setState({
            exchangeType: type,
            exchangeVisible: false,
            confirmExchangeVisible: true
        });
    };
    //兑换飞限定皮肤
    exchangeSkin = async () => {
        const { actInfo } = this.state;
        this.setState({
            confirmExchangeVisible: false
        });
        this.showLoading('兑换中');

        try {
            if (!userData) userData = await GameletAPI.getUserData();
            const res = await Faas.ExchangeSkin7628_684489({
                sArea: userData.sArea,
                sPlatId: userData.sPlatID, // 平台
                partition: userData.sPartition || 1,
            });
            if (res.iRet != 0) throw res;
            console.log('exchangeSkin', res);
            const { giftInfo, visible1, visible2, visible3, visible4, isGetFourSkin } = res.jData;
            console.log(res.jData, 'data-')
            actInfo.visible1 = visible1;
            actInfo.visible2 = visible2;
            actInfo.visible3 = visible3;
            actInfo.visible4 = visible4;
            actInfo.isGetFourSkin = isGetFourSkin;
            actInfo.flyKeyNum -= 1;
            const packages = [{
                id: '6551399',   // update by fqf 202506  旧：5848249
                name: '孤胆玩家柯尔特',
                pic: 'jackpot/004.png',
                sp: 1
            }, {
                id: '6551396',   // update by fqf 202506  旧：5848246
                name: '爆裂玩家雪莉',
                pic: 'jackpot/001.png',
                sp: 1
            }, {
                id: '6551398',   // update by fqf 202506  旧：5848248
                name: '无畏玩家雪莉',
                pic: 'jackpot/002.png',
                sp: 1
            }, {
                id: '6551397',  // update by fqf 202506  旧：5848247
                name: '热血玩家柯尔特',
                pic: 'jackpot/003.png',
                sp: 1
            }, {
                id: '6551413',  // update by fqf 202506  旧：5848263
                name: '异次元骇客莫提斯',
                pic: 'jackpot/023.png',
                sp: 1
            }, {
                id: '6551412',  // update by fqf 202506  旧：5848262
                name: '黄金骇客莫提斯',
                pic: 'jackpot/024.png',
                sp: 1
            }, {
                id: '6551411',  // update by fqf 202506  旧：5848261
                name: '霓虹骇客莫提斯',
                pic: 'jackpot/025.png',
                sp: 1
            }, {
                id: '6551385',  // update by fqf 202506  旧：5848235
                name: '100金币',
                pic: 'jackpot/017.png'
            }].filter(g => g.id == giftInfo.iPackageId);
            this.showRewardTips(packages);
            this.updateActInfo(actInfo);
        } catch (error) {
            this.showToastTips(
                (error as { sMsg: string }).sMsg || "很抱歉，系统繁忙，请稍后重试~"
            );
            console.log('exchangeCraft err: ', error);
        }
        this.hideLoading();
    };
    // 首页初始化返回的actInfo中的unlock后端已去掉，用taskInfo中返回的ticket239和ticket240来判断(2023.12.20 9:00 rqm)
    confirmSeniorTask = () => {
        const { taskInfo } = this.state;
        console.log('点卷解锁电玩通行证', taskInfo)
        if (+taskInfo.ticket239 == 1 || +taskInfo.ticket240 == 1) return;
        this.setState({
            confirmSeniorVisible: true
        });
    };
    confirmUnlockTask = () => {
        const { taskInfo } = this.state;
        console.log('点卷解锁全部奖励', taskInfo)
        if (+taskInfo.ticket239 == 1) return;
        this.setState({
            confirmUnlockVisible: true
        });
    };
    showRewardTips = (packages: any[] = []) => {
        this.setState({
            rewardVisible: true,
            rewardList: packages
        });
    };
    closeRewardTips = () => {
        this.setState({
            rewardVisible: false,
            rewardList: []
        });
    };
    showToastTips = (msg = "", showConfBtn = false) => {
        this.setState({
            toastVisible: true,
            toastMsg: msg,
            toastShowBtn: showConfBtn
        });
    };
    closeToastTips = () => {
        this.setState({
            toastVisible: false,
        });
    };
    showLoading = (msg = "加载中") => {
        this.setState({
            loadingVisible: true,
            loadingMsg: msg,
        });
    };
    hideLoading = () => {
        this.setState({
            loadingVisible: false,
        });
    };
    //
    purchase = () => {
        this.setState({ purchaseVisible: true })
    }

    purClose = () => {
        this.setState({ purchaseVisible: false })
    }
    onHandleBuy = (type) => {
        this.setState({ confirmBuyPurVisible: true, bagType: type })
        console.log(type)
    }
    confirmBuyBag = async () => {
        if (!userData) userData = await GameletAPI.getUserData();
        this.showLoading('购买中');

        const params = Object.assign({}, djcParams, {
            plat: userData.sPlatID,
            areaid: userData.sArea,
            roleid: userData.sRoleId,
            partition: userData.sPartition || 1,
            propid: this.state.bagType == 1 ? '1214135' : '1214136',
            paytype: "1", // 1：点券 2：人民币 3：金币 4：点券+金币 5：金币2
        });


        try {
            const res = await Faas.DjcBuyTicketTicket7628_684489({ ...params });
            if (res.iRet != 0) throw res;
            this.showToastTips("购买成功");
            this.hideLoading();
            this.setState({
                confirmBuyPurVisible: false,
                purchaseVisible: false
            });
            this.getActInfo()
        } catch (err) {
            this.showToastTips((err as { sMsg?: string }).sMsg || "购买失败");
            this.hideLoading();
        }
    }

    render() {
        const {
            actInfo,
            taskInfo,
            rotateVisible,
            taskVisible,
            jackpotVisible,
            recordVisible,
            exchangeVisible,
            exchangeType,
            bagType,
            lotteryType,
            lotteryResult,
            confirmTicketVisible,
            confirmBuyVisible,
            confirmBuyPurVisible,
            confirmSeniorVisible,
            confirmUnlockVisible,
            confirmExchangeVisible,
            toastVisible,
            showRulesPop,
            toastMsg,
            toastShowBtn,
            loadingVisible,
            loadingMsg,
            rewardVisible,
            rewardList,
            balance,
            btnSingleClass,
            btnMultiClass,
            showGotAllTips,
            rotateInit,
            rotatePlay,
            ticketTips,
            purchaseVisible
        } = this.state;
        const commProps = {
            userData,
            showLoading: this.showLoading,
            hideLoading: this.hideLoading,
            showToastTips: this.showToastTips,
            closeToastTips: this.closeToastTips
        };
        return (
            <div className="dwBackLottery5802-page">
                <div className="dwBackLottery5802-wrapper">
                    <div className="dwBackLottery5802-container" onMouseDown={() => {
                        this.setState({ ticketTips: false });
                    }}>
                        <div className='fore-craft'></div>
                        {/* {actInfo.visible3 && (<div className="gotsk1"></div>)}
                        {actInfo.visible4 && (<div className="gotsk2"></div>)}
                        {actInfo.visible5 && (<div className="gotsk5"></div>)}
                        {actInfo.baolieFly == 1 && (<div className="gotsk3"></div>)}
                        {actInfo.wuweiFly == 1 && (<div className="gotsk4"></div>)} */}
                        {/* 奖池按钮 */}
                        <div className="btn-jackpot" onClick={async () => {
                            await this.checkActInit();
                            this.setState({ jackpotVisible: true });
                            reportStats({ ...reportParams[2], iGoodsId: 3 });
                        }}></div>
                        {/* 记录按钮 */}
                        <div className="btn-record" onClick={async () => {
                            await this.checkActInit();
                            this.setState({ recordVisible: true });
                            reportStats({ ...reportParams[2], iGoodsId: 4 });
                        }}></div>
                        {/* 抽奖券余额 */}
                        <div className="ticket-box" onClick={(e) => {
                            this.setState({ ticketTips: true });
                            e.stopPropagation();
                        }}>
                            {/*<div className="ticket-icon"></div>*/}
                            <text className="ticket-text">{actInfo.ticket}</text>
                            <div className="ticket-tips" style={{ display: ticketTips ? 'flex' : 'none' }}>
                                <div className="x">当电玩券不足时</div>
                                <div>可使用点券或宝石补充</div>
                            </div>
                        </div>
                        <div className="btn-single-base"></div>
                        <div className="btn-multi-base"></div>
                        {/* 抽奖按钮-单抽 */}
                        <Button rootClass={btnSingleClass}
                            onClick={() => {
                                this.handleLottery(1);
                            }}
                        ></Button>
                        {/* 抽奖按钮-十抽 */}
                        <Button rootClass={btnMultiClass}
                            onClick={() => {
                                this.handleLottery(2);
                            }}
                        ></Button>
                        {/* 购买礼包 */}
                        <div className='btn-purchase-bag' onClick={this.purchase} />
                        {/* 购买弹窗 */}
                        {
                            purchaseVisible &&
                            <div className="purchase-container">
                                <div className='purchase-close' onClick={this.purClose}></div>
                                <div className='left-bag'>
                                    <div className='bagx2-img'></div>
                                    <div className='bagx2-bth' onClick={() => this.onHandleBuy(1)}></div>
                                    <div className='bagx2-text'>最多购买5次</div>
                                </div>
                                <div className='right-bag'>
                                    <div className='bagx10-img'></div>
                                    <div className='bagx10-bth' onClick={() => this.onHandleBuy(2)}></div>
                                    <div className='bagx10-text'>最多购买2次</div>
                                </div>
                            </div>
                        }
                        <div className="cost-icon"></div>
                        {/* 任务按钮 */}
                        <div className="btn-next" onClick={async () => {
                            await this.checkActInit();
                            this.getTaskInfo();
                            reportStats({ ...reportParams[2], iGoodsId: 5 });
                        }}>
                        </div>
                        {/* 规则按钮 */}
                        <div className="btn-rule" onClick={this.showRules}></div>
                        <div className="numtips">
                            <div className="numtips-txt">
                                <text>距离至臻皮肤次数还差</text>
                                <text className="x">{actInfo.guaranteedNum}</text>
                            </div>
                        </div>
                        {/* 兑换飞行器 */}
                        <div className="btn-exchange" onClick={async () => {
                            await this.checkActInit();
                            this.setState({ exchangeVisible: true });
                        }} />
                    </div>
                </div>

                {/* 购买确认弹窗 */}
                {confirmBuyPurVisible && (<div className="dwBackLottery5802-modal">
                    <div className="dwBackLottery5802-pop">
                        <div className="pop-head">
                            <div className="ptit ptit1"></div>
                            <div className="pclose" onClick={() => {
                                this.setState({ confirmBuyPurVisible: false });
                            }}>
                            </div>
                        </div>
                        <div
                            className={`pop-cont`}>
                            <div className="msgbox">
                                <text>是否使用{bagType == 1 ? 100 : 300}电玩券购买并进行1次</text>
                            </div>
                            <div className="btn-pop" onClick={this.confirmBuyBag}>
                                <div className="icon-ticket"></div>
                                <div className={bagType == 1 ? 'num1' : 'num2'}></div>
                            </div>
                        </div>
                    </div>
                    <div className="dwBackLottery5802-mask"></div>
                </div>)}
                {/* 任务面板 */}
                {taskVisible && (
                    <div className={`dwBackLottery5802-board${taskVisible ? '' : ' hide'}`} onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        {/* 抽奖券余额 */}
                        <div className="ticket-box" onClick={(e) => {
                            this.setState({ ticketTips: true });
                            e.stopPropagation();
                        }}>
                            <text className="ticket-text">{actInfo.ticket}</text>
                            <div className="ticket-tips" style={{ display: ticketTips ? 'flex' : 'none' }}>
                                <div className="x">当电玩券不足时</div>
                                <div>可使用点券或宝石补充</div>
                            </div>
                        </div>
                        <div className="task-return-icon" onClick={() => {
                            this.setState({ taskVisible: false });
                        }}></div>
                        <div className="titbox">
                            <div className="titbox-senior" onClick={this.confirmSeniorTask}>
                                {(+taskInfo.ticket240 != 1 && +taskInfo.ticket239 != 1) && (
                                    <div className="titbox-senior-btn"></div>)}
                            </div>
                        </div>
                        <TaskBox taskInfo={taskInfo} receiveTask={this.receiveGift}
                            unlockTask={() => this.confirmSeniorTask()} /> {/*  unlockTask={this.confirmUnlockTask} */}

                        <div className="close-mask" onClick={() => {
                            this.setState({ taskVisible: false });
                        }}></div>
                    </div>)}
                {/* 抽奖过程 */}
                {rotateInit &&  <RotateBox isPlay={rotatePlay} onPLay={this.callbackRotate} result={lotteryResult}
                    callback={this.callbackLottery} />}
                {/* 奖池弹窗 */}
                {jackpotVisible && <JackpotPop {...commProps} close={() => {
                    this.setState({ jackpotVisible: false });
                }} />}
                {/* 弹窗：抽奖记录 */}
                {recordVisible && (<RecordPop {...commProps} close={() => {
                    this.setState({ recordVisible: false });
                }} />)}
                {/* 弹窗：确认抽奖 */}
                {confirmTicketVisible && (<div className="dwBackLottery5802-modal">
                    <div className="dwBackLottery5802-pop">
                        <div className="pop-head">
                            <div className="ptit ptit1"></div>
                            <div className="pclose" onClick={() => {
                                this.setState({ confirmTicketVisible: false });
                            }}></div>
                        </div>
                        <div
                            className={`pop-cont${actInfo.isGetFourSkin && actInfo.wuweiFly == 1 && actInfo.baolieFly == 1 && showGotAllTips ? ' hide' : ''}`}>
                            <div className="msgbox">
                                <text>是否使用{lotteryType == 1 ? 60 : 600}电玩券购买{lotteryType == 1 ? '100' : '600'}金币，并进行1次{lotteryType == 1 ? '' : '十连'}投币</text>
                            </div>
                            <div className="btn-pop" onClick={this.confirmLottery}>
                                <div className="icon-ticket"></div>
                                <div className={lotteryType == 1 ? 'num1' : 'num2'}></div>
                            </div>
                        </div>
                        <div
                            className={`pop-cont${actInfo.isGetFourSkin && actInfo.wuweiFly == 1 && actInfo.baolieFly == 1 && showGotAllTips ? '' : ' hide'}`}>
                            <div className="msgbox">
                                <text>本期限定皮肤和飞行器都已经获取，是否还要进行投币</text>
                            </div>
                            <div className="pop-confbtn" onClick={() => {
                                this.setState({ showGotAllTips: false });
                            }}>
                            </div>
                        </div>
                    </div>
                    <div className="dwBackLottery5802-mask"></div>
                </div>)}
                {/* 弹窗：确认购买抽奖券并抽奖 */}
                {confirmBuyVisible && (<div className="dwBackLottery5802-modal">
                    <div className="dwBackLottery5802-pop">
                        <div className="pop-head">
                            <div className="ptit ptit1"></div>
                            <div className="pclose" onClick={() => {
                                this.setState({ confirmBuyVisible: false });
                            }}></div>
                        </div>
                        <div className="pop-cont">
                            <div className="msgbox">
                                <text>电玩券不足，是否使用{Math.ceil(balance * 2)}点券或{balance / 2}宝石兑换{balance}电玩券，同时使用电玩券购买{lotteryType == 1 ? '100' : '600'}金币进行1次{lotteryType == 1 ? '' : '十连'}投币？</text>
                            </div>
                            <div className="pop-btns">
                                <div className="btn-pop" onClick={() => {
                                    this.confirmBuy('1');
                                }}>
                                    <div className="icon-dq"></div>
                                    <div className="txt">
                                        <text>{`${Math.ceil(balance * 2)}`}</text>
                                    </div>
                                </div>
                                <div className="btn-pop" onClick={() => {
                                    this.confirmBuy('3');
                                }}>
                                    <div className="icon-stone"></div>
                                    <div className="txt">
                                        <text>{`${balance / 2}`}</text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dwBackLottery5802-mask"></div>
                </div>)}
                {/* 弹窗：飞行器钥匙选择兑换 */}
                {exchangeVisible && (<div className="dwBackLottery5802-modal">
                    <div className='exchange-close' onClick={() => this.setState({ exchangeVisible: false })}></div>
                    <div className='exchange-bag-groups'>
                        <div className='exchange-left-bag'></div>
                        <div className='exchange-right-bag'></div>
                    </div>
                    <div className='exchange-random'></div>
                    <div className='exchange-btn' onClick={() => this.confirmExchange(2)} />
                    <div className="dwBackLottery5802-exchange-bg"></div>
                </div>)}
                {/* 弹窗：飞行器钥匙确认兑换 */}
                {confirmExchangeVisible && (<div className="dwBackLottery5802-modal">
                    <div className="dwBackLottery5802-pop">
                        <div className="pop-head">
                            <div className="ptit ptit1"></div>
                            <div className="pclose" onClick={() => {
                                this.setState({ confirmExchangeVisible: false });
                            }}></div>
                        </div>
                        <div className={exchangeType == 1 ? 'pop-cont' : 'hide'}>
                            <div className="msgbox">
                                <text>是否使用1个飞行器钥匙，兑换随机</text>
                                <text>一个电玩皮肤</text>
                            </div>
                            <div className="btn-exkey1" onClick={this.exchangeSkin}></div>
                        </div>
                        <div className={exchangeType == 2 ? 'pop-cont' : 'hide'}>
                            <div className="msgbox">
                                <text>是否使用3个飞行器钥匙，兑换随机</text>
                                <text>一个飞行器</text>
                            </div>
                            <div className="btn-exkey2" onClick={this.exchangeCraft}></div>
                        </div>
                    </div>
                    <div className="dwBackLottery5802-mask"></div>
                </div>)}
                {/* 弹窗：确认解锁高级 */}
                {confirmSeniorVisible && (<div className="dwBackLottery5802-modal">
                    <div className="dwBackLottery5802-pop">
                        <div className="pop-head">
                            <div className="ptit ptit1"></div>
                            <div className="pclose" onClick={() => {
                                this.setState({ confirmSeniorVisible: false });
                            }}></div>
                        </div>
                        <div className="pop-cont">
                            <div className="msgbox">
                                <text>是否使用点券解锁全部奖励，包含黄金通票和普通通票中的全部奖励?</text>
                            </div>
                            <div className="btn-buy1" onClick={() => {
                                this.buySenior(1);
                            }}></div>
                        </div>
                    </div>
                    <div className="dwBackLottery5802-mask"></div>
                </div>)}
                {/* 弹窗：确认解锁全部 */}
                {confirmUnlockVisible && (<div className="dwBackLottery5802-modal">
                    <div class="dwBackLottery5802-pop">
                        <div className="pop-head">
                            <div className="ptit ptit1"></div>
                            <div className="pclose" onClick={() => {
                                this.setState({ confirmUnlockVisible: false });
                            }}></div>
                        </div>
                        <div className="pop-cont">
                            <div className="msgbox">
                                <text>是否使用点券解锁全部奖励，包含黄金通票和普通通票中的全部奖励?</text>
                            </div>
                            <div className={taskInfo.ticket240 == 0 ? 'btn-buy2' : 'btn-buy1'} onClick={() => {
                                this.buySenior(taskInfo.ticket240 == 0 ? 2 : 3);
                            }}></div>
                        </div>
                    </div>
                    <div className="dwBackLottery5802-mask"></div>
                </div>)}
                {/* 弹窗：获得奖励 */}
                {rewardVisible && (<RewardPop packages={rewardList} close={this.closeRewardTips} />)}
                {/* 弹窗：提示 */}
                {toastVisible && (<div className="dwBackLottery5802-modal">
                    <div className="dwBackLottery5802-pop">
                        <div className="pop-head">
                            <div className="ptit ptit3"></div>
                            <div className="pclose" onClick={this.closeToastTips}></div>
                        </div>
                        <div className="pop-cont">
                            <div className="msgbox h">
                                <text>{toastMsg}</text>
                            </div>
                            {toastShowBtn && <div className="pop-confbtn" onClick={this.closeToastTips}></div>}
                        </div>
                    </div>
                    <div className="dwBackLottery5802-mask"></div>
                </div>)}
                {/* 弹窗：规则说明 */}
                {showRulesPop && (<div className="dyrules-modal">
                    <div className="dwBackLottery5802-pop">
                        <div className="pclose" onClick={() => {
                            this.setState({ showRulesPop: false });
                        }}></div>
                        <div className="pop-cont">
                            <div className="pop-rules-cont">
                                <div className="row row1">
                                    <text>美味暴击限时来袭！参与活动抽取奖励，有概率获取四款美食主题至臻皮肤！</text>
                                </div>
                                <div className="row row1">
                                    <text>
                                        <text className="b">活动时间：</text>
                                        2025年7月15日--2024年8月15日23:59
                                    </text>
                                </div>
                                <div className="row">
                                    <text>
                                        <text className="b">活动简介：</text>
                                        活动期间，可花费60点券或15宝石购买10金币，获赠1次抽取机会，有机会获得其乐无穷限定外观；600点券或150宝石购买100金币，获赠10次抽取机会。此外，利用限时点券和点券购买限量优惠礼包，可以更划算地获得抽取机会。完成通票任务，可获取免费的抽取机会和美味碎片；<br />600点券购买黄金通票，可获得额外的抽取机会和美味碎片，黄金通票和普通通票总共可领取70次抽取机会和30个美味碎片，和限定皮肤烘焙梅格！
                                    </text>
                                </div>
                                <div className="row">
                                    <text>
                                        <text className="b">活动规则：</text>
                                    </text>
                                </div>
                                <div className="row">
                                    <text>1、您无论是否拥有某个英雄，您都有机会获得该英雄的皮肤，皮肤不会重复获得；拥有此类物品后，该物品的获得概率将会分配给奖池中的所有其他物品。</text>
                                </div>
                                <div className="row">
                                    <text>2、通过抽取获得各奖励的初始概率如下(假设本活动的所有皮肤您均未拥有)
                                        :限定至臻皮肤：0.3%，其他非至臻皮肤：15%，美味碎片36.5%，金币和战力能量等物品：48.2%；拥有某皮肤后，该皮肤的获得概率将会分配给奖池中的所有其他物品。
                                    </text>
                                </div>
                                <div className="row">
                                    <text>3、若连续抽取必定保底获得一款限定至臻皮肤。其中冰糖葫芦杰西40%、麻婆豆腐科莱特40%、葡萄甜心杰西10%、变态辣科莱特10%。拥有某皮肤后，该皮肤的获得概率将会分配给奖池中的所有其他物品。</text>
                                </div>
                                <div className="row">
                                    <text>4、美味碎片可以用来兑换本次主题至臻皮肤，100个美味碎片可以兑换1款随机限定至臻皮肤，其中冰糖葫芦杰西40%、麻婆豆腐科莱特40%、葡萄甜心杰西10%、变态辣科莱特10%。拥有某皮肤后，该皮肤的获得概率将会分配给奖池中的所有其他物品。</text>
                                </div>
                                <div className="row">
                                    <text>5、活动期间，完成通票任务，可获取免费的抽取机会，此外还可使用600点券购买黄金通票；黄金通票和普通通票总共可领取70次抽取机会和30个美味碎片，拥有黄金通票还可获得限定皮肤烘焙梅格！</text>
                                </div>
                                <div className="row">
                                    <text>6、美味通票奖励需要累计登录天数解锁，若购买黄金通票，则立即解锁所有奖励，包括黄金通票与普通通票的奖励，无需再累计登录。</text>
                                </div>
                                <div className="row">
                                    <text>7、除[抽取次数]之外，获得的其他奖励将通过邮件发放到[收件箱]中。请及时领取以免奖励失效失效规则:
                                        邮件存储上限为400封，如超过存储上限，将不会显示最早的一封邮件，不显示邮件中的物品无法领取
                                    </text>
                                </div>
                                <div className="row">
                                    <text>8、活动结束后，剩余的美味碎片将清空归零，请及时使用。未被使用的美味碎片，将按：100个美味碎片=2000闪闪币，通过邮件的方式发放，不满100美味碎片则无发放。</text>
                                </div>
                                <div className="row">
                                    <text>9、如网络较慢，奖励邮件可能会延迟收到。如您未立刻收到奖励邮件，请稍后再次查看。如始终未收到奖励，请联系客服咨询。</text>
                                </div>
                                <div className="row">
                                    <text>注:互联网运行存在诸多不确定性因素，如因不可抗力、网络、通讯线路故障、计算机大规模瘫痪及活动中存在大面积作弊行为等原因致使本活动出现异常情况或难以继续开展的，腾讯有权采取包括但不限于通过各种方式消除异常情况或调整、暂停、取消本活动等合理措施，保障腾讯及用户的合法权益。</text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dwBackLottery5802-mask"></div>
                </div>)}
                {loadingVisible && (<div className="dwBackLottery5802-toast">
                    {loadingVisible && <div className="toast-box">{loadingMsg}</div>}
                </div>)}
            </div>
        );
    }
}
