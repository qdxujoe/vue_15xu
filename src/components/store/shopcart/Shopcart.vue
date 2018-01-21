<template>
   <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <router-link to="/">首页</router-link>&gt;
                <router-link to=" ">购物车</router-link>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="bg-wrap">
                        <!--购物车头部-->
                    <div class="cart-head clearfix">
                        <h2><i class="iconfont icon-cart"></i>我的购物车</h2>
                        <div class="cart-setp">
                                <ul>
                                    <li class="first active">
                                        <div class="progress">
                                            <span>1</span>放进购物车
                                        </div>
                                    </li>
                                    <li>
<div class="progress">
<span>2</span>
填写订单信息
</div>
</li>
<li class="last">
<div class="progress">
<span>3</span>
支付/确认订单
</div>
</li>
</ul>
</div>
</div>
<!--购物车头部-->
<!--商品列表-->
<div class="cart-box">
<input id="jsondata" name="jsondata" type="hidden">
<table width="100%" align="center" class="cart-table" border="0" cellspacing="0" cellpadding="8">
<tbody>
<tr>
<th width="48" align="center">
<el-switch :value="allSeletedState" @change="allChange" active-color="#13ce66">全选</el-switch>
</th>
<th align="left" colspan="2">商品信息</th>
<th width="84" align="left">单价</th>
<th width="104" align="center">数量</th>
<th width="104" align="left">金额(元)</th>                            
<th width="54" align="center">操作</th>
</tr>
<tr>
<td colspan="10">
<div class="msg-tips">
<div class="icon warning"><i class="iconfont icon-tip"></i></div>
<div class="info">
<strong>购物车没有商品！</strong>
<p>您的购物车为空，<a href="/index.html">马上去购物</a>吧！</p>
</div>
</div>
</td>
</tr>
<tr>
<th align="right" colspan="8">
已选择商品 <b class="red" id="totalQuantity">0</b> 件 &nbsp;&nbsp;&nbsp;
商品总金额（不含运费）：<span class="red">￥</span><b class="red" id="totalAmount">0</b>元
</th>
</tr>
</tbody></table>
</div>
<!--/商品列表-->
<!--购物车底部-->
<div class="cart-foot clearfix">
<div class="right-box">
<button class="button" onclick="javascript:location.href='/index.html';">继续购物</button>
<button class="submit" onclick="formSubmit(this, '/', '/shopping.html');">立即结算</button>
</div>
</div>
<!--购物车底部-->
</div>
</div>
</div>
</div>
   
    
</template>

<script>
export default {
  data() {
    return {
      ids: null,
      goodsList: []
    };
  },
  computed: {
    total() {
      return this.goodsList.reduce(
        (total, v) => total + (v.selected ? v.buycount : 0),
        0
      );
    },
    //总价=》遍历商品列表，如果商品的selected字段为true，那么累加它的buycount购买数量* sell_price单价
    sum() {
      return this.goodsList.reduce(
        (total, v) => total + (v.selected ? v.buycount * v.sell_price : 0),
        0
      );
    },
    // 全选按钮
    allSeletedState() {
      return this.goodsList.every(v => v.selected);
    }
  },
  methods: {
    //获取购物车商品列表数据
    getGoodsList() {
      this.$http.get(this.$api.shopcartGoods + this.ids).then(res => {
        res.data.message.forEach(goods => {
          goods.selected = true;
          goods.buycount = this.$store.stste.shopping[goods.id];
        });
        this.goodsList = res.data.message;
      });
    },
    //删除商品- 1 从goodsList里面删除--2 调用$store.commit从全局状态里删除
    del(id) {
      // 找出不删除的商品重新赋值
      this.goodsList = this.goodsList.filter(v => v.id != id);
      this.$store.commit("delShopping", id);
    },
    // 修改商品数量:1 从goodsList里面修改 2 调用$store.commit从全局状态里修改
    change(id, count) {
      this.goodsList.forEach(v => {
        if (v.id == id) {
          v.buycount = count;
        }
      });
      // es6简写法
      this.$store.commit("modifyShopping", { id, count });
    }
  },

  // 初始化完毕后 => 获取购物车ids, 然后调用接口
  created() {
    this.ids = this.$store.getters.shoppingId;
    this.getGoodsList();
  }
};
</script>

<style scoped>

</style>
