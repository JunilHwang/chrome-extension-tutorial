export class App {
  $target = null
  constructor ($target) {
    this.$target = $target
    this.initData()
  }

  initData () {
    console.log('initData')
  }

  static of (el) {
    return new App(el)
  }
}