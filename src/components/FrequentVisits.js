const microsecondsPerWeek = 1000 * 60 * 60 * 24 * 30;
const startTime = Date.now() - microsecondsPerWeek;
const maxResults = 1000

export const FrequentVisits = {
  template: `
    <section>
      <h2>자주 방문한 사이트</h2>
      <ul>
        <li v-for="({ url, title }) in visited" :key="url" v-if="title.length">
          <a :href="url" v-html="title" />
        </li>
      </ul>
    </section>
  `,
  data () {
    return {
      visited: []
    }
  },
  async created () {
    this.visited = await new Promise(resolve => {
      const visited = {}
      const sorted = (a, b) => b[1].count - a[1].count;
      chrome.history.search({text: '', startTime, maxResults}, items => {
        items.forEach(({url, title}, key) => chrome.history.getVisits({url}, result => {
          result.forEach(({ transition }) => {
            if (transition === 'typed') {
              visited[url] = (visited[url] || { title, count: 0 })
              visited[url].count += 1;
            }
          })
          if (key === maxResults - 1) resolve(Object.entries(visited).sort(sorted).map(([ url, { title } ]) => ({ url, title })))
        }))
      })
    });
  }
}