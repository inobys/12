
import { Faas, context } from 'faas-lib/faas-proxy'; 
import { GameletAPI } from 'gamelet-pixui-frame';
import { memo } from 'lib/preact/compat/src';
import { useEffect, useState } from 'preact/hooks';
import { getImgPath } from 'src/app/util'

// 奖励一览弹窗
const RewardPop = memo(({ close, packages = [] }) => {
    const goodsList = packages.map(pkg => {
        return (<div className={`resbox-goods-item${pkg.sp == 1 ? ' x' : ''}`}>
            <img src={getImgPath(pkg.pic)} />
        </div>)
    });
    const needMail = !(packages.length == 1 && packages[0].name.indexOf('电玩券') > -1) && packages.every(g => g.name != '飞行器钥匙');

    return (<div className="dwBackLottery5802-modal">
        <div class="dwBackLottery5802-pop">
            <div className="pop-head">
                <div className="ptit ptit2"></div>
                <div className="pclose" onClick={close}></div>
            </div>
            <div className="pop-cont">
                <div className="resbox">
                    {needMail ? (
                        <div className="resbox-top">
                            <div className="icon-inbox"></div>
                            <div className="resbox-txt">
                                <text>奖励已发送至收件箱</text>
                                <text className="x">
                                    邮件上限400封，请及时领取以免失效
                                </text>
                            </div>
                        </div>
                    ) : (
                        <div className="resbox-top">
                            <div className="resbox-txt">
                                <text>奖励已发放</text>
                            </div>
                        </div>
                    )}
                    <div className="resbox-goods">
                        {goodsList}
                    </div>
                </div>
            </div>
        </div>
        <div className="dwBackLottery5802-mask" onClick={close}></div>
    </div>);
});


export default RewardPop;