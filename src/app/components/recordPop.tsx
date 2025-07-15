
import { Faas, context } from 'faas-lib/faas-proxy'; 
import { GameletAPI } from 'gamelet-pixui-frame';
import { memo } from 'lib/preact/compat/src';
import { useEffect, useState } from 'preact/hooks';
import { taskPackagesConf, getImgPath } from 'src/app/util'

// 奖励一览弹窗
const RecordPop = memo(({ close, showToastTips, showLoading, hideLoading }) => {
    const [pageIndex, setPageIndex] = useState(1);
    const [pageNum, setPageNum] = useState(1);
    const [recordList, setRecordList] = useState<any[]>([]);
    const [recordIsDown, setRecordIsDown] = useState(false);
    const [isInit, setInit] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const getRecord = async () => {
        if (pageIndex > pageNum) {
            setRecordIsDown(true);
            return;
        }
        if (isLoading) return;
        setLoading(true);
        try {
            const res = await Faas.GetRecord7628_684489({
                page: pageIndex
            });
            console.log('抽奖记录', res)
            if (res.ret != 0) throw res;
            setRecordList(prev => prev.concat(res.jData.giftList));
            setPageIndex(prev => prev + 1);
            setPageNum(Math.ceil(res.jData.total / 20));
            setInit(true);
        } catch (error) {
            showToastTips((error as { sMsg: string }).sMsg || "很抱歉，系统繁忙，请稍后重试~");
            close();
            console.error('GetRecord err: ', error);
        }
        setLoading(false);
    };
    useEffect(() => {
        getRecord();
    }, []);
    return (
        <div className="dwBackLottery5802-modal">
            <div className="dwBackLottery5802-pop">
                <div className="pop-head">
                    <div className="ptit ptit2"></div>
                    <div className="pclose" onClick={close}></div>
                </div>
                <div className="pop-cont">
                    <div className="record">
                        {recordList.length == 0 && !isInit ? (
                            <div className="record-empty">加载中...</div>
                        ) : recordList.length == 0 && isInit ? (
                            <div className="record-empty">暂无获奖记录</div>
                        ) : (
                            <div className="record-wrapper" >
                                {recordList.map((item: any) => (
                                    <div className="record-item" key={item.id}>
                                        <div className="record-time">
                                            <text>{item.dtGetPackageTime.replace('2025-', '')}</text>
                                        </div>
                                        <div className="record-name">
                                            <text>-获得：{item.sPackageName}</text>
                                        </div>
                                    </div>
                                ))}
                                {recordList.length >= 20 && <div className="load-more" onClick={() => getRecord()}>{recordIsDown ? '没有更多了' : '点击加载更多'}</div>}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="dwBackLottery5802-mask" onClick={close}></div>
        </div>
    )
});


export default RecordPop;