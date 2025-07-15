/** 判断是否是 PixUI */
export function isPixUI(): boolean {
  return /PixUI/i.test(navigator.userAgent) && /_sdk_info=openplatform_/i.test(location.search);
}

/** 判断是否是模拟器 */
export function isSimulator(): boolean {
  return /PixUI/i.test(navigator.userAgent) && !/_sdk_info=openplatform_/i.test(location.search);
}

/** 判断是否是普通浏览器 */
export function isBrowser(): boolean {
  return !/PixUI/i.test(navigator.userAgent);
}
