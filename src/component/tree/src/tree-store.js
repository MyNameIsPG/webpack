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
  setData(data) {
    this.data = data;
    this.transforData(this.data, 0);
  }
  transforData(data, n) {
    let level = n || 0;
    level++;
    if (data.length > 0) {
      data.forEach((item) => {
        item.data = JSON.parse(JSON.stringify(item));
        item.id = nodeIdSeed++;
        item.checked = item[this.store.props.checked] ? item[this.store.props.checked] : false;
        item.indeterminate = false;
        item.expanded = item.expanded ? item.expanded : false;
        item.visible = true;
        item.isCurrent = false;
        item.level = level;
        item.text = item[this.store.props.label];
        if (item[this.store.props.children] && item[this.store.props.children].length > 0) {
          this.transforData(item[this.store.props.children], level);
        }
      });
    }
  }
  insertChild(child) {
    if (child.children) {
      this.childNodes = new Node({
        data: item.children,
        store: this.store,
      });
    } else {
      this.childNodes = [];
    }
  }
}

class TreeStore {
  constructor(options) {
    for (let option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option];
      }
    }
    return new Node({
      data: this.data,
      store: this,
    });
  }
}

export default TreeStore;
