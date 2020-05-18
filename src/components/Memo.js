import { MemoService } from '../services/index.js'

export const Memo = {
  template: `
    <section>
      <h2>메모</h2>
      <ul v-if="memos.length">
        <li v-for="(v, k) in memos" :key="k">
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
      memos: [],
      memoInput: '',
      isAdding: false,
    }
  },
  methods: {
    async addMemo () {
      this.memos.push(this.memoInput)
      this.memoInput = ''
      await MemoService.setMemos([ ...this.memos ]);
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
    this.memos = await MemoService.getMemos();
  }
}