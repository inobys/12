// 日期处理工具

import { GameletAPI } from "gamelet-pixui-frame";

declare type DateTime = number | Date | 'next day' | 'next hour' | string;

/** 解析日期时间格式
 * @param time 时间日期格式，支持如下值
 * - number      时间错(毫秒)
 * - Date        Date对象
 * - string      字符串格式的日期和时间，如 2022-12-12 12:12:12、2022-12-12、12-12、12-12 12
 * - "next day"  字符串 "next day"  表示下一天的零点
 * - "next hour" 字符串 "next hour" 表示下一小时的零分
 * @returns 无效的日期时间则是则会返回 undefined
 */
export function parseDateTime(time: DateTime): Date | undefined {
  if (time instanceof Date) return time;
  if (typeof time === 'number' || !isNaN(Number(time))) return new Date(Number(time));
  const d = new Date();

  if (time === 'next day') {
    d.setDate(d.getDate() + 1);
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);
  } else if (time === 'next hour') {
    d.setHours(d.getHours() + 1);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);
  } else if (typeof time === 'string') {
    const matched = time.match(
      // 时间格式 2022-12-12 12:12:12
      /^(?:(\d{4})-?)?(\d{1,2})-(\d{1,2})(?:[\s]+(\d{1,2})(?::(\d{1,2}))?(?::(\d{1,2}))?)?/
    );
    if (!matched) {
      console.error('[DATE][parseDateTime]', '无效的时间格式：', time);
      return;
    }
    const [, year, month, day, hour, min, sec] = matched;
    if (year) d.setFullYear(Number(year));
    d.setMonth(Number(month ? month : 1) - 1);
    d.setDate(Number(day ? day : 1));
    d.setHours(Number(hour ? hour : 0));
    d.setMinutes(Number(min ? min : 0));
    d.setSeconds(Number(sec ? sec : 0));
    d.setMilliseconds(0);
  } else return;

  return d;
}

/** 创建日期对象，类似 parseDateTime，但如果传入无效的日期时间格式则会返回当前时间 */
export function createDate(date?: DateTime): Date {
  if (!date) return new Date();
  return parseDateTime(date) || new Date();
}

/** 给数字添加前导 0 */
function prefixNumber(num: number): string {
  if (num < 10) return `0${num}`;
  return String(num);
}

const STASH_KEY_DIFFTIME = 'SERVER_DIFF_TIME';
/** 本地时间与服务器时间相差的时间，单位毫秒 */
let serverDiffTime: number | undefined | null | string;

/** 设置当前的服务器时间，单位毫秒
 * @param serverTime 服务器时间
 * @param usedTime 请求接口获得服务器时间所消耗的时间（请求相应往返时间），单位毫秒
 */
export function setCurrentServeTime(serverTime: number, usedTime = 0) {
  if (serverTime <= 0) return;
  const now = new Date().getTime();
  serverDiffTime = serverTime - now;
  if (usedTime > 0) serverDiffTime += Math.ceil(usedTime / 2);
  console.log('[DATE]', `setCurrentServeTime(${serverTime}, ${usedTime}), serverDiffTime = ${serverDiffTime}`);
  GameletAPI.setDataStash(STASH_KEY_DIFFTIME, serverDiffTime.toString());
}

/** 以异步的方式获取当前的服务器时间，会尝试从 DataStash 中获取与服务器时间偏差进行计算 */
export async function getCurrentServeTime(): Promise<number> {
  if (serverDiffTime == null) {
    serverDiffTime = await GameletAPI.getDataStash(STASH_KEY_DIFFTIME);
    if (!serverDiffTime) serverDiffTime = 0;
  }
  return new Date().getTime() + (serverDiffTime as number);
}

/** 已同步的方式获取当前的服务器时间，直接使用已经过得的偏差时间进行计算 */
export function syncGetCurrentServerTime(): number {
  return new Date().getTime() + (serverDiffTime as number || 0);
}

/** 格式化日期时间格式
 * @param fmt 格式字符串，如 Y-m-d H:i:s，支持的格式字符 YmdHis
 * @inner Y 完整年份
 * @returns
 */
export function formatDateTime(t?: DateTime, fmt = 'Y-m-d H:i:s'): string {
  const date = createDate(t);
  if (!date) return '';

  const out: (string | number)[] = [];
  for (const c of fmt) {
    switch (c) {
      case 'Y':
        out.push(date.getFullYear());
        break;
      case 'm':
        out.push(prefixNumber(date.getMonth() + 1));
        break;
      case 'd':
        out.push(prefixNumber(date.getDate()));
        break;
      case 'H':
        out.push(prefixNumber(date.getHours()));
        break;
      case 'i':
        out.push(prefixNumber(date.getMinutes()));
        break;
      case 's':
        out.push(prefixNumber(date.getSeconds()));
        break;
      default:
        out.push(c);
    }
  }
  return out.join('');
}

/** 日期时间辅助类 */
export default class DateHelper {
  protected date: Date;
  constructor(date?: DateTime) {
    this.date = createDate(date);
  }

