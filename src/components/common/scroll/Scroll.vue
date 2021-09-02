<!--
 * @Description: 
 * @Author: urnotyl
 * @Date: 2021-08-30 18:09:19
 * @LastEditors: urnotyl
 * @LastEditTime: 2021-08-31 19:47:28
-->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // 1.创建better-scroll对象
    this.scroll = new BScroll(".wrapper", {
      // pullUpLoad: true,
      // wheel: true,
      click: true,
      // scrollbar: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // this.scroll.scrollTo(0, 0);
    console.log(this.scroll);

    // 2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });

    // 3.监听上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });

    this.scroll.on("refresh", () => {});
  },
  methods: {
    scrollTo(x, y, time = 2000) {
      this.scroll.scrollTo(x, y, time);
    },

    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
};
</script>
<style scoped>
</style>