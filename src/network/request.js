/*
 * @Description:
 * @Author: urnotyl
 * @Date: 2021-08-25 02:16:43
 * @LastEditors: urnotyl
 * @LastEditTime: 2021-08-25 02:43:52
 */
import axios from 'axios'

export function request(config) {
  const instence1 = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  instence1.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  instence1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instence1(config)
}