import { GameletAPI } from 'gamelet-pixui-frame';
import { autorun, IObservableObject } from 'mobx';

let store: IObservableObject | undefined = undefined;

export function setContextShareStore(s: IObservableObject) {
  console.log('[ContextShareStore]', 'setContextShareStore');
  store = s;
}

function getRandomString(length: number): string {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
  const max = str.length;
  const arr: string[] = [];
  for (let i = 0; i < length; i++) {
    const pos = Math.ceil(Math.random() * 10000) % max;
    arr.push(str.charAt(pos));
  }
  return arr.join('');
}

const EVENT_APPDATA_UPDATE = `${GameletAPI.getAppId()}_STORE_APPDATA_UPDATE`;
const CONTEXT_SHARE_STASH_KEY = 'CONTEXT_SHARE_STORE';
const token = `${getRandomString(10)}_${new Date().getTime()}`; // 用来判断消息来源的上下文与当前上下文是否一致

/** 直接保存 */
async function directSave() {
  if (!store) return;
  console.log('[ContextShareStore]', token, '==========> 更新共享上下文 Store');
  await GameletAPI.setDataStash(CONTEXT_SHARE_STASH_KEY, JSON.stringify(store));
  GameletAPI.dispatchEvent(EVENT_APPDATA_UPDATE, token);
}

/** 直接加载 */
async function directLoad() {
  if (!store) return;
  console.log('[ContextShareStore]', token, '==========> 读取共享上下文 Store');
  const newStore = await GameletAPI.getDataStash(CONTEXT_SHARE_STASH_KEY);
  if (!newStore) return;
  for (const k of Object.keys(newStore)) store[k] = newStore[k]; // 更新
}

let isLoading = false;

/** 加载共享上下文数据 */
export async function loadContextShareStore() {
  if (isLoading) return;
  isLoading = true;
  await directLoad();
  isLoading = false;
}

/** 保存共享上下文数据 */
export async function saveContextShareStore() {
  await directSave();
  // 直接保存后可以直接清楚延迟保存定时器
  if (delayTimer != null) {
    clearTimeout(delayTimer);
    delayTimer = undefined;
  }
}

let delayTimer: any = undefined;

/** 监听当前上下文变更，保存并广播消息 */
export function starupContextShareStore() {
  console.log('[ContextShareStore]', 'starupContextShareStore');
  let firstRun = true;
  autorun(async () => {
    if (!store) return;
    Object.values(store);
    if (isLoading || delayTimer) return;
    if (!firstRun) delaySaveContextShareStore();
    firstRun = false;
  });

  // 监听其它页面上下文变更，读取更新本地上下文
  GameletAPI.addEventListener(EVENT_APPDATA_UPDATE, async (msgToken: string) => {
    if (token === msgToken) return;
    await loadContextShareStore();
  });
}

/** 延迟保存共享上下文数据 */
function delaySaveContextShareStore() {
  if (delayTimer != null) return;
  delayTimer = setTimeout(() => {
    delayTimer = undefined;
    directSave();
    clearTimeout(delayTimer);
  }, 100);
}
