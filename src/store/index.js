//引入Vue
import Vue from "vue";
export default {
  // 全局状态 -->相当于是data
  state: {
    // 购物车购买数据, 约定key就是商品ID, values就是商品的购买数据
    // shopping: { 87: 24, 88: 275, 90: 33 }
    //购物车的默认数据从本地storage里面取，相当于调用接口获取初始数据，如果数据没有那么设为一个空对象
    shopping: JSON.parse(localStorage.getItem("shopping")) || {}
  },

  // 相当于是计算属性 computed
  getters: {
    // 这里的方法会自动接收到state状态
    shoppingSum(state) {
      return Object.values(state.shopping).reduce((sum, v) => sum + v, 0);
    }
  },

  // 定义修改全局状态的方法
  mutations: {
    // 这里的方法会自动接收到state状态, 然后第二个参数是用户自己传的,
    // 这里通过赋值结构的es6语法从第二个参数中解出id与count
    modifyShopping(state, { id, count }) {
      // 注意这里有个坑```
      Vue.set(state.shopping, id, count);
      console.log(id, count);
      //全局的状态修改之后，记得在本地持久化存储一下，这样刷新页面或者关闭重开页面数据不会丢失
      localStorage.setItem("shopping", JSON.stringify(state.shopping));
    }
  }
};
