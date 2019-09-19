export default {
  now: () =>  +new Date(),
  
  noop: () => {},

  nextTick (fn, delay) {
    setTimeout(fn || this.noop, delay || 0);
  },

  addEvent (element, type, handler, bool) {
    element.addEventListener(type, handler, bool || false);
  },

  removeEvent (element, type, handler, bool) {
    element.removeEventListener(type, handler, bool || false);
  }
}