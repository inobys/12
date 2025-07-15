import { h, Component } from 'preact';
import { getPopupMgr } from 'src/common/components/Popup';

const popupMgr = getPopupMgr();

/** Toast 提示 */
export default class Toast extends Component {
  protected timer?: NodeJS.Timeout;
  protected elem?: { current?: HTMLDivElement } = {};

  hide = () => {
    if (this.elem?.current) {
      this.elem.current.style.animation = 'zoomOut 150ms 1';
      this.timer = undefined;
      this.timer = setTimeout(() => {
        this.timer = undefined;
        popupMgr.hide();
      }, 100);
    } else {
      popupMgr.hide();
    }
  };

  componentWillMount() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
  }

  componentDidMount() {
    const msg = "";
    // 3 秒后自动关闭
    this.timer = setTimeout(this.hide, 3000);
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
  }

  render() {
    const str = "";
    return (
      <div className={`toast ${str.length < 20 ? 'bg-toast' : 'bg-toast-2'}`} ref={this.elem}>
        <text className="text tips">{str}</text>
      </div>
    );
  }
}
