import { wrapStore } from 'react-chrome-redux';
import configureStore from './store/configureStore'

chrome.browserAction.onClicked.addListener(tab => {
    chrome.windows.create({
        url: chrome.runtime.getURL("popup.html"),
        type: "popup",
        focused: true,
        /* can also set width/height here, see docs */
    });
});

const store = configureStore()

wrapStore(store, { portName: 'spotless' });