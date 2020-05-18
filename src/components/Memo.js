export const Memo = {
  template: `
    <section>
      <h2>메모</h2>
      <ul v-if="memoList.length">
        <li v-for="(v, k) in memoList" :key="k">
          {{ v }}
        </li>
      </ul>
    </section>
  `,
  data () {
    return {
      memoList: []
    }
  }
}