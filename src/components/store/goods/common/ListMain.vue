<template>
    <div>
        <!-- 分类分组商品列表 -->
        <div class="section" v-for="item in main" :key="item.level1cateid">

            <!-- 分类 -->
            <div class="main-tit">
                <!-- 顶级分类 -->
                <h2>{{ item.catetitle }}</h2>
                <!-- 二级分类 -->
                <p>
                    <router-link to="" v-for="subitem in item.level2catelist" :key="subitem.subcateid">
                        {{ subitem.subcatetitle }}
                    </router-link>
                    <router-link to="">更多<i>+</i></router-link>
                </p>
            </div>

            <!-- 商品 -->
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="subitem in item.datas" :key="subitem.artID">
                            <router-link :to="{ name: 'goodsDetail', params: { id: subitem.artID } }">
                                <div class="img-box">
                                    <img :src="subitem.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{ subitem.artTitle }}</h3>
                                    <p class="price">
                                        <b>¥{{ subitem.sell_price }}</b>元</p>
                                    <p>
                                        <strong>库存{{ subitem.stock_quantity }}</strong>
                                        <span>市场价：
                                            <s>{{ subitem.market_price }}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                main: [
                    {
                        level1cateid: 40,
                        catetitle: "手机数码",
                        level2catelist: [],
                        datas: []
                    }
                ]
            }
        },

        methods: {
            getMain() {
                this.$http.get(this.$api.goodsContent).then(res => {
                    this.main = res.data.message;
                })
            }
        },

        created() {
            this.getMain();
        }
    };
</script>

<style scoped>

</style>