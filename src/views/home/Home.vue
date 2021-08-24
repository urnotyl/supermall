<!--
 * @Description: 
 * @Author: urnotyl
 * @Date: 2021-08-14 17:29:29
 * @LastEditors: urnotyl
 * @LastEditTime: 2021-08-25 04:13:34
-->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childcomps/HomeSwiper.vue";
import RecommendView from "./childcomps/RecommendView.vue";

import { getHomeMultidata } from "network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  name: "Home",
  computed: {},
  methods: {},
  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      // 函数调用 -> 压入函数栈（保存函数调用过程中所有变量）
      // 函数调用结束 -> 弹出函数栈（释放函数有所的变量）
      // console.log(res);

      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  mounted() {},
};
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>