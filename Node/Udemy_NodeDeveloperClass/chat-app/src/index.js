const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const express = require('express')

const app = express()
const server = http.createServer(app)
//This is responsible to generate the client-side socket.io.js file, see index.html
const io = socketio(server)
const PORT = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

let count = 100
//io communicates with all the clients
io.on('connection', (socket) => {
    console.log('Websocket connection established!!')
    /*
    //Each socket communicates with individual client
    socket.emit('countUpdated', count)
    socket.on('increment', () => {
        count++
      //  console.log('count incremented at server')
        //this will broadcast the count to all the clients
        io.emit('countUpdated', count)
    })
    */

    socket.emit('welcomeMsg', 'Welcome Client!!')

    //broadcast.emit will emit a message to all the connected clients, 
    //except to the client that emits the message
    socket.broadcast.emit('sendMessage', 'A new user added!!')

    socket.on('sendMessage', (msg) => {
        io.emit('sendMessage', msg)
    })

    //When any of client gets disconnected, disconnect is a predefined event , like connection
    socket.on('disconnect', () => {
        //        console.log('User left the conversation')
        io.emit('sendMessage', 'User left the conversation')
    })

    socket.on('location', (location, cb) => {
        // socket.broadcast.emit('sendMessage', JSON.stringify(location))
        const googleMapUrl = `https://google.com/maps?q=${location.lat},${location.long}`
        io.emit('locationMessage', googleMapUrl)
        cb('LOCATION DELIVERED!!')
    })
})



server.listen(PORT, () => {
    console.log(`app is running at http://localhost:${PORT}`)
})