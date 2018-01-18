import axios from 'axios';
import api from '@/js/api-config.js';

// 不用检测登陆权限的页面路径
let noLoginCheckPage = [
  'index',
  'goodslist',
  'goodsDetail',
  'shopcart'
];
// 1. 先获取用户要去的页面
// 2. 如果用户要去登陆页
// 2.1 那么判断用户是不是登陆过了, 是的话直接给他跳转到后台首页
// 3. 如果用户要去后台管理相关页
// 3.1 那么判断用户是不是登陆过了, 不是的话给他跳转到登陆页
export default function (to, from, next) {
  var toPageName = to.name;

 // some方法用来检测数据中是否具有符合条件的元素, 只要有一个满足就是true
  if(noLoginCheckPage.some(v => v == toPageName)) {
      return next();
}
  //请求接口判断用户有没有登陆
  axios.get(api.isLogin).then(res => {
    let isLogin = false;

    if (res.data.code == 'logined') {
      isLogin = true;
    }

    //用户访问登陆页面，如果已登录，那么自动转到首页
    if (toPageName == 'login' && isLogin) {
      next('/');
    } else if (toPageName != 'login' && !isLogin) {
      next({name: 'login',query: {nextPage: to.fullPath}});
    } else {
      next();
    }

  });
}