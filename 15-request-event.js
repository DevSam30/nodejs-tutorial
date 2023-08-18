// server has the method on(), for listening for events
const http = require('http')

//using Event Emitter API
const server = http.createServer()

server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)