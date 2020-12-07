/*
 * @Descripttion: 
 * @version: 
 * @Author: 熊海朋
 * @Date: 2020-12-07 15:19:00
 * @LastEditors: 熊海朋
 * @LastEditTime: 2020-12-07 16:02:31
 */
const Router = require('koa-router');
const home = require('./home')


const router = new Router()

// home页面处理路由
router.get('/home', home.index) 

module.exports = router