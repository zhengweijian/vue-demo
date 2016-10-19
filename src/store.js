const STOREAGE_KEY='todos-vuejs'
export default{
  fetch:function () {
    return JSON.parse(window.localStorage.getItem(STOREAGE_KEY) || '[]');
  },
  save:function (items) {
    window.localStorage.setItem(STOREAGE_KEY, JSON.stringify(items));
  }
}
