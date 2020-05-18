import store from '../store/index.js';

export const MemoService = Object.freeze({
  async getMemos () {
    return (await store.getter('memos')) || []
  },
  async setMemos (memos) {
    await store.setter('memos', memos)
  }
})