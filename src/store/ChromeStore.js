import { Store } from './Store.js';

export const ChromeStore = class extends Store {
  async _setter (key, value) {
    return new Promise((resolve, reject) => {
      try {
        chrome.storage.local.set({ [key]: value }, resolve)
      } catch (e) {
        reject(e)
      }
    })
  }

  async _getter (key) {
    return new Promise((resolve, reject) => {
      try {
        chrome.storage.local.get('key', storage => {
          resolve(storage.key || null)
        })
      } catch (e) {
        reject(e)
      }
    })
  }

}