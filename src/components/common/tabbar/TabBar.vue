<!--
 * @Description: 
 * @Author: urnotyl
 * @Date: 2021-08-14 16:24:24
 * @LastEditors: urnotyl
 * @LastEditTime: 2021-08-14 16:49:09
-->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "TabBar",
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>