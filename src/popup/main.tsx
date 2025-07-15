import './popup.less';
import { h } from 'preact';
import Popup, { createPopup, HidePopupMessage, ShowPopupMessage } from 'src/common/components/Popup';

import store from 'src/store';
import Dialog from './Dialog';

const onShowPopup = (msg: ShowPopupMessage) => {
};

const onHidePopup = (msg: HidePopupMessage) => {
};

createPopup(
  <Popup entrance="popup" sortingOrderOffset={100} onShow={onShowPopup} onHide={onHidePopup}>
    <Dialog />
  </Popup>
);
