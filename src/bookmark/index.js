export const Bookmark = class {
  constructor({ children, dateAdded, id, title }) {
    this.children = children
    this.dateAdded = dateAdded
    this.id = id
    this.title = title
  }
}

export const BookmarkFolder = class extends Bookmark {
  constructor (args) {
    super(args)
    const { dateGroupModified, index, parentId } = args;
    this.dateGroupModified = dateGroupModified
    this.index = index
    this.parentId = parentId
  }
}

export const BookmarkItem = class extends Bookmark {
  constructor (args) {
    super(args)
    const { index, parentId, url } = args;
    this.index = index;
    this.parentId = parentId;
    this.url = url;
  }
}