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
        @keyup.esc="offAdding"
        v-model="memoInput"
      />
      <p>
        <button
          v-if="!isAdding"
          type="button"
          @click="onAdding"
          style="width:100px;height:20px;background:#fff;"
          v-html="'추가'"
        />
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
      this.memoList.push(this.memoInput)
      this.memoInput = ''
    },
    onAdding () {
      this.isAdding = true
      this.$nextTick(() => this.$refs.inputOfAdding.focus())
    },
    offAdding () {
      this.isAdding = false
      this.memoInput = ''
    }
  },
  async created () {
    this.memoList = (await Store.getter('memoList')) || []
  }
}