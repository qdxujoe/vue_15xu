<template>
  <div>
    <!-- 导航栏 -->
    <div class="section">
      <div class="location">
        <span>当前位置</span>
        <router-link :to="{name:'goodsList'}">首页</router-link>&gt;
        <router-link to="">商品详情</router-link>
      </div>
    </div>

    <!-- 商品详情 -->
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <!--页面左边-->
          <div class="left-925">
            <div class="goods-box clearfix">
              <!-- 图片预览 -->
              <div class="pic-box">
                <detail-view :list="goods.imglist"></detail-view>
              </div>

              <!-- 商品信息 -->
              <detail-info :goods="goods.goodsinfo"></detail-info>
            </div>

            <div id="goodsTabs" class="goods-tab bg-wrap">
              <!--选项卡-->
              <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                <ul>
                  <li>
                    <a class="selected" href="javascript:;">商品介绍</a>
                  </li>
                  <li>
                    <a href="javascript:;" class="">商品评论</a>
                  </li>
                </ul>
              </div>
              <!--/选项卡-->

              <!--选项内容-->
              <div class="tab-content entry" style="display:block;">
                内容
              </div>

              <div class="tab-content" style="display: block;">
                <!-- 评论 -->
                <comment></comment>
              </div>
            </div>
          </div>
          <!--/页面左边-->

          <!--页面右边-->
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <!-- 复用之前封装好的侧边栏列表组件 -->
                <slide-list :list="goods.hotgoodslist"></slide-list>
              </div>
            </div>
          </div>
          <!--/页面右边-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideList from "./common/SlideList.vue";
export default {
  data() {
    return {
      id: null,
      goods: {
        goodsinfo: [],
        imglist: [],
        hotgoodslist: []
      }
    };
  },

  modules: {
    getGoods() {
      this.$http.get(this.$api.goodsDetail + this.id).then(res => {
        this.goods = res.data.message;
      });
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getGoods();
  },
  components: {
    SlideList
  }
};
</script>

<style scoped>

</style>
