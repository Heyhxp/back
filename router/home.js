/*
 * @Descripttion: 
 * @version: 
 * @Author: 熊海朋
 * @Date: 2020-12-07 15:25:11
 * @LastEditors: 熊海朋
 * @LastEditTime: 2020-12-07 16:04:07
 */
module.exports = {
  index: async (ctx, next) => {
    ctx.body = '请求成功'
    next()
  }
}