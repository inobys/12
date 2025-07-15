

import { create } from 'domain';
import { Faas, context } from 'faas-lib/faas-proxy';
import { GameletAPI } from 'gamelet-pixui-frame';
import { memo } from 'lib/preact/compat/src';
import { useEffect, useRef, useImperativeHandle } from 'preact/hooks';
import { createRef } from 'preact';
import { lotteryPackagesConf, lotteryPackagesSpConf, remToPx } from 'src/app/util';
import { setTimeout } from 'timers';

// 单抽专用列动画组件
const SingleRotateCol = memo(({ list, index, col, duration, callback, onRef }) => {
    const listRef = useRef<any>(null);
    const itemRef = useRef<any[]>([]);
    const goodsDom = list.map((g, q) => {
        const itemRefInstance = useRef(null);
        itemRef.current.push(itemRefInstance);
        return (
            <div className={`rotate-goods ${g.sp == 1 ? (g.xx == 1 ? 'x xx' : 'x') : ''} ${g.picNotHaveBg ? g.picNotHaveBg : ''}`} ref={itemRefInstance}>
                <div className={`icon icon_${g.id}`}></div>
                <div className="bg"></div>
                <div className="bg-on"></div>
                <text className="hide">{g.name}</text>
            </div>
        );
    });
    let animationFrameId = 0;
    let playing = false;
    let len = list.length / 2;
    const pH = remToPx(275);
    const aH = pH * len;
    const bounce = (idx) => {
        if (idx < 2) idx = idx + len;
        const currDom = itemRef.current[idx].current;
        const st = (new Date()).getTime();
        let d = 200;
        let ease = (x) => 1 + 2.70158 * Math.pow(x - 1, 3) + 1.70158 * Math.pow(x - 1, 2);
        const go = () => {
            let t = (new Date()).getTime() - st;
            const sc = 0.75 + 0.27 * ease(((t > d) ? d : t) / d);
            currDom.style.transform = `scale(${sc})`;
            if (t <= d) {
                animationFrameId = requestAnimationFrame(go);
            } else {
                cancelAnimationFrame(animationFrameId);
                callback();
                playing = false;
            }
        }
        currDom.classList.add('on');
        go();
    };
    const play = () => {
        if (playing) return;
        playing = true;
        let currMove = 0;
        // 单抽动画：targetMove 固定为 (index - 1) * pH + 3 * aH
        let targetMove = (index - 1) * pH + 3 * aH;
        let d = duration;
        let ease = (x) => 1 - Math.pow(1 - x, 3);
        const st = (new Date()).getTime();
        const go = () => {
            let t = (new Date()).getTime() - st;
            currMove = targetMove * ease(((t > d) ? d : t) / d);
            const move = currMove % aH;
            listRef.current.style.transform = `translateY(${-move}px)`;
            if (t <= d) {
                animationFrameId = requestAnimationFrame(go);
            } else {
                cancelAnimationFrame(animationFrameId);
                bounce(index);
            }
        };
        go();
    };
    const clear = () => {
        cancelAnimationFrame(animationFrameId);
        listRef.current.style.transform = `translateY(0px)`;
        itemRef.current.forEach((dom) => {
            dom && dom.current.classList.remove('on');
        });
    };
    useImperativeHandle(onRef, () => ({ play, clear }));
    useEffect(() => () => clear(), []);
    return (
        <div className={`rotate-box-col col${col}`}>
            <div className="rotate-goods-list" ref={listRef}>{goodsDom}</div>
        </div>
    );
});

