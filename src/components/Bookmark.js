import { BookmarkService } from '../services/index.js'

export const Bookmark = {
  template: `
    <section>
      <h2>북마크</h2>
      <article v-for="({ title, url }, k) in bookmarks" :key="k">
        <a href="#" @click.prevent="editing(k)" v-if="isEditing !== k">{{ title }}</a>
        <ul v-else>
          <li><input type="text" v-model="input.title" @keyup.esc="cancelEditing" size="10" /></li>        
          <li><input type="text" v-model="input.url" @keyup.esc="cancelEditing" size="100" /></li>        
          <li><button @click="save(k)">저장</button></li>        
        </ul>
      </article>
    </section>
  `,
  data() {
    return {
      bookmarks: [],
      input: {
        id: '',
        title: '',
        url: '',
      },
      isEditing: -1
    }
  },
  methods: {
    editing (key) {
      this.isEditing = key;
      this.input = { ...this.bookmarks[key] }
    },
    cancelEditing () {
      this.isEditing = -1;
      this.input = { title: '', url: '' }
    },
    save (key) {
      const { id, title, url } = this.input;
      chrome.bookmarks.update(id, { title, url }, () => {
        this.bookmarks[key] = { id, title, url };
        this.cancelEditing();
      })
    }
  },
  async created () {
    const [ tree ] = await BookmarkService.getTree();
    let bookmarks = tree.children.flatMap(v => v.children);
    while (bookmarks.find(v => v.children)) {
      bookmarks = bookmarks.flatMap(v => v.children || [ v ])
    }
    this.bookmarks = bookmarks.map(({ id, title, url }) => ({ id, title, url }));
    // console.log(JSON.stringify(this.bookmarks))
  }
}