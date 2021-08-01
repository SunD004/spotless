import { wrapStore } from 'react-chrome-redux';
import configureStore from './store/configureStore'

chrome.browserAction.onClicked.addListener(() => {
    var width = 320;
    var height = 470;
    chrome.windows.create({
        url: chrome.runtime.getURL("popup.html"),
        type: "popup",
        focused: true,
        width: width,
        height: height,
    });
});

const store = configureStore()

wrapStore(store, { portName: 'spotless' });