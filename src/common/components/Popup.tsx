import { renderDom } from 'lib/dom';
import { h, Component, VNode } from 'preact';
import { observer } from 'mobx-preact';
import DateHelper from '../utils/date';
import { isPixUI } from '../utils/ua';
import RenderLayer from './RenderLayer';
import { onPageClosed } from './Page';
import { saveContextShareStore } from '../utils/ContextShareStore';
import { GameletAPI } from 'gamelet-pixui-frame';

declare const APP_SETTING: {
  POPUP_CFG: {
    not_separate: boolean;
  };
};

const appId = GameletAPI.getAppId();
const EVENTNAME_PREFIX = `PIXUI_COMMAND_FROM_ACT_${appId}`;

export declare type EntranceParent = 'None' | 'ActivityTop' | 'LobbyTop' | 'PixUITop';

export declare interface ShowPopupMessage {
  show?: boolean;
  __POPUP_entrance?: string;
  __POPUP_parent?: EntranceParent;
  [key: string]: any;
}

export declare type HidePopupMessage = ShowPopupMessage;

declare interface PopupEvent {
  type: string;
  data: any;
}
declare type PopupEventHandler = (msg: any) => any | Promise<any>;
declare type ShowPopupEventHandler = (msg: ShowPopupMessage) => any | Promise<any>;

let IS_NOT_SEPRATE = APP_SETTING.POPUP_CFG?.not_separate; // 是否为弹窗不分离

/** 强制弹窗分离 */
export function forcePopupSeprate() {
  IS_NOT_SEPRATE = false;
}

/** 强制弹窗不分离 */
export function forcePopupNotSeprate() {
  IS_NOT_SEPRATE = true;
}

const POPUP_EVENT = `${EVENTNAME_PREFIX}_POPUP_EVENT`;
let isRegisterListener = false;
let handlers: { [key: string]: PopupEventHandler[] } = {};

const onPopupEvent = (str: string) => {
  console.log('[POPUP][onPopupEvent]', '收到弹窗事件:', str);
  const msg = JSON.parse(str) as PopupEvent;
  const { type, data } = msg;
  handlers[type]?.forEach((func) => {
    func(data);
  });
};

export function addPopupEventListener(type: string, handler?: PopupEventHandler) {
  if (!handler || !(handler instanceof Function)) return;
  if (!isRegisterListener) {
    // 初始化事件监听
    isRegisterListener = true;
    GameletAPI.addEventListener(POPUP_EVENT, onPopupEvent);
  }
  console.log('[POPUP][addPopupEventListener]', '监听弹窗事件:', type);
  if (!handlers[type]) handlers[type] = [handler];
  else handlers[type].push(handler);
}

export function removePopupEventListener(type: string, handler?: PopupEventHandler) {
  if (!handler) return;
  const listeners = handlers[type];
  if (!listeners) return;
  const pos = listeners.indexOf(handler);
  if (pos >= 0) listeners.splice(pos, 1);
}

/** 清空事件处理器 */
function clearPopupEventListener() {
  GameletAPI.removeEventListener(POPUP_EVENT, onPopupEvent);
  isRegisterListener = false;
  handlers = {};
  console.warn('[POPUP][clearPopupEventListener]', 'CLEAR POPUP EVENT');
}

/** 触发执行指定事件处理器 */
export function triggerPopupEvent(type: string, msg: any) {
  console.log('[POPUP][triggerPopupEvent]', '触发事件:', type, msg);
  handlers[type]?.forEach((h) => h(msg));
}

export function postPopupEventMessage(type: string, data?: { [key: string]: any }) {
  const msg = { type, data };
  if (IS_NOT_SEPRATE) {
    console.log('[POPUP][postPopupEventMessage]', '[弹窗不分离] 直接触发弹窗事件: Direct triggerEvent:', msg);
    triggerPopupEvent(type, data);
  } else {
    console.log('[POPUP][postPopupEventMessage]', '[弹窗分离] 派发弹窗事件: GameletAPI.dispatchEvent:', msg);
    GameletAPI.dispatchEvent(POPUP_EVENT, JSON.stringify(msg));
  }
}

onPageClosed(() => {
  // 页面关闭的时候需要注销已注册的事件
  console.log('[POPUP]', '页面关闭，注销弹窗事件处理');
  clearPopupEventListener();
});

/** 用来表示当前加载的 POPUP 的入口 entrance 名称，名称格式为 [parent]_[entrance] */
let currentLoadedPopup: string | undefined = undefined;

/** 设置入口名称为 entrance 的 POPUP 为当前已加载弹窗 */
export function setCurrentLoadedPopup(entrance: string, parent: EntranceParent): void {
  currentLoadedPopup = `${parent}_${entrance}`;
  console.log('[POPUP][setCurrentLoadedPopup]', 'currentLoadedPopup =', currentLoadedPopup);
}

export function getCurrentLoadedPopup() {
  return currentLoadedPopup;
}

