<template>
  <div class="section">
      <div class="wrapper">
          <div class="wrap-box">
              <!--类别菜单-->
              <div class="left-220" style="margin:0;">
                  <div class="banner-nav">
                      <ul>
                          <!--此处声明下面可重复循环-->
                          <li v-for="item in all.catelist" :key="item.id">

                              <!-- 左侧列表 -->
                              <h3>
                                  <i class="iconfont icon-arrow-right"></i>
                                  <!-- 顶级分类 -->
                                  <span>{{ item.title }}</span>
                                  <!-- 子级分类 -->
                                  <p>
                                      <span v-for="subitem in item.subcates" :key="subitem.id">{{ subitem.title }}</span>
                                  </p>
                              </h3>

                              <!-- 左侧列表鼠标放上去显示的遮盖窗口 -->
                              <div class="item-box">
                                  <!--如有三级分类，此处可循环-->
                                  <dl>
                                      <dt>
                                          <a href="/goods/40.html">{{ item.title }}</a>
                                      </dt>
                                      <dd>
                                          <!-- 这里遍历到的subitem可能还会有自己的subcates, 并且可能无限 -->
                                          <!-- <a v-for="subitem in item.subcates" :key="subitem.id" href="/goods/43.html">{{ subitem.title }}</a> -->

                                          <!-- 如果有无限层, 我们只能尝试封装一个单独的组件, 因为只有组件才能递归调用自己, 普通元素不行 -->
                                          <!-- 我们把起始的一层列表数据传递过去, 让它渲染 -->
                                          <!-- 然后该组件还会判断每一层数据是否有下一级, 如果有那么调用自己继续渲染, 直接没有下一级 -->
                                          <app-category :list="item.subcates"></app-category>
                                      </dd>
                                  </dl>
                              </div>
                          </li>

                      </ul>
                  </div>
              </div>
              <!--/类别菜单-->

              <!--幻灯片-->
              <div class="left-705">
                  <div class="banner-img">
                      <div id="focus-box" class="focus-box">
                          <ul class="slides">
                              <li class="" style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;">
                                  <a href="/goods.html">
                                      <img src="/templates/main/images/focus_1.png" draggable="false">
                                  </a>
                              </li>
                              <li style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;" class="flex-active-slide">
                                  <a href="/goods.html">
                                      <img src="/templates/main/images/focus_2.png" draggable="false">
                                  </a>
                              </li>
                          </ul>
                          <ol class="flex-control-nav flex-control-paging">
                              <li>
                                  <a class="">1</a>
                              </li>
                              <li>
                                  <a class="flex-active">2</a>
                              </li>
                          </ol>
                      </div>

                  </div>
              </div>
              <!--/幻灯片-->

              <!--推荐商品-->
              <div class="left-220">
                  <ul class="side-img-list">

                      <li>
                          <div class="img-box">
                              <label>1</label>
                              <img src="/upload/201504/20/thumb_201504200314272543.jpg">
                          </div>
                          <div class="txt-box">
                              <a href="/goods/show-98.html">奔腾（BNTN） 380功放+纽约至尊 套装家庭影院</a>
                              <span>2015-04-20</span>
                          </div>
                      </li>

                      <li>
                          <div class="img-box">
                              <label>2</label>
                              <img src="/upload/201504/20/thumb_201504200258403759.jpg">
                          </div>
                          <div class="txt-box">
                              <a href="/goods/show-97.html">三星（SAMSUNG）UA40HU5920JXXZ 40英寸4K超高清</a>
                              <span>2015-04-20</span>
                          </div>
                      </li>

                      <li>
                          <div class="img-box">
                              <label>3</label>
                              <img src="/upload/201504/20/thumb_201504200242250674.jpg">
                          </div>
                          <div class="txt-box">
                              <a href="/goods/show-95.html">惠普（HP）LaserJet 2035商用黑白激光打印机（黑色）</a>
                              <span>2015-04-20</span>
                          </div>
                      </li>

                      <li>
                          <div class="img-box">
                              <label>4</label>
                              <img src="/upload/201504/20/thumb_201504200239192345.jpg">
                          </div>
                          <div class="txt-box">
                              <a href="/goods/show-94.html">金士顿（Kingston） DataTraveler SE9 32GB 金属U盘</a>
                              <span>2015-04-20</span>
                          </div>
                      </li>

                  </ul>
              </div>
              <!--/推荐商品-->
          </div>
      </div>
  </div>
</template>
<script>
  import appCategory from './Category'

  export default{
    data () {
      return {
        all :{
          sliderlist:[],
          toplist:[],
          catelist:[{id:151,pid:150,class_layer:2,title:'男装',
          subcates:[{id:151,pid:150,class_layer:2,title:'休闲西装',
          subcates:[{id:151,pid:150,class_layer:2,title:'裤子',
          subcates:[{id:151,pid:150,class_layer:2,title:'秋裤',
          subcates:[{id:151,pid:150,class_layer:2,title:'内裤',
        }]
        }]
        }]
      }]
    }]
        }
      }
    },
    methods: {
    //获取全部数据
    getData(){
      this.$http.get(this.$api.goodsTop).then(res=>{
        this.all=res.data.message;
      });
    }
  },
  created () {
    this.getData();
  },
  components: {
    appCategory,
  }
  }
 
</script>
<style scoped>
  
</style>