window.postMessage({ type: 'READY_EXTENSION' });

window.addEventListener('message', ({ data, origin }) => {
  if (data.type === 'GET_TOP_SITES') {
    sendTopSites();
  }
})

function sendTopSites () {
  chrome.runtime.sendMessage('get-top-sites', (topSites) => {
    window.postMessage({ type: 'SEND_TOP_SITES', payload: topSites });
  });
}
