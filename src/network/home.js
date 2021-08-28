/*
 * @Description:
 * @Author: urnotyl
 * @Date: 2021-08-25 02:27:01
 * @LastEditors: urnotyl
 * @LastEditTime: 2021-08-28 18:41:16
 */
import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}