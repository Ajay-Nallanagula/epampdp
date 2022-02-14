const http = require('http')
const server = http.createServer()

server.on('connection', (socket) => {
    console.log('Server connected open for requests')
})

server.on('request', (req, res) => {
    req.setEncoding('utf-8')

    req.on('readable', () => {
        console.log(req.read({}))
    })

    req.on('end', () => console.log('END OF REQUEST'))
})

server.setTimeout(2000, (socket) => {
    socket.write('connection too slow!!')
    socket.end()
})

server.listen(9005, () => {
    console.log('server is listening on http://localhost:9005, post some data ')
})