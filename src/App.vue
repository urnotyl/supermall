<!--
 * @Description: 
 * @Author: urnotyl
 * @Date: 2021-08-24 22:55:15
 * @LastEditors: urnotyl
 * @LastEditTime: 2021-08-25 00:35:13
-->
<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