  setDate(date?: Date | number) {
    this.date = createDate(date);
  }

  /** 获取月日 M.D */
  getMd(): string {
    const m = this.date.getMonth() + 1;
    const d = this.date.getDate();
    return `${m}.${d}`;
  }

  /** 获取年月日 YYYYMMDD */
  getYmd(): string {
    const y = this.date.getFullYear();
    const m = this.date.getMonth() + 1;
    const d = this.date.getDate();
    return `${y}${prefixNumber(m)}${prefixNumber(d)}`;
  }

  /** 获取时分秒 HHmmSS */
  getHis(): string {
    const h = this.date.getHours();
    const i = this.date.getMinutes();
    const s = this.date.getSeconds();
    return `${prefixNumber(h)}${prefixNumber(i)}${prefixNumber(s)}`;
  }

  /** 获取年月日时分秒 YYYYMMDDHHmmSS */
  getYmdHis(): string {
    return this.getYmd() + this.getHis();
  }

  /** 格式化日期格式
   * @param fmt 格式字符串，如 Y-m-d H:i:s，支持的格式字符 YmdHis
   * @returns
   */
  format(fmt: string): string {
    return formatDateTime(fmt);
  }
}

/** 添加到指定日期触发的定时器
 * @param targetTime 目标日期，可以是一个时间戳（毫秒）数字或一个 Date 对象类型，也可以用 next day 表示下一天，next hour 表示下个小时
 * @param fn 回调函数
 * @param args 额外传递给回调函数入参
 */
export async function addTimerToDate(targetTime: DateTime, fn: Function, ...args: any[]) {
  const targetDate = parseDateTime(targetTime);
  if (!targetDate) {
    console.error('[DATE][addTimerToDate]', `日期时间解析失败: parseDateTime(${targetTime}) => nil`);
    return;
  }

  targetTime = targetDate.getTime();
  const now = await getCurrentServeTime();

  // 已到达触发时间
  if (targetTime <= now) {
    console.log('[DATE][addTimerToDate]', `触发目标时间 ${formatDateTime(targetDate)} 定时器，延迟 ${now - targetTime} ms`);
    fn(...args, now, targetTime);
    return;
  }

  const deltaTime = targetTime - now;
  let interval = deltaTime;
  // 间隔时间大于 1 天
  if (deltaTime > 86400000) interval = 86400000;
  // 间隔时间大于 1 小时
  else if (deltaTime > 3600000) interval = 3600000;
  // 间隔时间大于 1 分钟
  else if (deltaTime > 60000) interval = 60000;

  let timer: any = setTimeout(() => {
    clearTimeout(timer);
    timer = undefined;
    addTimerToDate(targetDate, fn, ...args);
  }, interval);
}

function uniqueArray<T extends number | string | undefined>(arr: T[]): T[] {
  const out: T[] = [];
  arr.forEach((v) => {
    if (v != null && out.indexOf(v) < 0) out.push(v);
  });
  return out;
}

function ascSorter<T extends number | string>(a: T, b: T): -1 | 0 | 1 {
  if (a === b) return 0;
  return a < b ? -1 : 1;
}

/** 类似 addTimerToDate，但入参 targetTimes 为数组格式，可以指定一组目标时间来触发定时器 */
export async function addTimerToDates(targetTimes: (DateTime | DateTime[] | undefined)[], fn: Function, ...args: any[]) {
  const now = await getCurrentServeTime();
  let outdate: number[] = []; // 过期时间
  let times: number[] = []; // 需要添加目标定时器的时间
  for (const t1 of targetTimes) {
    if (t1 instanceof Array)
      for (const t2 of t1) {
        const t = parseDateTime(t2)?.getTime();
        if (t == null) continue;
        if (now >= t) outdate.push(t);
        else times.push(t);
      }
    else if (t1 != null && t1 !== '' && t1 != 0) {
      const t = parseDateTime(t1)?.getTime();
      if (t == null) continue;
      if (now >= t) outdate.push(t);
      else times.push(t);
    }
  }

  // 立即触发
  if (outdate.length > 0) {
    outdate = uniqueArray(outdate).sort(ascSorter);
    console.log(
      '[DATE][addTimerToDates]',
      '立即触发执行定时器的时间',
      outdate.map((t) => formatDateTime(t))
    );
    fn(...args, now, targetTimes);
  }

  if (times.length < 1) return;

  const tmp = {};
  times.forEach((t) => (tmp[t] = true));
  times = uniqueArray(times).sort(ascSorter);

  console.log(
    '[DATE][addTimerToDates]',
    '需要添加定时器的时间',
    times.map((t) => formatDateTime(t))
  );

  const wrapFN = (...args2: any[]) => {
    fn(...args2);
    if (times.length < 1) return;
    addTimerToDate(times.shift() as number, wrapFN, ...args);
  };

  addTimerToDate(times.shift() as number, wrapFN, ...args);
}

// @ts-ignore
window.addTimerToDate = addTimerToDate;
// @ts-ignore
window.addTimerToDates = addTimerToDates;
