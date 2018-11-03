const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 15001 });

wss.on('connection', function connection(ws, req) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    ws.send('headers: ' + JSON.stringify(req.headers));
    ws.send('ip: ' + JSON.stringify(getIP));
});




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
