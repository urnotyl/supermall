<!--
 * @Description: 
 * @Author: urnotyl
 * @Date: 2021-08-30 23:09:55
 * @LastEditors: urnotyl
 * @LastEditTime: 2021-08-31 00:08:44
-->
<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "BackTop",
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.back-top {
  position: fixed;
  right: 8px;
  bottom: 55px;
}

.back-top img {
  height: 42px;
  width: 42px;
}
</style>