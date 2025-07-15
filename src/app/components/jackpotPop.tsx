
import { create } from 'domain';
import { Faas, context } from 'faas-lib/faas-proxy';
import { GameletAPI } from 'gamelet-pixui-frame';
import { memo } from 'lib/preact/compat/src';
import { useEffect, useState, useRef, useImperativeHandle } from 'preact/hooks';
import { createRef } from 'preact';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { lotteryPackagesConf, lotteryPackagesSpConf, getImgPath, remToPx } from 'src/app/util';
import { setTimeout } from 'timers';
const RotateCol = memo(({ list, index, col, duration, callback, onRef }) => {
    const listRef = useRef<any>(null);
    const itemRef = useRef<any[]>([]);
    const goodsDom = list.map((g, q) => {
        const itemRefInstance = useRef(null); // 使用 useRef 创建 ref 实例
        itemRef.current.push(itemRefInstance);
        return (<div className={`rotate-goods ${g.sp == 1 ? (g.xx == 1 ? 'x xx' : 'x') : ''} ${g.picNotHaveBg ? g.picNotHaveBg : ''}`} ref={itemRefInstance}>
            {/* <img src={getImgPath(g.picGD)} /> */}
            <div className={`icon icon_${g.id}`}></div>
            <div className="bg"></div>
            <div className="bg-on"></div>
            <text className="hide">{g.name}</text>
        </div>);
    });
    // const goodsDom = ''
    let animationFrameId = 0;
    let timerId: any = null;
    let len = list.length / 2;
    let playing = false;
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
                t += 40;
                // timerId = setTimeout(go,40);
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
        let currMove = 0;
        let targetMove = (index - 1) * pH + (3 + Number(col)) * aH;
        let d = duration;
        let ease = (x) => 1 - Math.pow(1 - x, 3);
        const st = (new Date()).getTime();
        const go = () => {
            // currMove = targetMove * ease(t / d);
            let t = (new Date()).getTime() - st;
            currMove = targetMove * ease(((t > d) ? d : t) / d);
            const move = currMove % aH;
            listRef.current.style.transform = `translateY(${-move}px)`;
            if (t <= d) {
                t += 40;
                // timerId = setTimeout(go,40);
                animationFrameId = requestAnimationFrame(go);
            } else {
                // wrap?.children[index].classList.add('on');
                cancelAnimationFrame(animationFrameId);
                bounce(index);
            }
        };
        go();
    };
    const clear = () => {
        console.log('clear clear')
        cancelAnimationFrame(animationFrameId);
        listRef.current.style.transform = `translateY(0px)`;
        itemRef.current.forEach((dom) => {
            dom && dom.current.classList.remove('on');
        });
    };
    useImperativeHandle(onRef, () => {
        return {
            play,
            clear
        };
    })
    useEffect(() => {
        return () => {
            clear();
            // window.cancelAnimationFrame(animationFrameId);
        };
    }, []);
    return (<div className={`rotate-box-col col${col}`}>
        <div className="rotate-goods-list" ref={listRef}>{goodsDom}</div>
    </div>);
});

function shuffleArrayWithIds(arr, specifiedIds) {
    const specifiedItems = specifiedIds.map(id => arr.find(item => item.id == id));
    // 移除指定 id 的项
    const newArray = arr.filter(item => !specifiedIds.includes(+item.id));
    // 打乱数组
    newArray.sort(() => Math.random() - 0.5);
    // 将指定 id 对应的项插入到新数组的特定位置
    specifiedItems.forEach((item, index) => {
        if (index === 0) {
            newArray.splice(1, 0, item); // 在新数组的第二个位置插入第一个指定 id 的项
        } else if (index === 1) {
            newArray.splice(4, 0, item); // 在新数组的第五个位置插入第二个指定 id 的项
        }
    });
    return newArray;
}

// 奖励一览弹窗
const RotateBox = memo(({ result, isPlay = false, onPLay = () => { }, callback }) => {
    const rotateColRef: any[] = [];
    const type = result.length == 5 ? 2 : 1;
    let disableArray = Array(5).fill(false);
    if (type == 1) {
        disableArray = Array(5).fill(true);
        disableArray[2] = false;
    }
    let rotateCallCount = 0;
    let rotateCallBack = () => {
        if (++rotateCallCount >= (type == 1 ? 1 : 5)) {
            setTimeout(() => {
                callback(result.map(r => lotteryPackagesConf[r.iPackageId]));
                rotateColRef.forEach(r => {
                    r.current.clear();
                });
            }, 500);
        }
    };
    const list = Object.keys(lotteryPackagesConf).map(k => {
        return { ...lotteryPackagesConf[k], id: k };
    });
    
    const listCol = [list, list, list, list, list]; 

     //孤胆玩家柯尔特  无畏玩家雪莉 热血玩家柯尔特  爆裂玩家雪莉  霓虹骇客莫提斯  旧：5848221,5848220,5848219,5848218,5848257
    const listDefault = [6551371,6551370,6551369,6551368,6551407];//默认展示在中间的道具icon   update by fqf 202506
    const listDom = listCol.map((col, idx) => {
        const slist = [...col];
        let rList = [];
        let defaultId = listDefault[idx];
        if (isPlay && result.length) {
            const res = result[type == 1 ? 0 : idx];
            if (lotteryPackagesSpConf[res.iPackageId]) res.iPackageId = lotteryPackagesSpConf[res.iPackageId].pkgId;
            if (res.iPackageId == defaultId) {
                defaultId = 6551373;//当抽中默认展示的道具时，默认展示的道具icon改成镖客柯尔特  旧：恶女艾魅【5848223】      update by fqf 202506
            }
            rList = shuffleArrayWithIds(slist, [defaultId, +res.iPackageId]);
        } else {
            rList = shuffleArrayWithIds(slist, [defaultId]);
        }
        rotateColRef[idx] = createRef();

        // 如果为空默认展示一个最差的 list.length-5
        return (<RotateCol list={[...rList, ...rList]}
            index={4}
            col={idx + 1}
            callback={rotateCallBack}
            onRef={(ref) => {
                rotateColRef[idx].current = ref;
                if (isPlay && !disableArray[idx]) {
                    setTimeout(() => {
                        ref.play();
                    }, 400);
                }
            }}
            duration={type == 1 ? 2400 : (idx + 1) * 800}
        />);
    });
    useEffect(() => {
        if (isPlay) {
            onPLay();
        }
    }, [isPlay]);
    return (<div className="dwBackLottery5802-rotate" style={{ opacity: isPlay ? 1 : 0, zIndex: isPlay ? 10 : -1 }}>
        <div className="rotate-box">
            {listDom}
        </div>
        <div className={`rotate-type ${type == 1 ? 'x1' : 'x5'}`}></div>
    </div>);
});


export default RotateBox;