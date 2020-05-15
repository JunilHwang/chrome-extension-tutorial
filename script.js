import { store } from './store.js'
import { bookmark } from './bookmark.js'

window.onload = async () => {
  const storage = await store.getter('test3')
  if (storage.test === undefined) {
    await store.setter('test3', 'hello storage3')
    Object.assign(storage, await store.getter('test3'))
  }
  console.log(storage)
}