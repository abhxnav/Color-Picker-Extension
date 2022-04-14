let color = 'red';

chrome.runtime.onInstalled.addListner(() => {
    chrome.storage.sync.set({ color });
});