const microsecondsPerWeek = 1000 * 60 * 60 * 24 * 30;
const startTime = Date.now() - microsecondsPerWeek;
const maxResults = 1000

export const FrequentVisits = {
  template: `
    <section>
      <h2>자주 방문한 사이트</h2>
      <ul>
        <li v-for="(v, k) in visited" :key="k">
          <a :href="v" v-html="v" />
        </li>
      </ul>
    </section>
  `,
  data () {
    return {
      visited: []
    }
  },
  created () {
    chrome.history.search({ text: '', startTime, maxResults }, items => {
      const urls = {}
      for (const [ key, { url } ] of Object.entries(items)) {
        (() => chrome.history.getVisits({ url }, result => {
          for (const { transition } of result) {
            if (transition === 'typed') urls[url] = ( urls[url] || 0 ) + 1;
          }
          if (~~key === 999) {
            this.visited = Object.keys(urls).sort((a, b) => urls[b] - urls[a])
          }
        }))();
      }
    });
  }
}