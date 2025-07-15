import { GameletAPI, pluginsForActivityCenter } from "gamelet-pixui-frame";

// 关闭小应用
const closeApp = async () => {
  console.log("closeApp");
  GameletAPI.close();
};

// 埋点上报的参数
const reportParams = [{
  iType: 1,
  iChangjingId: "抽奖",
  iGoodsId: [1, 2],
  iCountId: 0, // 抽奖道具ID
  iFee: 0, // 抽奖道具类型：皮肤[1]、英雄[2]、金币[3]
  iFlowId: 0, // 抽奖道具数量
  extendList: [{ "name": "reserve0", "value": "0" }, { "name": "reserve1", "value": "0" }, { "name": "reserve2", "value": "0" }], // reserve0: 消耗货币数量、reserve1: 累计抽奖次数、reserve2: openid
}, {
  iType: 2,
  iChangjingId: "领奖",
  iGoodsId: 0, // 领奖道具ID
  iCountId: 0, // 道具数量
  iFee: 0, // openid
  iFlowId: 0,
  extendList: [{ "name": "reserve0", "value": "0" }]
}, {
  iType: 3,
  iChangjingId: "面板展示上报",
  iGoodsId: [1, 2, 3, 4, 5],
  iCountId: 0,
  iFee: 0,
  iFlowId: 0,
  extendList: []
}];

/**
* 数据上报
* @param iType 行为类型
* @param iChangjingId 行为中文名称，比如活动曝光
* @param iGoodsId 礼包信息，填写礼包id
* @param iCountId 任务信息
* @param iFee 购买信息，填写购买数量
* @param iFlowId 推荐信息，填写推荐指标id
* @param extendList 保留字段，扩展字段是一个数组（不要用object）， 数组每个成员为name/value形式，例如：[{"name":"reserve0","value":"0"}, {"name":"reserve1","value":"1"}, ...]，name和value的值都是字符串类型。默认支持10个扩展字段（reserve0~reserve9），需按顺序填写，多余的字段会被忽略，不会落在表里。
* @param userdata
* 注意：1.value字段必须为string类型；2.如果扩展字段为空的话，默认不传参数即可，不要传{}
*/
const reportStats = async (params) => {
  console.log('reportStats', params);
  if (GameletAPI.canUsePlatformAPI()) {
    //GameletAPI.reportStatsV2(params);
    GameletAPI.reportStatsV2(params.iType, params.iChangjingId, params.iGoodsId, params.iCountId, params.iFee, params.iFlowId, params.extendList);
  }
}


 // update by fqf 202506 【旧】 '5848277', '5848278', '5848279', '5848280', '5848281', '5848287', '5848288', '5848282', '5848283', '5848284', '5848285', '5848286', '5848289', '5848290'

const sortedKeys = [    // 任务列表 iPackageId 排序作用
   '6551346', '6551347', '6551348', '6551349', '6551350', '6551356', '6551357',
  '6551351', '6551352', '6551353', '6551354', '6551355', '6551358', '6551359'
];
//电玩通票列表
const taskPackagesConf = {
  '6551346': {
    name: '电玩券*150',
    desc: '累登1天',
    pic: 'goods3.png'
  }, '6551347': {
    name: '闪闪币*1000',
    desc: '累登2天',
    pic: 'goods5.png'
  }, '6551348': {
    name: '电玩券*150',
    desc: '累登3天',
    pic: 'goods3.png'
  }, '6551349': {
    name: '金币*1000',
    desc: '累登4天',
    pic: 'goods6.png'
  }, '6551350': {
    name: '电玩券*300',
    desc: '累登5天',
    pic: 'goods4.png'
  }, '6551356': {
    name: '战斗能量*1000',
    desc: '累登6天',
    pic: 'goods7.png'
  }, '6551357': {
    name: '电玩券*300',
    desc: '累登7天',
    pic: 'goods4.png'
  }, '6551351': { // 付费版
    name: '电玩飞弹',
    desc: '累登1天',
    pic: 'goods2.png'
  }, '6551352': {
    name: '闪闪币*1000',
    desc: '累登2天',
    pic: 'goods5.png'
  }, '6551353': {
    name: '电玩券*150',
    desc: '累登3天',
    pic: 'goods3.png'
  }, '6551354': {
    name: '金币*1000',
    desc: '累登4天',
    pic: 'goods6.png'
  }, '6551355': {
    name: '电玩券*300',
    desc: '累登5天',
    pic: 'goods4.png'
  }, '6551358': {
    name: '战斗能量*1000',
    desc: '累登6天',
    pic: 'goods7.png'
  }, '6551359': {
    name: '电玩券*300',
    desc: '累登7天',
    pic: 'goods4.png'
  }
};
//【旧】  '6551368', '6551369', '6551370', '6551371', '6551405', '6551406', '6551407', '6551372', '6551401', '6551400',
// '6551373', '6551374', '6551375', '6551376', '6551377', '6551378', '6551379', '6551380', '6551381', '6551382',
 // '6551383', '6551384', '6551385', '6551387', '6551386','6551404'
//update by fqf 20250710
//奖池数据   顺序不要搞乱，按顺序替换
const LPC_SortedKeys = [
  '6643185', '6643186', '6643187', '6643188', '6643190','6643191', '6643192', '6643193', '6643194', '6643195',
  '6643196', '6643197', '6643198', '6643199', '6643200','6643201', '6643202', '6643203', '6643204', '6643221',
  '6645352', '6645353', '6645354', '6645355', '6645356'
];

