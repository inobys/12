import { create } from 'domain';
import { Faas, context } from 'faas-lib/faas-proxy';
import { GameletAPI } from 'gamelet-pixui-frame';
import { memo } from 'lib/preact/compat/src';
import { useEffect, useRef, useImperativeHandle } from 'preact/hooks';
import { createRef } from 'preact';
import { lotteryPackagesConf, lotteryPackagesSpConf, remToPx } from 'src/app/util';
import { setTimeout } from 'timers';

// 单个列组件：严格控制高度和间距
const RotateCol = memo(({ topList, bottomList, col, duration, callback, onRef, isSingleDraw = false }) => {
  const listRef = useRef<any>(null);
  const itemRef = useRef<any[]>([]);

  const itemHeight = remToPx(275); 
  const gap = remToPx(15);
  const containerHeight = itemHeight * 2 + gap;

  const topGoodsDom = topList.map((g, q) => {
    const itemRefInstance = useRef(null);
    itemRef.current.push(itemRefInstance);
    return (
      <div 
        key={q}
        className={`rotate-goods ${(g.sp && g.sp == 1) ? ((g.xx && g.xx == 1) ? 'x xx' : 'x') : ''} ${g.picNotHaveBg ? g.picNotHaveBg : ''}`} 
        ref={itemRefInstance}
        style={{ 
          height: itemHeight, 
          marginBottom: q === 0 ? gap : 0 
        }}
      >
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
      <div 
        key={q}
        className={`rotate-goods ${(g.sp && g.sp == 1) ? ((g.xx && g.xx == 1) ? 'x xx' : 'x') : ''} ${g.picNotHaveBg ? g.picNotHaveBg : ''}`} 
        ref={itemRefInstance}
        style={{ height: itemHeight }}
      >
        <div className={`icon icon_${g.id}`}></div>
        <div className="bg"></div>
        <div className="bg-on"></div>
      </div>
    );
  });

  let animationFrameId = 0;
  let playing = false;
  const aH = containerHeight; 

  const bounce = () => {
    const topDom = itemRef.current[0]?.current;
    const bottomDom = itemRef.current[1]?.current;
    if (!topDom || !bottomDom) return;

    const st = (new Date()).getTime();
    const d = 300; 
    const ease = (x) => 1 + 2.70158 * Math.pow(x - 1, 3) + 1.70158 * Math.pow(x - 1, 2);

    const animate = () => {
      const t = (new Date()).getTime() - st;
      const sc = 0.75 + 0.27 * ease(((t > d) ? d : t) / d);
      
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

    const targetMove = isSingleDraw ? (3 + 2) * aH : (3 + Number(col)) * aH;
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
        bounce();
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

  useEffect(() => {
    return () => clear();
  }, []);

  return (
    <div className={`rotate-box-col col${col} ${isSingleDraw && col !== 2 ? 'hidden' : ''}`} style={{ width: isSingleDraw ? '100%' : '20%' }}>
      <div 
        className="rotate-goods-list" 
        ref={listRef}
        style={{ 
          height: containerHeight, 
          overflow: 'hidden', 
          position: 'relative' 
        }}
      >
        {topGoodsDom}
        {bottomGoodsDom}
      </div>
    </div>
  );
});

function shuffleArrayWithIds(arr, specifiedIds) {
  const specifiedItems = specifiedIds.map(id => arr.find(item => item.id == id)).filter(Boolean);
  const newArray = arr.filter(item => !specifiedIds.includes(+item.id));
  newArray.sort(() => Math.random() - 0.5);

  specifiedItems.forEach((item, index) => {
    if (index === 0) {
      newArray.splice(1, 0, item);
    } else if (index === 1) {
      newArray.splice(4, 0, item);
    }
  });
  return newArray;
}

const RotateBox = memo(({ result, isPlay = false, onPLay = () => { }, callback }) => {
  const type = result.length >= 10 ? 2 : 1;
  const totalCols = 5; 
  const rotateColRef: any[] = Array(totalCols).fill(null).map(() => createRef());
  let rotateCallCount = 0;

  const rotateCallBack = () => {
    if (++rotateCallCount >= (type === 1 ? 1 : totalCols)) {
      setTimeout(() => {
        // callback(result.map(r => lotteryPackagesConf[r.iPackageId]));
        // rotateColRef.forEach(r => r.current?.clear());
      }, 500);
    }
  };

  const baseList = Object.keys(lotteryPackagesConf).map(k => ({
    ...lotteryPackagesConf[k],
    id: k
  }));

  const defaultIds = [
    [6643185, 6643191], 
    [6643186, 6643192], 
    [6643187, 6643193], 
    [6643188, 6643194], 
    [6643190, 6643195]  
  ];

  const listDom = defaultIds.map(([topDefId, bottomDefId], colIndex) => {
    const slist = [...baseList];
    let topList = [];
    let bottomList = [];
    
    const isSingleDrawMode = type === 1;
    const isMiddleColumn = colIndex === 4;
    
    if (isPlay && result.length) {
      if (isSingleDrawMode) {
        if (isMiddleColumn) {
          const topRes = result[0];
          if (lotteryPackagesSpConf[topRes.iPackageId]) {
            topRes.iPackageId = lotteryPackagesSpConf[topRes.iPackageId].pkgId;
          }
          const actualTopId = topRes.iPackageId === topDefId ? 6643185 : topDefId;
          topList = shuffleArrayWithIds(slist, [actualTopId, +topRes.iPackageId]);

          bottomList = shuffleArrayWithIds(slist, [actualTopId, +topRes.iPackageId]);
        } else {
          topList = shuffleArrayWithIds(slist, [topDefId]);
          bottomList = shuffleArrayWithIds(slist, [bottomDefId]);
        }
      } else {
        const topRes = result[colIndex];
        if (lotteryPackagesSpConf[topRes.iPackageId]) {
          topRes.iPackageId = lotteryPackagesSpConf[topRes.iPackageId].pkgId;
        }
        const actualTopId = topRes.iPackageId === topDefId ? 6643185 : topDefId;
        topList = shuffleArrayWithIds(slist, [actualTopId, +topRes.iPackageId]);

        const bottomRes = result[colIndex + 5];
        if (lotteryPackagesSpConf[bottomRes.iPackageId]) {
          bottomRes.iPackageId = lotteryPackagesSpConf[bottomRes.iPackageId].pkgId;
        }
        const actualBottomId = bottomRes.iPackageId === bottomDefId ? 6643185 : bottomDefId;
        bottomList = shuffleArrayWithIds(slist, [actualBottomId, +bottomRes.iPackageId]);
      }
    } else {
      topList = shuffleArrayWithIds(slist, [topDefId]);
      bottomList = shuffleArrayWithIds(slist, [bottomDefId]);
    }

    return (
      <RotateCol
        key={`col${colIndex + 1}`} 
        topList={topList}
        bottomList={bottomList}
        col={colIndex + 1}
        callback={rotateCallBack}
        onRef={(ref) => {
          rotateColRef[colIndex].current = ref;
          if (isPlay) {
            if (isSingleDrawMode && isMiddleColumn) {
              ref.play();
            } else if (!isSingleDrawMode) {
              const delay = colIndex * 300;
              setTimeout(() => ref.play(), delay);
            }
          }
        }}
        duration={1500}
        isSingleDraw={isSingleDrawMode}
      />
    );
  });

  useEffect(() => {
    if (isPlay) {
      onPLay();
      rotateCallCount = 0;
    }
  }, [isPlay]);

  return (
    <div className="dwBackLottery5802-rotate" style={{ opacity: isPlay ? 1 : 0, zIndex: isPlay ? 10 : -1 }}>
      <div className="rotate-box" style={type === 1 ? { justifyContent: 'center' } : {}}>
        {listDom}
      </div>
      <div className={`rotate-type ${type === 1 ? 'x1' : 'x10'}`}></div>
    </div>
  );
});

export default RotateBox;