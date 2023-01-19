const http = require('http')
const express = require('express')
const WebsocketServer = require('websocket').server

const app = express()
const server = http.createServer(app)

//Created websocket server
const websocketServer = new WebsocketServer({ httpServer: server })

websocketServer.on('request', (request) => {
    const connection = request.accept(null, request.origin)
    connection.on('onopen', e => console.log('Connection is open'))
    connection.on('onclose', e => console.log('Connection is closed'))
})

server.listen('3000', () => {
    console.log('Server listening')
})