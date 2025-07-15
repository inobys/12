interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** 获取元素 elel 的 左下角 相对于 屏幕中心 的相对位置信息 */
export function getRelPositionToScreenCenter(elem: Element | null | undefined): Position {
  // console.log('屏幕坐标信息', {
  //   screenTop: window.screenTop,
  //   screenLeft: window.screenLeft,
  //   screenWidth: window.screen.availWidth,
  //   screenHeight: window.screen.availHeight,
  // });
  if (!elem) return { x: 0, y: 0, width: 0, height: 0 };
  const b = elem.getBoundingClientRect();
  console.log({
    left: b.left, // PixUI 获取到 left/top 是相对于屏幕（不是视口）
    right: b.right,
    top: b.top,
    bottom: b.bottom,
    widht: b.width,
    height: b.height,
    x: b.x,
    y: b.y,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });
  const pos: Position = { x: 0, y: 0, width: b.width, height: b.height };
  pos.x = b.left - window.innerWidth / 2;
  pos.y = window.innerHeight - b.bottom - window.innerHeight / 2;
  return pos;
}
