import { MemoService } from '../services/index.js'

export const Memo = {
  template: `
    <section>
      <h2>메모</h2>
      <ul v-if="memos.length">
        <li
          v-for="(v, k) in memos"
          :key="k"
          @click="selectMemo(k)">
          <template v-if="isEditingMemo !== k">
            {{ v }}
            <a href="#" @click.prevent="onEditing(k)">수정</a> /
            <a href="#" @click.prevent="deleteMemo(k)">삭제</a>
          </template>
          <input
            v-else
            ref="inputOfEditing"
            type="text"
            @keyup.enter="updateMemo"
            @keyup.esc="offEditing"
            v-model="memoEditInput"
          />
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
      <input
        ref="inputOfEditing"
        v-if="isEditing"
        type="text"
        @keyup.enter="updateMemo"
        @keyup.esc="offEditing"
        v-model="memoInput"
      />
      <p>
        <button
          v-if="!isAdding"
          type="button"
          @click="onAdding"
          style="background:#fff;padding:5px 15px;"
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
      isEditingMemo: null,
      selectedMemo: null
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
    },
    onEditing (k) {
      this.isEditingMemo = k
      this.$nextTick(() => this.$refs.inputOfEditing.focus())
    },
    offEditing () {
      this.isEditing = false
      this.memoInput = ''
    },
    selectMemo (key) {
      this.selectedMemo = key
    }
  },
  async created () {
    this.memos = await MemoService.getMemos();
  }
}