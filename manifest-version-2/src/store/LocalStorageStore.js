import { Store } from './Store.js';

export const LocalStorageStore = class extends Store {

  async _setter (key, value) {
    return Promise.resolve(localStorage.setItem(key, JSON.stringify(value)))
  }

  async _getter (key) {
    return Promise.resolve(JSON.parse(localStorage.getItem(key)))
  }

}