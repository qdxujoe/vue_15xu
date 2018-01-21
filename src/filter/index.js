import date from './date'
import json from './json'

// 写vue插件, 就是在install方法里面对象vue的原型进行扩展, 或者注册一些新组件, 过滤器等等
export default{
  install(vue){
    vue.filter('date',date);
    vue.filter('json',json);
  }
}