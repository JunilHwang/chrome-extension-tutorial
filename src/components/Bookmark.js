import { BookmarkService } from '../services/index.js'

export const Bookmark = {
  template: `
    <section>
      <h2>북마크</h2>
      <article v-for="({ title, url }, k) in bookmarks" :key="k">
        <a :href="url" target="_blank">{{ title }}</a>
      </article>
    </section>
  `,
  data() {
    return {
      bookmarks: []
    }
  },
  async created () {
    const [ tree ] = await BookmarkService.getTree();
    let bookmarks = tree.children.flatMap(v => v.children);
    while (bookmarks.find(v => v.children)) {
      bookmarks = bookmarks.flatMap(v => v.children || [ v ])
    }
    this.bookmarks = bookmarks.map(({ title, url }) => ({ title, url }));
    // console.log(JSON.stringify(this.bookmarks))
  }
}