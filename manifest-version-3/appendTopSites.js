// 1. Send the background a message requesting the user's data
chrome.runtime.sendMessage('get-top-sites', (topSites) => {
  // 3. Got an asynchronous response with the data from the background
  console.log(topSites);
});