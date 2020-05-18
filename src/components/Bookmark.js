import { BookmarkService } from '../services/index.js'

export const Bookmark = {
  template: `
    <section>
      <h2>북마크</h2>
      {{ bookmarks }}
    </section>
  `,
  data() {
    return {
      bookmarks: []
    }
  },
  async created () {
    this.bookmarks = await BookmarkService.getTree();
  }
}