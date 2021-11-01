chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message) {
    case 'get-top-sites' :
      chrome.topSites.get(sendResponse);
      break;
    default:
      break;
  }
  return true;
});