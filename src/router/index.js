/*
 * @Description:
 * @Author: urnotyl
 * @Date: 2021-08-25 00:24:24
 * @LastEditors: urnotyl
 * @LastEditTime: 2021-08-25 01:07:08
 */
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home')
const CateGory = () => import('views/category/CateGory')
const ShopCart = () => import('views/shopcart/ShopCart')
const ProFile = () => import('views/profile/ProFile')

// 1.安装插件
Vue.use(Router)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: CateGory
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: ProFile
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router