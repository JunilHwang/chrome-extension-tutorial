chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message) {
    case 'get-top-sites' :
      chrome.topSites.get(sendResponse);
      return true;
      break;
    default:
      break;
  }
});