import Store from '../store/index.js'

export const Memo = {
  template: `
    <section>
      <h2>메모</h2>
      <ul v-if="memoList.length">
        <li v-for="(v, k) in memoList" :key="k">
          {{ v }}
        </li>
      </ul>
      <input
        ref="inputOfAdding"
        v-if="isAdding"
        type="text"
        @keyup.enter="addMemo"
        @keyup.esc="isAdding = false"
        v-model="memoInput"
        autofocus
      />
      <p>
        <button type="button" @click="isAdding = !isAdding">추가</button>
      </p>
    </section>
  `,
  data () {
    return {
      memoList: [],
      memoInput: '',
      isAdding: false,
    }
  },
  methods: {
    addMemo () {

    },
  },
  async created () {
    this.memoList = (await Store.getter('memoList')) || []
  }
}