// 十抽专用列动画组件
const TenRotateCol = memo(({ topList, bottomList, col, duration, callback, onRef, isSingleDraw }) => {
    const listRef = useRef<any>(null);
    const itemRef = useRef<any[]>([]);
    const itemHeight = remToPx(275);
    const gap = remToPx(15);
    const containerHeight = itemHeight * 2 + gap;
    const topGoodsDom = topList.map((g, q) => {
        const itemRefInstance = useRef(null);
        itemRef.current.push(itemRefInstance);
        return (
            <div key={q} className={`rotate-goods ${(g.sp && g.sp == 1) ? ((g.xx && g.xx == 1) ? 'x xx' : 'x') : ''} ${g.picNotHaveBg ? g.picNotHaveBg : ''}`} ref={itemRefInstance} style={{ height: itemHeight, marginBottom: q === 0 ? gap : 0 }}>
                <div className={`icon icon_${g.id}`}></div>
                <div className="bg"></div>
                <div className="bg-on"></div>
            </div>
        );
    });
    const bottomGoodsDom = bottomList.map((g, q) => {
        const itemRefInstance = useRef(null);
        itemRef.current.push(itemRefInstance);
        return (
            <div key={q} className={`rotate-goods ${(g.sp && g.sp == 1) ? ((g.xx && g.xx == 1) ? 'x xx' : 'x') : ''} ${g.picNotHaveBg ? g.picNotHaveBg : ''}`} ref={itemRefInstance} style={{ height: itemHeight }}>
                <div className={`icon icon_${g.id}`}></div>
                <div className="bg"></div>
                <div className="bg-on"></div>
            </div>
        );
    });
    let animationFrameId = 0;
    let playing = false;
    const aH = containerHeight;
    const bounce = (idx) => {
        const topDom = itemRef.current[0]?.current;
        const bottomDom = itemRef.current[1]?.current;
        if (!topDom || !bottomDom) return;
        const st = (new Date()).getTime();
        const d = 200;
        const ease = (x) => 1 + 2.70158 * Math.pow(x - 1, 3) + 1.70158 * Math.pow(x - 1, 2);
        const animate = () => {
            const t = (new Date()).getTime() - st;
            const progress = ((t > d) ? d : t) / d;
            const sc = 0.75 + 0.27 * ease(progress);
            topDom.style.transform = `scale(${sc})`;
            bottomDom.style.transform = `scale(${sc})`;
            if (t <= d) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                cancelAnimationFrame(animationFrameId);
                topDom.style.transform = 'scale(1)';
                bottomDom.style.transform = 'scale(1)';
                callback();
                playing = false;
            }
        };
        topDom.classList.add('on');
        bottomDom.classList.add('on');
        animate();
    };
    const play = () => {
        if (playing) return;
        playing = true;
        const targetMove = (3 + Number(col)) * aH;
        const d = duration;
        const ease = (x) => 1 - Math.pow(1 - x, 3);
        const st = (new Date()).getTime();
        const go = () => {
            const t = (new Date()).getTime() - st;
            const progress = ((t > d) ? d : t) / d;
            const currMove = targetMove * ease(progress);
            const move = currMove % aH;
            listRef.current.style.transform = `translateY(${-move}px)`;
            if (t <= d) {
                animationFrameId = requestAnimationFrame(go);
            } else {
                cancelAnimationFrame(animationFrameId);
                bounce(col);
            }
        };
        go();
    };
    const clear = () => {
        cancelAnimationFrame(animationFrameId);
        listRef.current.style.transform = `translateY(0px)`;
        itemRef.current.forEach((dom) => {
            if (dom?.current) dom.current.classList.remove('on');
        });
        playing = false;
    };
    useImperativeHandle(onRef, () => ({ play, clear }));
    useEffect(() => { return () => clear(); }, []);
    return (
        <div className={`rotate-box-col col${col} ${isSingleDraw && col !== 3 ? 'hidden' : ''}`} style={{ width: isSingleDraw ? '100%' : '20%' }}>
            <div className="rotate-goods-list" ref={listRef} style={{ overflow: 'hidden', position: 'relative' }}>
                {topGoodsDom}
                {bottomGoodsDom}
            </div>
        </div>
    );
});

// 数组打乱并插入指定元素
function shuffleArrayWithIds(arr, specifiedIds) {
    const specifiedItems = specifiedIds.map(id => arr.find(item => item.id == id)).filter(Boolean);
    const newArray = arr.filter(item => !specifiedIds.includes(+item.id));
    newArray.sort(() => Math.random() - 0.5);

    specifiedItems.forEach((item, index) => {
        if (index === 0) {
            newArray.splice(1, 0, item); // 第二个位置插入第一个指定元素
        } else if (index === 1) {
            newArray.splice(4, 0, item); // 第五个位置插入第二个指定元素
        }
    });
    return newArray;
}

// 单抽子组件
const SingleDrawBox = ({ result, isPlay, onPLay, callback }) => {
    const rotateColRef = Array(5).fill(null).map(() => createRef());
    let rotateCallCount = 0;
    // 使用你指定的listDefault
    const listDefault = [6643190, 6643195, 6643188, 6643194, 6643192];
    const singleDrawReplaceId = 6643188;
    const baseList = Object.keys(lotteryPackagesConf).map(k => ({ ...lotteryPackagesConf[k], id: k }));
    const rotateCallBack = () => {
        if (++rotateCallCount >= 1) {
            setTimeout(() => {
                // let safeResult = Array.isArray(result) ? result : [];
                // const mapped = safeResult.filter(r => r && r.iPackageId).map(r => lotteryPackagesConf[r.iPackageId]).filter(Boolean);
                // callback(mapped);
                // rotateColRef.forEach(r => { r.current && r.current.clear(); });
            }, 500);
        }
    };
    const listDom = listDefault.map((defaultId, idx) => {
        let rList;
        let col = idx + 1;
        if (idx === 2 && isPlay && result.length) {
            let res = result[0];
            if (lotteryPackagesSpConf[res.iPackageId]) res.iPackageId = lotteryPackagesSpConf[res.iPackageId].pkgId;
            let actualDefaultId = res.iPackageId == defaultId ? singleDrawReplaceId : defaultId;
            rList = shuffleArrayWithIds(baseList, [actualDefaultId, +res.iPackageId]);
        } else {
            rList = shuffleArrayWithIds(baseList, [defaultId]);
        }
        // 只中间列传递ref和动画，其余列不传ref不触发动画
        if (idx === 2) {
            rotateColRef[idx] = createRef();
            return (
                <SingleRotateCol
                    key={`col${col}`}
                    list={[...rList, ...rList]}
                    index={4}
                    col={col}
                    callback={rotateCallBack}
                    onRef={ref => {
                        rotateColRef[idx].current = ref;
                        if (isPlay) {
                            setTimeout(() => ref.play(), 400);
                        }
                    }}
                    duration={2400}
                />
            );
        } else {
            return (
                <SingleRotateCol
                    key={`col${col}`}
                    list={[...rList, ...rList]}
                    index={4}
                    col={col}
                    callback={() => { }}
                    onRef={undefined}
                    duration={2400}
                />
            );
        }
    });
    useEffect(() => { if (isPlay) { onPLay && onPLay(); rotateCallCount = 0; } }, [isPlay]);
    return (
        <div className="dwBackLottery5802-rotate" style={{ opacity: isPlay ? 1 : 0, zIndex: isPlay ? 10 : -1 }}>
            <div className="rotate-box">
                <div className="rotate-list">{listDom}</div>
            </div>
            <div className="rotate-type x1"></div>
        </div>
    );
};

