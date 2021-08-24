<!--
 * @Description: 
 * @Author: urnotyl
 * @Date: 2021-08-25 01:50:12
 * @LastEditors: urnotyl
 * @LastEditTime: 2021-08-25 02:10:54
-->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}

.left,
.right {
  width: 60px;
  /* background-color: cornflowerblue; */
}

.center {
  flex: 1;
  /* background-color: dodgerblue; */
  text-align: center;
}
</style>