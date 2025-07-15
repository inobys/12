
import { Faas, context } from 'faas-lib/faas-proxy'; 
import { GameletAPI } from 'gamelet-pixui-frame';
import { memo } from 'lib/preact/compat/src';
import { useEffect, useRef } from 'preact/hooks';
import { lotteryPackagesConf, getImgPath, remToPx } from 'src/app/util'
import BorderText from './borderText';

// 奖励一览弹窗
const ForeAnimation = memo(({isPlay = false}) => {
    const craftRef1 = useRef();
    const craftRef2 = useRef();
    let foreAnimationId = 0;
    useEffect(() => {
        const $craft1 = craftRef1.current;
        const $craft2 = craftRef2.current;
        const play = (dom1, dom2) => {
            const d1 = 3600;
            const d2 = 3200;
            const y1 = remToPx(35);
            const y2 = remToPx(25);
            const x1 = remToPx(-5);
            const x2 = remToPx(5);
            const x3 = remToPx(5);
            const x4 = remToPx(-5);
            const st = (new Date()).getTime();
            const easeY = x =>  -( Math.cos( Math.PI * x ) - 1 ) / 2;
            const run = () => {
                const time = (new Date()).getTime();
                const t1 = (time - st) % d1
                const moveY1 = t1 < d1 / 2 ? y1 * easeY(t1 / (d1 / 2)) : y1 * (1 - easeY((t1 - d1 / 2) / (d1 / 2)));
                const moveX1 = t1 < d1 * 0.25 ? x1 * t1 / (d1 * 0.25) :
                    (t1 >= d1 * 0.25 && t1 < d1 * 0.5) ? x1 * (1 - (t1 - d1 * 0.25) / (d1 * 0.25)) :
                        (t1 >= d1 * 0.5 && t1 < d1 * 0.75) ? x2 * (t1 - d1 * 0.5) / (d1 * 0.25) :
                            x2 * (1 - (t1 - d1 * 0.75) / (d1 * 0.25));
                const t2 = (time - st) % d2
                const moveY2 = t2 < d2 / 2 ? y2 * easeY(t2 / (d2 / 2)) : y2 * (1 - easeY((t2 - d2 / 2) / (d2 / 2)));
                const moveX2 = t2 < d2 * 0.25 ? x3 * t2 / (d2 * 0.25) :
                    (t2 >= d2 * 0.25 && t2 < d2 * 0.5) ? x3 * (1 - (t2 - d2 * 0.25) / (d2 * 0.25)) :
                        (t2 >= d2 * 0.5 && t2 < d2 * 0.75) ? x4 * (t2 - d2 * 0.5) / (d2 * 0.25) :
                            x4 * (1 - (t2 - d2 * 0.75) / (d2 * 0.25));
                dom1.style.transform = `translateX(${moveX1.toFixed(2)}px) translateY(${-moveY1.toFixed(2)}px) rotate(${(0.8*moveX1/x1).toFixed(2)}deg)`;
                dom2.style.transform = `translateX(${moveX2.toFixed(2)}px) translateY(${-moveY2.toFixed(2)}px) rotate(${(0.6*moveX2/x2).toFixed(2)}deg`;
                foreAnimationId = requestAnimationFrame(run);
            };
            run();
        };
        const stop = (dom1, dom2) => {
            dom1.style.transform = `translateX(0px) translateY(0px)`;
            dom2.style.transform = `translateX(0px) translateY(0px)`;
        };
        cancelAnimationFrame(foreAnimationId);
        console.log('foreAnimation isPlay', isPlay);
        if ($craft1 && $craft2) {
            if (isPlay) {
                play($craft1, $craft2);
            } else {
                stop($craft1, $craft2);
            }
        }
        return () => {
            cancelAnimationFrame(foreAnimationId);
        };
        
    }, [craftRef1.current, craftRef2.current, isPlay]);
    return (
        <div className="fore">
            {/*<div className="fore-craft1" ref={craftRef1}></div>*/}
            {/*<div className="fore-craft2" ref={craftRef2}></div>*/}
            {/*<div className="fore-tit"></div>*/}
            {/*<div className="fore-cov"></div>*/}
            {/*<div className="fore-lb1"></div>*/}
            {/*<div className="fore-lb2"></div>*/}
            {/*<div className="fore-lb3"></div>*/}
            {/*人物*/}
            <div className="fore-craft1" ref={craftRef1} style={{backgroundImage: `url(${getImgPath('fore_craft.png')})`}}></div>
        </div>
    )
});


export default ForeAnimation;