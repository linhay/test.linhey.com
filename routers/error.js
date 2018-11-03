/**
 * 主页子路由
 */

const router = require('koa-router')()
module.exports = router.all('*', async (ctx, next) => {
    await next()
})
