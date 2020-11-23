let nodeIdSeed = 0;
class Node {
  constructor(options) {
    for (let option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option];
      }
    }
    this.setData(this.data);
  }
  setData (data) {
    this.data = data
    this.transforData(this.data);
    console.log(this)
  }
  transforData (data) {
    if (data.length > 0) {
      data.forEach(item => {
        item.id = nodeIdSeed++;
        item.checked = false;
        item.indeterminate = false;
        item.data = item;
        item.expanded = false;
        item.visible = true;
        item.isCurrent = false;
        item.text = item[this.store.props.label];
        if (item.children && item.children.length > 0) {
          this.transforData(item.children)
        }
      })
      debugger
    }
  }
  insertChild (child) {
    if (child.children) {
      this.childNodes = new Node({
        data: item.children,
        store: this.store
      })
    } else {
      this.childNodes = []
    }
    console.log(child)
  }
}

class TreeStore {
  constructor(options) {
    for (let option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option];
      }
    }
    this.root = new Node({
      data: this.data,
      store: this
    });
    console.log(this)
  }
}

export default TreeStore