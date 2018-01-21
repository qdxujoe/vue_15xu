import Vue from 'vue';
Vue.filter('json',function (obj) {
  return JSON.stringify(obj);
})

export default function (obj) {
  return JSON.stringify(obj);
}