const http = require('http')
const server = http.createServer()

//In multiuser scenario ,This is an excellent place for client validation
//Checking/setting cookies, session variables
//Informing other client by sending events about other users who are concurrently using resources
server.on('connection', (socket) => {
    console.log('Server connected open for requests')
    //socket.on("connect", () => console.log('SOCKET CONNECTION IS ON'))
    //socket.on("end", (error) => console.log('SOCKET IS CLOSED', { error }))
})

server.listen(9005, () => {
    console.log('server is listening on http://localhost:9005 ')
})