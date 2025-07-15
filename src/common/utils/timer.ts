/** 返回一个使用定时器包装后的新函数，该函数在指定的时间间隔内只能调用一次
 * @param msec 间隔时间，单位毫秒
 * @param fn
 * @param rest 其它传递给 fn 的参数
 */
export function runAfterTimer(msec: number, fn: (...args: any[]) => any | Promise<any>, ...rest: any[]) {
  let timer: any = undefined;
  let lastReturn: any;
  return async () => {
    if (timer) return lastReturn;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = undefined;
    }, msec);
    try {
      lastReturn = await fn(...rest);
      return lastReturn;
    } catch (e) {
      clearTimeout(timer);
      timer = undefined;
      throw e;
    }
  };
}
