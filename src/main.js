// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//导入vue第三方包
import Vue from 'vue'
import Vuex from 'Vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//导入和vue无关的第三方包
import 'normalize.css';
import axios from 'axios';

//导入自己写的模块
import App from './App'; 
import router from './router'
import api from './js/api-config.js'
Vue.config.productionTip = false

// 统一use启动vue插件
Vue.use(Vuex);
Vue.use(ElementUI);

// 统一添加配置
axios.defaults.baseURL='http://localhost:8899';
axios.defaults.withCredentials=true;
Vue.prototype.$http=axios;
Vue.prototype.$api=api;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
