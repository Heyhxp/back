/*
 * @Descripttion: 
 * @version: 
 * @Author: 熊海朋
 * @Date: 2020-12-07 14:19:07
 * @LastEditors: 熊海朋
 * @LastEditTime: 2020-12-07 14:45:47
 */
const Koa = require('koa')
const Router = require('koa-router')

const server = new Koa()
const router = new Router()

router.get('/home', (ctx, next) => {
  console.log(222);
})

server
  .use(router.routes())
  .use(router.allowedMethods())

server.listen(3000, () => {
  console.log('启动成功')
})