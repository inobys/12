import { Component } from 'preact';

import styles from '../../app/styles.less';
import { GameletAPI } from 'gamelet-pixui-frame';

const OnPageLoading: Function[] = [];
const OnPageLoaded: Function[] = [];
const OnPageClosing: Function[] = [];
const OnPageClosed: Function[] = [];

const onError = (ev: ErrorEvent) => {
    // 打印错误堆栈
    let msg: string = ev as any;
    if (typeof ev !== 'string') {
      let err = ev.error as Error;
      if (!err) err = ev as any;
      msg = err.message || (err as any).error || (err as any).msg;
      if (msg == null) msg = ev as any;
    }
    console.error('[Page][onError]', msg);
    // 上报 JS 异常
    GameletAPI.reportJSExceptionStringToTDM(msg);
};

/** 当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完全加载。此事件在onload事件之前。 */
const onDOMContentLoaded = () => {
    (async () => {
      while (OnPageLoading.length > 0) {
        const fn = OnPageLoading.shift();
        if (!fn) continue;
        console.log('[Page][onDOMContentLoaded]', 'on page loading...');
        await fn();
      }
    })();
    setTimeout(() => window.removeEventListener('DOMContentLoaded', onDOMContentLoaded), 0);
};

/** 在页面或图像加载完成后立即发生，通常用于 元素，在页面完全载入后(包括图片、css文件等等。)执行脚本代码 */
const onLoad = () => {
    (async () => {
      while (OnPageLoaded.length > 0) {
        const fn = OnPageLoaded.shift();
        if (!fn) return;
        console.log('[Page][onLoad]', 'on page loaded.');
        await fn();
      }
    })();
    setTimeout(() => window.removeEventListener('load', onLoad), 0);
};

/** 当窗口即将被卸载（关闭）时触发该事件，发生在 onunload 事件之前 */
const onBeforeUnload = () => {
    (async () => {
      while (OnPageClosing.length > 0) {
        const fn = OnPageClosing.shift();
        if (!fn) return;
        console.log('[Page][onBeforeUnload]', 'on page closing...');
        await fn();
      }
    })();
    window.removeEventListener('beforeunload', onBeforeUnload);
};

/** 在 onbeforeunload 之后 onunload 之前触发，触发条件与 onbeforeunload 相同 */
const onClose = () => {
    console.log('[Page][onClose]', '');
    window.removeEventListener('close', onClose);
    window.removeEventListener('error', onError);
    window.onclose = null;
    window.onerror = null;
};

/** 在用户退出页面时发生，发生于当用户离开页面时发生的事件(通过点击一个连接，提交表单，关闭浏览器窗口等等。) */
const onUnload = () => {
    console.log('[Page][onUnload]', '');
    (async () => {
      while (OnPageClosed.length > 0) {
        const fn = OnPageClosed.shift();
        if (!fn) return;
        console.log('[Page][onUnload]', 'exec loading');
        await fn();
      }
    })();
    window.removeEventListener('unload', onUnload);
};

/** 注册页面加载中回调函数 */
export function onPageLoading(f: Function) {
    if (OnPageLoading.indexOf(f) < 0) OnPageLoading.push(f);
}

/** 注册页面加载完毕回调函数 */
export function onPageLoaded(f: Function) {
    if (OnPageLoaded.indexOf(f) < 0) OnPageLoaded.push(f);
}

/** 注册页面关闭中回调函数 */
export function onPageClosing(f: Function) {
    if (OnPageClosing.indexOf(f) < 0) OnPageClosing.push(f);
}

/** 注册页面关闭回调函数 */
export function onPageClosed(f: Function) {
    if (OnPageClosed.indexOf(f) < 0) OnPageClosed.push(f);
}

let inited = false;
(function () {
    if (inited) return;
    window.addEventListener('error', onError);
    window.addEventListener('DOMContentLoaded', onDOMContentLoaded);
    window.addEventListener('load', onLoad);
    window.addEventListener('beforeunload', onBeforeUnload);
    window.addEventListener('close', onClose);
    window.addEventListener('unload', onUnload);
    inited = true;
})();

interface PageProps {
    /** 样式类名 */
    className?: string;
    [prop: string]: any;
}

export default class Page extends Component<PageProps> {
    componentWillMount() {
      console.log('[Page][componentWillMount]');
      onDOMContentLoaded();
    }

    componentDidMount() {
      console.log('[Page][componentDidMount]');
      onLoad();
    }

    componentWillUnmount() {
      console.log('[Page][componentWillUnmount]');
      onBeforeUnload();
    }

    render() {
        let { className, children, onPageLoaded, onPageUnLoad, ...props } = this.props;
        className = [styles.pixui_page, className].filter((c) => !!c).join(' ');
        return (
            <div className={className} {...props}>
              {children}
            </div>
        );
    }
}