/* 20250710 */
const lotteryPackagesConf = {
  '6643185': { name: '冰糖葫芦杰西', pic: 'jackpot/001.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643186': { name: '麻婆豆腐科莱特', pic: 'jackpot/002.png', picGD: 'goods/001.png', sp: 0, xx: 0 },
  '6643187': { name: '葡萄甜心杰西', pic: 'jackpot/003.png', picGD: 'goods/001.png', sp: 0, xx: 0 },
  '6643188': { name: '变态辣科莱特', pic: 'jackpot/004.png', picGD: 'goods/001.png', sp: 0, xx: 0 },
  '6643190': { name: '麦霸曼迪', pic: 'jackpot/005.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643191': { name: '暗黑切斯特', pic: 'jackpot/006.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643192': { name: '野猫里昂', pic: 'jackpot/007.png', picGD: 'goods/001.png', sp: 0, xx: 0 },
  '6643193': { name: '巡检阿尔缇', pic: 'jackpot/008.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643194': { name: '热血史魁克', pic: 'jackpot/009.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643195': { name: '青藤贝尔', pic: 'jackpot/010.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643196': { name: '少女艾魅', pic: 'jackpot/011.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643197': { name: '粉红兔格罗姆', pic: 'jackpot/012.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643198': { name: '劲辣麦克', pic: 'jackpot/013.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643199': { name: '柴犬妮塔', pic: 'jackpot/014.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643200': { name: '1000金币', pic: 'jackpot/015.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6646232': { name: '100金币', pic: 'jackpot/026.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643201': { name: '200金币', pic: 'jackpot/016.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643202': { name: '40金币', pic: 'jackpot/017.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6646229': { name: '10金币', pic: 'jackpot/017.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643203': { name: '100战力能量', pic: 'jackpot/018.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643204': { name: '480战力能量', pic: 'jackpot/019.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6643221': { name: '20战力能量', pic: 'jackpot/020.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6645352': { name: '美味碎片*1', pic: 'jackpot/021.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6645353': { name: '美味碎片*5', pic: 'jackpot/022.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6645354': { name: '美味碎片*10', pic: 'jackpot/023.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6645355': { name: '美味碎片*20', pic: 'jackpot/024.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
  '6645356': { name: '美味碎片*50', pic: 'jackpot/025.png', picGD: 'goods/001.png', sp: 1, xx: 0 },
};


//保底部分
const lotteryPackagesSpConf = {
  '6643185': {
    name: '冰糖葫芦杰西',
    pic: 'jackpot/001.png',
    picGD: 'goods/001.png',
    sp: 1,
    pkgId: '29001378'
  }, '6643186': {
    name: '麻婆豆腐科莱特',
    pic: 'jackpot/002.png',
    picGD: 'goods/002.png',
    sp: 1,
    xx: 1,
    pkgId: '29001379'
  }, '6643187': {
    name: '葡萄甜心杰西',
    pic: 'jackpot/003.png',
    picGD: 'goods/003.png',
    sp: 1,
    pkgId: '29001380'
  }, '6643188': {
    name: '变态辣科莱特',
    pic: 'jackpot/023.png',
    picGD: 'goods/003.png',
    sp: 1,
    pkgId: '29001382'
  }, '6643190': {
    name: '麦霸曼迪',
    pic: 'jackpot/024.png',
    picGD: 'goods/024.png',
    sp: 1,
    pkgId: '29001383'
  }, '6643191': {
    name: '暗黑切斯特',
    pic: 'jackpot/025.png',
    picGD: 'goods/025.png',
    sp: 1,
    pkgId: '29001383'
  }, '6643192': {
    name: '野猫里昂',
    pic: 'jackpot/020.png',
    picGD: 'goods/020.png',
    sp: 1,
    pkgId: '29001384'
  }
};


const remToPx = (rem) => {
  let html = document.documentElement;
  let fontSize = (html.clientWidth / 1920) * 100;
  if (!fontSize) return rem;
  // console.log( '转换',rem,(rem * fontSize) / 100);
  return (rem * fontSize) / 100;
};
const getImgPath = (imgName) => {
  const img = require(`src/app/images/${imgName}`).default;
  return img;
};
const getLocalPath = async (imgName) => {
  try {
    if (GameletAPI.getRuntimeEnv() == "PxIDE") {
      return getImgPath(imgName);
    }
    const path = await pluginsForActivityCenter.getArchivePath();
    console.warn(`get local path------->${path}`)
    const img = require(`src/app/images/${imgName}`).default;
    console.warn(`get local img------->${img}`)
    console.warn(`get local final src------->${path}/${img.replace('../../../', '')}`)
    return `${path}/${img.replace('../../../', '')}`;
  }
  catch (e) {
    console.error(`get local path------->${JSON.stringify(e)}`)
  }
};
const getBtnFrames = () => {
  let frames = [];
  for (let i = 1; i < 19; i++) {
    frames.push(getImgPath(`frames/${i}.png`));
  }
  return frames;
};

const onBtnClickDown = (e) => {
  if (!e) return;
  let target = e.target || e;
  target.classList.add('press')
};
const onBtnClickUp = (e) => {
  if (!e) return;
  let target = e.target || e;
  target.classList.add('normal')
};
const timeTest = (tag, startTime) => {
  let nowTime = (new Date()).getTime();
  console.log(`${tag}加载花费[5802]：${nowTime - startTime}`)
}
export {
  closeApp,
  reportParams,
  reportStats,
  sortedKeys,
  taskPackagesConf,
  LPC_SortedKeys,
  lotteryPackagesConf,
  lotteryPackagesSpConf,
  remToPx,
  getImgPath,
  getLocalPath,
  getBtnFrames,
  onBtnClickDown,
  onBtnClickUp,
  timeTest
};
