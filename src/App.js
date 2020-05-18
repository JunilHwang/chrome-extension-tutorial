import { Memo, Bookmark } from './components/index.js'

export const App = {
  components: { Memo, Bookmark },
  template: `
    <main>
      <h1>Chrome Extension Program Tutorial</h1>
      <memo />
      <bookmark />
    </main> 
  `,
}