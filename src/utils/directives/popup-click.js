export default {
  bind (el, binding, vnode) {
    el.fn = function (e) {
      // 如果有disabled属性就不显示
      if (!e.target.disabled) {
        if (el.contains(e.target)) {
          vnode.context[binding.expression] = true;
        } else {
          vnode.context[binding.expression] = false;
        }
      }
    };
    document.addEventListener("click", el.fn);
  },
  unbind (el) {
    document.removeEventListener("click", el.fn);
  },
}