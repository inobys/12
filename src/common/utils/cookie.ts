// cookie 处理工具

import { GameletAPI } from "gamelet-pixui-frame";

type CookieValueType = string | number | boolean | null | undefined | { [key: string]: any };

interface CookieValue {
  /** cookie 值 */
  value: CookieValueType;
  /** cookie 过期时间 */
  expireTime: number;
}

interface CookieData {
  [userspace: string]: { [key: string]: CookieValue };
}

type OffsetTime = number | 'day' | 'week' | 'month';

const COOKIE_FILE_NAME = 'PIXUI_COOKIE';
let COOKIE_DATA: CookieData;

/** 初始化 Cookie 数据 */
export async function initCookie(force = false): Promise<CookieData> {
  return new Promise((resolve, reject) => {
    if (!force && COOKIE_DATA) return resolve(COOKIE_DATA);
    Promise.resolve(GameletAPI
      .readCookie(COOKIE_FILE_NAME))
      .then((str: string) => {
        console.log('[COOKIE][initCookie] GameletAPI.readCookie', str);
        if (!!str) COOKIE_DATA = JSON.parse(str) as CookieData;
        else COOKIE_DATA = {};
        resolve(COOKIE_DATA);
      }) 
      .catch((err) => {
        console.error('[COOKIE] readCookie or parse parseCookie failed:', err);
        reject(err);
      });
  });
}

/**
 * 获取指定名称的 cookie 值
 * @param name cookie 名称
 * @param userspace Cookie 所属用户空间，默认值为 userdata.sUniqueRoleId
 */
export async function getCookie(name: string, userspace?: string): Promise<CookieValueType> {
  await initCookie();
  if (userspace == null ) userspace = (await GameletAPI.getUserData() as any).sUniqueRoleId;
  if (userspace === '' || userspace == undefined) userspace = 'GLOBAL';
  const data = COOKIE_DATA[userspace]?.[name];
  if (!data) return undefined;
  if (data.expireTime !== 0) {
    // 设置了过期时间
    if (new Date().getTime() < data.expireTime) return data.value;
    return undefined;
  }
  // 没有过期时间
  return data.value;
}

/**
 * 设置指定名称的 cookie 值
 * @param name cookie 名称
 * @param value cookie 值
 * @param expireOffset 过期时间的偏移时间，单位秒，比如有效期 1 天传 86400，定制含义：day 当天；week 本周；month 本月
 * @param userspace Cookie 所有用户空间，默认值为 userdata.sUniqueRoleId
 */
export async function setCookie(name: string, value: CookieValueType, expireOffset: OffsetTime, userspace?: string) {
  await initCookie();
  if (userspace == null) userspace = (await GameletAPI.getUserData() as any).sUniqueRoleId;
  if (userspace === '' || userspace == undefined) userspace = 'GLOBAL';
  if (!COOKIE_DATA[userspace]) COOKIE_DATA[userspace] = {};
  let expireTime = 0; // 过期时间 0 表示没有过期时间
  if (typeof expireOffset === 'string') {
    switch (expireOffset) {
      case 'day':
        {
          const d = new Date();
          d.setHours(23);
          d.setMinutes(59);
          d.setSeconds(59);
          d.setMilliseconds(999);
          expireTime = d.getTime();
        }
        break;
      case 'week':
        {
          const d = new Date();
          d.setDate(d.getDate() + 7 - d.getDay());
          d.setHours(23);
          d.setMinutes(59);
          d.setSeconds(59);
          d.setMilliseconds(999);
          expireTime = d.getTime();
        }
        break;
      case 'month':
        {
          const d = new Date();
          d.setMonth(d.getMonth() + 1);
          d.setDate(1);
          d.setHours(0);
          d.setMinutes(0);
          d.setSeconds(0);
          d.setMilliseconds(0);
          d.setTime(d.getTime() - 1000);
          expireTime = d.getTime();
        }
        break;
    }
  } else expireTime = new Date().getTime() + expireOffset * 1000;

  // 判断值及过期时间是否变化
  const { value: currentValue, expireTime: currentExpireTime } = COOKIE_DATA[userspace][name] || {};
  if (typeof value !== 'object' && currentValue === value && expireTime === currentExpireTime) return;

  const data: CookieValue = { value, expireTime };
  COOKIE_DATA[userspace][name] = data;
  console.log('[Cookie] upate cookie data:', COOKIE_DATA);
  await GameletAPI.writeCookie(COOKIE_FILE_NAME, JSON.stringify(COOKIE_DATA));
}
