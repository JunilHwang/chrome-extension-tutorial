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
  const test = await store.getter('test')
  if (test.key === undefined) {
    await store.setter('test', 'hello storage')
    const result = await store.getter('test')
    console.log('result', result)
  } else {
    console.log('test', test)
  }
}