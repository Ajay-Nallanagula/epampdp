const net = require("node:net")
const { Buffer } = require('node:buffer');

const socket = net.createConnection({ port: 3000 }, () => {
    const buff = Buffer.alloc(4)
    buff[0] = "1"
    buff[1] = "2"
    buff[2] = "3"
    buff[3] = "4"

    socket.write(buff)
})