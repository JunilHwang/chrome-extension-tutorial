import { BookmarkService } from '../services/index.js'

const BookmarkItem = {
  template: `
    <article>
      <h3>({{ id }}) {{ title }}</h3>
      <ul>
        <li v-for="({ title, url }, k) in children" :key="k">
          <a :href="url" target="_blank">{{ title }}</a>
        </li>
      </ul>
    </article>
  `,
  props: [ 'title', 'children', 'id', 'index', 'parentId' ],
  created () {
    console.log(this.children)
  }
}

export const Bookmark = {
  components: { BookmarkItem },
  template: `
    <section>
      <h2>북마크</h2>
      <bookmark-item
        v-for="(item, k) in bookmarks.children"
        :key="k"
        v-bind="item"
      />
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