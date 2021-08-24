/*
 * @Description: 
 * @Author: urnotyl
 * @Date: 2021-08-24 22:55:15
 * @LastEditors: urnotyl
 * @LastEditTime: 2021-08-25 00:55:33
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})