<!--
 * @Description: 
 * @Author: urnotyl
 * @Date: 2021-08-25 03:37:36
 * @LastEditors: urnotyl
 * @LastEditTime: 2021-08-25 04:13:57
-->
<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  data() {
    return {};
  },
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>