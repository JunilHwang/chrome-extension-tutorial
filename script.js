const store = {
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

window.onload = async () => {
  const storage = await store.getter('test3')
  if (storage.test === undefined) {
    await store.setter('test3', 'hello storage3')
    Object.assign(storage, await store.getter('test3'))
  }
}