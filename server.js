/*
 * @Descripttion: 
 * @version: 
 * @Author: 熊海朋
 * @Date: 2020-12-07 14:19:07
 * @LastEditors: 熊海朋
 * @LastEditTime: 2020-12-07 15:40:13
 */
const Koa = require('koa')
const router = require('./router/router')

const server = new Koa()

server
  .use(router.routes())
  .use(router.allowedMethods())

server.listen(3000, () => {
  console.log('启动成功')
})