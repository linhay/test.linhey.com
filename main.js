function beginServer() {
    const Koa = require('koa')
    const routers = require('./routers/index')
    const bodyparser = require('koa-bodyparser')
    const app = new Koa()

    // // 配置ctx.body解析中间件
    // app.use(bodyparser())
    // app.use(routers.routes()).use(routers.allowedMethods())
    app.use(async (ctx, next) => {
        ctx.body = {
            headers: ctx.request.headers
        }
    })

    let server = app.listen(15000)
    console.log('Server is starting at port ' + server.address().port)
}

beginServer()