// 十抽子组件（原十抽逻辑）
const TenDrawBox = ({ result, isPlay, onPLay, callback }) => {
    const rotateColRef = Array(5).fill(null).map(() => createRef());
    let rotateCallCount = 0;
    const tenDrawDefaultIds = [
        [6643185, 6643191],
        [6643186, 6643192],
        [6643187, 6643193],
        [6643188, 6643194],
        [6643190, 6643195]
    ];
    const baseList = Object.keys(lotteryPackagesConf).map(k => ({ ...lotteryPackagesConf[k], id: k }));
    const rotateCallBack = () => {
        if (++rotateCallCount >= 5) {
            setTimeout(() => {
                // let safeResult = Array.isArray(result) ? result : [];
                // const mapped = safeResult.filter(r => r && r.iPackageId).map(r => lotteryPackagesConf[r.iPackageId]).filter(Boolean);
                // callback(mapped);
                // rotateColRef.forEach(r => { r.current && r.current.clear(); });
            }, 500);
        }
    };
    const listDom = tenDrawDefaultIds.map(([topDefId, bottomDefId], colIndex) => {
        const col = colIndex + 1;
        let topList = [];
        let bottomList = [];
        if (isPlay && result.length) {
            const topRes = result[colIndex];
            if (topRes && topRes.iPackageId) {
                const actualTopPkgId = lotteryPackagesSpConf[topRes.iPackageId]
                    ? lotteryPackagesSpConf[topRes.iPackageId].pkgId
                    : topRes.iPackageId;
                const actualTopId = actualTopPkgId === topDefId ? 6643185 : topDefId;
                topList = shuffleArrayWithIds(baseList, [actualTopId, +actualTopPkgId]);
            } else {
                topList = shuffleArrayWithIds(baseList, [topDefId]);
            }

            const bottomRes = result[colIndex + 5];
            if (bottomRes && bottomRes.iPackageId) {
                const actualBottomPkgId = lotteryPackagesSpConf[bottomRes.iPackageId]
                    ? lotteryPackagesSpConf[bottomRes.iPackageId].pkgId
                    : bottomRes.iPackageId;
                const actualBottomId = actualBottomPkgId === bottomDefId ? 6643185 : bottomDefId;
                bottomList = shuffleArrayWithIds(baseList, [actualBottomId, +actualBottomPkgId]);
            } else {
                bottomList = shuffleArrayWithIds(baseList, [bottomDefId]);
            }
        } else {
            topList = shuffleArrayWithIds(baseList, [topDefId]);
            bottomList = shuffleArrayWithIds(baseList, [bottomDefId]);
        }
        rotateColRef[colIndex] = createRef();
        return (
            <TenRotateCol
                key={`col${col}`}
                topList={topList}
                bottomList={bottomList}
                col={col}
                callback={rotateCallBack}
                onRef={ref => {
                    rotateColRef[colIndex].current = ref;
                    if (isPlay) {
                        setTimeout(() => ref.play(), colIndex * 150);
                    }
                }}
                duration={1200}
                isSingleDraw={false}
            />
        );
    });
    useEffect(() => { if (isPlay) { onPLay && onPLay(); rotateCallCount = 0; } }, [isPlay]);
    return (
        <div className="dwBackLottery5802-rotate" style={{ opacity: isPlay ? 1 : 0, zIndex: isPlay ? 10 : -1 }}>
            <div className="rotate-box">
                <div className="rotate-list">
                    {listDom}
                </div>
            </div>
            <div className="rotate-type x10"></div>
        </div>
    );
};
// 主组件
const RotateBox = memo(({ result, isPlay = false, onPLay = () => { }, callback }) => {
    if (result.length === 1) {
        return <SingleDrawBox result={result} isPlay={isPlay} onPLay={onPLay} callback={callback} />;
    } else {
        return <TenDrawBox result={result} isPlay={isPlay} onPLay={onPLay} callback={callback} />;
    }
});

export default RotateBox;
