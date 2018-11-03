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
            headers: ctx.request.headers,
            ips: getIP()
        }
    })

    let server = app.listen(15000)
    console.log('Server is starting at port ' + server.address().port)
}


function getIP() {
    var os = require('os');
    var ifaces = os.networkInterfaces();
    ips = []
    Object.keys(ifaces).forEach(function (ifname) {
        var alias = 0;
        ifaces[ifname].forEach(function (iface) {
            if ('IPv4' !== iface.family || iface.internal !== false) { return; }
            if (alias >= 1) {
                ips.push(ifname + alias + ':' + iface.address);
            } else {
                ips.push(ifname + ':' + iface.address);
            }
            ++alias;
        });
    });
    return ips
}

beginServer()