/** 判断对应入口名称为 entrance 的 POPUP 是否已加载 */
function checkIsPopupLoaded(entrance: string, parent: EntranceParent = 'ActivityTop'): boolean {
  return `${parent}_${entrance}` === currentLoadedPopup;
}

class PopupMgr {
  protected entrance: string;
  protected entranceParent?: EntranceParent;

  /**
   * @param entrance 弹窗入口的页面名称
   * @param entranceParent 需要挂载的父节点目标名称
   */
  constructor(entrance: string, entranceParent?: EntranceParent) {
    this.entrance = entrance;
    this.entranceParent = entranceParent;
  }

  addEventListener(type: string, handler?: PopupEventHandler) {
    addPopupEventListener(type, handler);
  }

  /** 清空事件处理器 */
  clearEventListener() {}

  /** 触发执行指定事件处理器 */
  triggerEvent(type: string, data?: { [key: string]: any }, entranceParent?: EntranceParent) {
    if (!data) data = {};
    if (!data.__POPUP_entrance) data.__POPUP_entrance = this.entrance;
    if (!data.__POPUP_parent) data.__POPUP_parent = this.getEntranceParent(entranceParent);
    triggerPopupEvent(type, data);
  }

  /** 给该弹窗发送消息 */
  postMessage(type: string, data?: { [key: string]: any }, entranceParent?: EntranceParent) {
    if (!data) data = {};
    if (!data.__POPUP_entrance) data.__POPUP_entrance = this.entrance;
    if (!data.__POPUP_parent) data.__POPUP_parent = this.getEntranceParent(entranceParent); // 额外隐含参数，用来记录弹窗挂载的父节点名称
    postPopupEventMessage(type, data);
  }

  onShow(handler?: PopupEventHandler) {
    this.addEventListener('show', handler);
  }

  onHide(handler?: PopupEventHandler) {
    this.addEventListener('hide', handler);
  }

  /** 发送显示消息 */
  async show(msg: ShowPopupMessage, entranceParent?: EntranceParent) {
    // 设置默认隐含信息
    msg.show = true;
    entranceParent = this.getEntranceParent(entranceParent);

    if (IS_NOT_SEPRATE) {
      this.postMessage('show', msg, entranceParent);
    } else if (checkIsPopupLoaded(this.entrance, entranceParent)) {
      // 【弹窗分离】需要显示的弹窗已加载，直接触发对应 show 事件
      await saveContextShareStore(); // 弹窗分离场景下显示弹窗之前先强制保存共享上下文
      this.triggerEvent('show', msg, entranceParent);
      console.log('[POPUP][popupMgr]', 'Direct trigger show event:', msg);
    } else if (isPixUI()) {
      // 【弹窗分离】
      // 如果父节点是 LobbyTop，需要先发送 onOpenPandoraTopWindow 消息通知游戏打开
      if (entranceParent === 'LobbyTop') GameletAPI.callGame('{"type":"onOpenPandoraTopWindow"}');
      // 发送 PIXUI_COMMAND_FROM_JS open 消息打开创建面板
      const et: PixUICommandFromeJS.EventType = 'PIXUI_COMMAND_FROM_JS';
      const ed: PixUICommandFromeJS.Open = { type: 'open', appId, entrance: this.entrance, parent: entranceParent };
      const str = JSON.stringify(ed);
      console.log('[POPUP][popupMgr]', `GameletAPI.dispatchEvent(${et}):`, str);
      // show 消息使用 SetDataStash 来进行数据交换
      await GameletAPI.setDataStash(`SHOW_POPUP_${this.entrance}`, JSON.stringify(msg)); // 在创建弹窗之前记录 show 消息，避免弹窗没有收到 show 事件
      await saveContextShareStore(); // 弹窗分离场景下显示弹窗之前先强制保存共享上下文
      GameletAPI.dispatchEvent(et, str); // 发送创建窗口事件
      this.postMessage('show', msg, entranceParent); // 发送显示弹窗事件
    } else {
      // 浏览器和模拟器使用发送消息来模拟
      this.postMessage('show', msg, entranceParent);
    }
  }

  /** 同步调用关闭弹窗，需要注意如果是在当前弹窗里调用时，调用出之后的代码可能不会执行 */
  close(msg?: HidePopupMessage, entranceParent?: EntranceParent) {
    entranceParent = this.getEntranceParent(entranceParent);
    if (!msg) msg = { show: false };
    else msg.show = false;

    if (IS_NOT_SEPRATE) {
      // 弹窗不分离，只需发送 hide 消息
      this.postMessage('hide', msg, entranceParent);
    } else if (isPixUI()) {
      // 同时通知其它面板弹窗关闭事件
      this.postMessage('hide', msg, entranceParent);
      // 发送消息通知面板关闭
      // POPUP 关闭时需要给 Pandora 发送 PIXUI_COMMAND_FROM_JS close 消息
      const et: PixUICommandFromeJS.EventType = 'PIXUI_COMMAND_FROM_JS';
      const ed: PixUICommandFromeJS.Close = {
        type: 'close',
        entrance: this.entrance,
        appId: GameletAPI.getAppId(),
      };
      GameletAPI.dispatchEvent(et, JSON.stringify(ed));
      // 如果父节点是 LobbyTop，关闭时需要发送 onClosePandoraTopWindow 消息通知游戏关闭
      if (entranceParent === 'LobbyTop') GameletAPI.callGame('{"type":"onClosePandoraTopWindow"}');
    } else {
      // 浏览器和模拟器使用发送消息来模拟
      this.postMessage('hide', msg);
    }
  }

