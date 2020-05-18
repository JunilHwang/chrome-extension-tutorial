import store from '../store/index.js';

export const MemoService = Object.freeze({
  async getMemos () {
    const memos = await store.getter('memos')
    console.log(memos)
    return memos || []
  },
  async setMemos (memos) {
    await store.setter('memos', memos)
  }
})