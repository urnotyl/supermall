/*
 * @Description:
 * @Author: urnotyl
 * @Date: 2021-08-24 23:54:27
 * @LastEditors: urnotyl
 * @LastEditTime: 2021-08-24 23:59:17
 */
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}