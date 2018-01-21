<template>
    <ul class="side-img-list">

        <li v-for="(item, index) in list" :key="item.id">
            <div class="img-box">
                <label>{{ index + 1 }}</label>
                <img :src="item.img_url">
            </div>
            <div class="txt-box">
                <router-link :to="{ name: 'goodsDetail', params: { id: item.id } }">{{ item.title }}</router-link>
                <span>{{ item.add_time | date }}</span>
            </div>
        </li>

    </ul>
</template>

<script>
    export default {
        props: ['list']
    };
</script>

<style scoped>

</style>