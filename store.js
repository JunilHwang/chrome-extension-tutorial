export const store = {
  async setter (key, value) {
    return new Promise((resolve, reject) => {
      try {
        chrome.storage.local.set({ [key]: value }, resolve)
      } catch (e) {
        reject(e)
      }
    })
  },
  async getter (key) {
    return new Promise((resolve, reject) => {
      try {
        chrome.storage.local.get([ key ], resolve)
      } catch (e) {
        reject(e)
      }
    })
  }
}