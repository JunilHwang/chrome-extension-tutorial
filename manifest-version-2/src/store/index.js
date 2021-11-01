import { ChromeStore } from './ChromeStore.js'
import { LocalStorageStore } from './LocalStorageStore.js'

export default chrome.storage.local ? new ChromeStore() : new LocalStorageStore()