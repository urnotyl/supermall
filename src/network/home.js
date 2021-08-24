/*
 * @Description:
 * @Author: urnotyl
 * @Date: 2021-08-25 02:27:01
 * @LastEditors: urnotyl
 * @LastEditTime: 2021-08-25 02:33:07
 */
import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}