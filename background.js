chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
   if (changeInfo.status === "complete") {
      chrome.cookies.getAll({ url: tab.url }, (cookies) => {
         cookies.forEach(cookie => {
            chrome.cookies.remove({ url: tab.url, name: cookie.name });
         });
      });
   }
});