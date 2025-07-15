import './popup.less';
import { h, Component } from 'preact';
import { observer } from 'mobx-preact';
import { getPopupMgr } from 'src/common/components/Popup';

const popupMgr = getPopupMgr('popup', 'ActivityTop');

@observer
export default class Dialog extends Component {
  render() {
    const dialogs = [

    ];
    const arr = dialogs.filter((arr) => !!arr[0]).map((arr) => arr[1]);
    if (arr.length < 1) {
      popupMgr.hide();
      return null;
    }
    return arr;
  }
}