  /** 异步调用关闭弹窗，会在调用处的函数执行完毕后才同步同步关闭弹窗 */
  hide(msg?: HidePopupMessage, entranceParent?: EntranceParent) {
    setTimeout(() => this.close(msg, entranceParent), 0);
  }

  private getEntranceParent(entranceParent?: EntranceParent): EntranceParent {
    // if (!IS_NOT_SEPRATE && currentLoadedPopup) {
    //   // @ts-ignore 弹窗分离模式下，currentLoadedPopup 有值表示当前在弹窗面板里进行操作，需要获取到实际挂载的弹窗面板
    //   return currentLoadedPopup.split('_')[0] || entranceParent || this.entranceParent || 'ActivityTop';
    // }
    return entranceParent || this.entranceParent || 'ActivityTop';
  }
}
export declare type PopupMgrClass = PopupMgr;

const popupMgrMap: { [entrance: string]: PopupMgr } = {};

/** 打开一个弹窗 */
export function getPopupMgr(entrance = 'popup', entranceParent?: EntranceParent) {
  if (!entranceParent) {
    // 弹窗分离模式下，currentLoadedPopup 有值表示当前在弹窗面板里进行操作，需要获取到实际挂载的弹窗面板
    if (!IS_NOT_SEPRATE && currentLoadedPopup) entranceParent = (currentLoadedPopup.split('_')[0] || entranceParent || 'ActivityTop') as EntranceParent;
    else entranceParent = 'ActivityTop';
  }
  const index = `${entranceParent}_${entrance}`;
  if (!popupMgrMap[index]) popupMgrMap[index] = new PopupMgr(entrance, entranceParent);
  return popupMgrMap[index];
}

interface PopupProps {
  /** 弹窗名称 */
  entrance: string;
  // entranceParent: string;
  sortingOrderOffset?: number;
  className?: string;
  // popupMgr?: PopupMgr;
  onShow?: ShowPopupEventHandler;
  onHide?: PopupEventHandler;
  // [key: string]: any;
}

@observer
export default class Popup extends Component<PopupProps, { show?: boolean; bindPanelName?: EntranceParent }> {
  async componentWillMount() {
    // 注册 show/hide 弹窗事件
    addPopupEventListener('show', this.onShow);
    addPopupEventListener('hide', this.onHide);
  }

  componentWillUnMount() {
    // 移除 show/hide 弹窗事件
    removePopupEventListener('show', this.onShow);
    removePopupEventListener('hide', this.onHide);
  }

  onShow = (msg: ShowPopupMessage) => {
    console.log('[Popup][Component][onShow]', '收到显示消息 msg =', msg);
    let bindPanelName = msg.__POPUP_parent;
    if (bindPanelName === 'None') bindPanelName = undefined;
    this.setState({ show: msg.show || true, bindPanelName });
    if (this.props.onShow) setTimeout(() => this.props.onShow?.(msg), 0);
  };

  onHide = (msg: HidePopupMessage) => {
    console.log('[Popup][Component][onHide]', '收到隐藏消息 msg =', msg);
    this.setState({ show: msg.show || false });
    if (this.props.onHide) setTimeout(() => this.props.onHide?.(msg), 0);
  };

  render() {
    if (!this.state.show) return null;
    const className = ['pixui-popup', this.props.className].filter((c) => !!c).join(' ');
    if (IS_NOT_SEPRATE) {
      // 弹窗不分离，使用 RenderLayer 绑定目标面板的层级
      return (
        <RenderLayer className={className} bindPanelName={this.state.bindPanelName}>
          {this.props.children}
        </RenderLayer>
      );
    }
    return <RenderLayer className={className}>{this.props.children}</RenderLayer>;
  }
}

const date = new DateHelper();
const POPUP_ID = `pixui-popup-${date.getYmdHis()}-${String(Math.random()).substring(6)}`;

export function createPopup(popup: VNode<Popup>) {
  let div: HTMLDivElement | null = document.querySelector(`#${POPUP_ID}`);
  if (!div) {
    div = document.createElement('div');
    div.id = POPUP_ID;
    div.className = 'pixui-popup-wrap';
    // @ts-ignore
    div.style.position = 'absolute';
    document.body.appendChild(div);
  }
  renderDom(popup, div!);
}
