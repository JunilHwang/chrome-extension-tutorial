import { Memo, Bookmark, FrequentVisits } from './components'

export const App = {
  components: { Memo, Bookmark, FrequentVisits },
  template: `
    <main>
      <h1>Chrome Extension Program Tutorial</h1>
      <memo />
      <bookmark />
      <frequent-visits />
    </main> 
  `,
}