const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 15001 });

wss.on('connection', function connection(ws, req) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    ws.send(JSON.stringify(req.headers));
});
