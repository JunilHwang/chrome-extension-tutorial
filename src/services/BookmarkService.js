export const BookmarkService = Object.freeze({
  getTree () {
    return new Promise(resolve => {
      chrome.bookmarks.getTree(([ bookmarkList ]) => resolve(bookmarkList))
    })
  }
})