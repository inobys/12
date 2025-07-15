import { create } from 'domain';
import { Faas, context } from 'faas-lib/faas-proxy';
import { GameletAPI } from 'gamelet-pixui-frame';
import { memo } from 'lib/preact/compat/src';
import { useEffect, useRef, useImperativeHandle } from 'preact/hooks';
import { createRef } from 'preact';
import { lotteryPackagesConf, lotteryPackagesSpConf, remToPx } from 'src/app/util';
import { setTimeout } from 'timers';

// 单个列组件：兼容单抽（原始list模式）和十抽（上下行模式）
const RotateCol = memo(({ 
  list,  // 单抽用：完整列表
  topList, bottomList,  // 十抽用：上下行列表
  index,  // 单抽用：旋转目标索引
  col, 
  duration, 
  callback, 
  onRef, 
  isSingleDraw 
}) => {
  const listRef = useRef<any>(null);
  const itemRef = useRef<any[]>([]);

  // 单抽配置（原始逻辑）
  const pH = remToPx(275); // 单抽item高度
  const len = list?.length ? list.length / 2 : 0;
  const aH = pH * len; // 单抽总高度

  // 十抽配置（当前逻辑）
  const itemHeight = remToPx(275); // 十抽item高度
  const gap = remToPx(15);
  const containerHeight = itemHeight * 2 + gap; // 十抽总高度（含间隙）

  // 单抽：渲染完整列表（原始逻辑）
  const singleDrawDom = list?.map((g, q) => {
    const itemRefInstance = useRef(null);
    itemRef.current.push(itemRefInstance);
    return (
      <div 
        key={q}
        className={`rotate-goods ${(g.sp && g.sp == 1) ? ((g.xx && g.xx == 1) ? 'x xx' : 'x') : ''} ${g.picNotHaveBg ? g.picNotHaveBg : ''}`} 
        ref={itemRefInstance}
      >
        <div className={`icon icon_${g.id}`}></div>
        <div className="bg"></div>
        <div className="bg-on"></div>
      </div>
    );
  });

  // 十抽：渲染上下行列表（当前逻辑）
  const multiDrawDom = (() => {
    const tops = topList.map((g, q) => {
      const itemRefInstance = useRef(null);
      itemRef.current.push(itemRefInstance);
      return (
        <div 
          key={`top-${q}`}
          className={`rotate-goods ${(g.sp && g.sp == 1) ? ((g.xx && g.xx == 1) ? 'x xx' : 'x') : ''} ${g.picNotHaveBg ? g.picNotHaveBg : ''}`} 
          ref={itemRefInstance}
          style={{ height: itemHeight, marginBottom: gap }}
        >
          <div className={`icon icon_${g.id}`}></div>
          <div className="bg"></div>
          <div className="bg-on"></div>
        </div>
      );
    });
    const bottoms = bottomList.map((g, q) => {
      const itemRefInstance = useRef(null);
      itemRef.current.push(itemRefInstance);
      return (
        <div 
          key={`bottom-${q}`}
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
    return [...tops, ...bottoms];
  })();

  // 弹跳动画（区分单抽/十抽）
  const bounce = () => {
    if (isSingleDraw) {
      // 单抽弹跳逻辑（原始）
      let idx = index;
      if (idx < 2) idx = idx + len;
      const currDom = itemRef.current[idx].current;
      const st = (new Date()).getTime();
      const d = 200;
      const ease = (x) => 1 + 2.70158 * Math.pow(x - 1, 3) + 1.70158 * Math.pow(x - 1, 2);
      
      const go = () => {
        const t = (new Date()).getTime() - st;
        const sc = 0.75 + 0.27 * ease(((t > d) ? d : t) / d);
        currDom.style.transform = `scale(${sc})`;
        if (t <= d) {
          animationFrameId = requestAnimationFrame(go);
        } else {
          cancelAnimationFrame(animationFrameId);
          callback();
          playing = false;
        }
      };
      currDom.classList.add('on');
      go();
    } else {
      // 十抽弹跳逻辑（当前）
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
    }
  };

  // 旋转动画（区分单抽/十抽）
  let animationFrameId = 0;
  let playing = false;
  const play = () => {
    if (playing) return;
    playing = true;

    if (isSingleDraw) {
      // 单抽旋转逻辑（原始）
      const targetMove = (index - 1) * pH + (3 + Number(col)) * aH;
      const d = duration;
      const ease = (x) => 1 - Math.pow(1 - x, 3);
      const st = (new Date()).getTime();
      
      const go = () => {
        const t = (new Date()).getTime() - st;
        const currMove = targetMove * ease(((t > d) ? d : t) / d);
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
    } else {
      // 十抽旋转逻辑（当前）
      const targetMove = (3 + Number(col)) * containerHeight;
      const d = duration;
      const ease = (x) => 1 - Math.pow(1 - x, 3);
      const st = (new Date()).getTime();
      
      const go = () => {
        const t = (new Date()).getTime() - st;
        const progress = ((t > d) ? d : t) / d;
        const currMove = targetMove * ease(progress);
        const move = currMove % containerHeight;
        listRef.current.style.transform = `translateY(${-move}px)`;
        if (t <= d) {
          animationFrameId = requestAnimationFrame(go);
        } else {
          cancelAnimationFrame(animationFrameId);
          bounce();
        }
      };
      go();
    }
  };

  // 清除动画（统一处理）
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

  // 渲染（区分单抽/十抽）
  return (
    <div 
      className={`rotate-box-col col${col} ${isSingleDraw && col !== 3 ? 'hidden' : ''}`} 
      style={{ width: isSingleDraw ? '100%' : '20%' }}
    >
      <div 
        className="rotate-goods-list" 
        ref={listRef}
        style={{ 
          height: isSingleDraw ? aH : containerHeight, 
          overflow: 'hidden', 
          position: 'relative' 
        }}
      >
        {isSingleDraw ? singleDrawDom : multiDrawDom}
      </div>
    </div>
  );
});

// 数组打乱工具函数（复用）
function shuffleArrayWithIds(arr, specifiedIds) {
  const specifiedItems = specifiedIds.map(id => arr.find(item => item.id == id)).filter(Boolean);
  const newArray = arr.filter(item => !specifiedIds.includes(+item.id));
  newArray.sort(() => Math.random() - 0.5);
  specifiedItems.forEach((item, index) => {
    if (index === 0) newArray.splice(1, 0, item);
    else if (index === 1) newArray.splice(4, 0, item);
  });
  return newArray;
}

// 主组件
const RotateBox = memo(({ result, isPlay = false, onPLay = () => { }, callback }) => {
  const rotateColRef: any[] = [];
  const totalCols = 5;
  let rotateCallCount = 0;

  // 单抽/十抽判断（原始逻辑：result长度10为十抽）
  const type = result.length == 10 ? 2 : 1;
  const isSingleDraw = type === 1;

  // 单抽激活列控制（原始逻辑：仅中间列激活）
  let disableArray = Array(totalCols).fill(false);
  if (isSingleDraw) {
    disableArray = Array(totalCols).fill(true);
    disableArray[2] = false; // 中间列索引2（第3列）
  }

  // 回调完成条件（原始逻辑：单抽1次，十抽10次）
  const rotateCallBack = () => {
    if (++rotateCallCount >= (isSingleDraw ? 1 : 10)) {
      setTimeout(() => {
        callback(result.map(r => lotteryPackagesConf[r.iPackageId]));
        rotateColRef.forEach(r => r.current?.clear());
      }, 500);
    }
  };

  // 基础奖品列表
  const baseList = Object.keys(lotteryPackagesConf).map(k => ({
    ...lotteryPackagesConf[k],
    id: k
  }));

  // 单抽默认配置（原始）
  const singleDrawDefault = [6643185, 6643186, 6643187, 6643188, 6643190];
  // 十抽默认配置（当前）
  const multiDrawDefault = [
    [6643185, 6643191], 
    [6643186, 6643192], 
    [6643187, 6643193], 
    [6643188, 6643194], 
    [6643190, 6643195]  
  ];

  // 生成列DOM
  const listDom = multiDrawDefault.map((_, colIndex) => {
    const col = colIndex + 1;
    rotateColRef[colIndex] = createRef();

    // 单抽逻辑（完全保留原始）
    if (isSingleDraw) {
      const defaultId = singleDrawDefault[colIndex];
      let rList = [];

      if (isPlay && result.length) {
        // 单抽仅中间列用结果
        if (colIndex === 2) {
          const res = result[0];
          if (lotteryPackagesSpConf[res.iPackageId]) {
            res.iPackageId = lotteryPackagesSpConf[res.iPackageId].pkgId;
          }
          // 抽中默认值时替换（原始逻辑）
          const actualDefaultId = res.iPackageId == defaultId ? 6643185 : defaultId;
          rList = shuffleArrayWithIds(baseList, [actualDefaultId, +res.iPackageId]);
        } else {
          // 非中间列用默认值
          rList = shuffleArrayWithIds(baseList, [defaultId]);
        }
      } else {
        rList = shuffleArrayWithIds(baseList, [defaultId]);
      }

      return (
        <RotateCol
          key={`col${col}`}
          list={rList}
          index={4} // 单抽固定旋转到索引4（原始逻辑）
          col={col}
          callback={rotateCallBack}
          onRef={(ref) => {
            rotateColRef[colIndex].current = ref;
            if (isPlay && !disableArray[colIndex]) {
              // 单抽延迟400ms（原始逻辑）
              setTimeout(() => ref.play(), 400);
            }
          }}
          duration={2400} // 单抽固定时长2400ms（原始逻辑）
          isSingleDraw={isSingleDraw}
        />
      );
    }

    // 十抽逻辑（当前）
    const [topDefId, bottomDefId] = multiDrawDefault[colIndex];
    let topList = [];
    let bottomList = [];

    if (isPlay && result.length) {
      // 十抽每行对应结果
      const topRes = result[colIndex];
      const bottomRes = result[colIndex + 5];
      
      // 处理上行
      if (lotteryPackagesSpConf[topRes.iPackageId]) {
        topRes.iPackageId = lotteryPackagesSpConf[topRes.iPackageId].pkgId;
      }
      const actualTopId = topRes.iPackageId == topDefId ? 6643185 : topDefId;
      topList = shuffleArrayWithIds(baseList, [actualTopId, +topRes.iPackageId]);

      // 处理下行
      if (lotteryPackagesSpConf[bottomRes.iPackageId]) {
        bottomRes.iPackageId = lotteryPackagesSpConf[bottomRes.iPackageId].pkgId;
      }
      const actualBottomId = bottomRes.iPackageId == bottomDefId ? 6643185 : bottomDefId;
      bottomList = shuffleArrayWithIds(baseList, [actualBottomId, +bottomRes.iPackageId]);
    } else {
      topList = shuffleArrayWithIds(baseList, [topDefId]);
      bottomList = shuffleArrayWithIds(baseList, [bottomDefId]);
    }

    return (
      <RotateCol
        key={`col${col}`}
        topList={topList}
        bottomList={bottomList}
        col={col}
        callback={rotateCallBack}
        onRef={(ref) => {
          rotateColRef[colIndex].current = ref;
          if (isPlay) {
            // 十抽按列延迟300ms（当前逻辑）
            setTimeout(() => ref.play(), colIndex * 300);
          }
        }}
        duration={1500} // 十抽固定时长1500ms（当前逻辑）
        isSingleDraw={isSingleDraw}
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
      <div className="rotate-box" style={isSingleDraw ? { justifyContent: 'center' } : {}}>
        {listDom}
      </div>
      <div className={`rotate-type ${isSingleDraw ? 'x1' : 'x10'}`}></div>
    </div>
  );
});

export default RotateBox;