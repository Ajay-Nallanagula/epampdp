const net = require("node:net");
const { Buffer } = require('node:buffer');

//socket is a duplex stream here 
//"net" module is the low-level module in nodejs , 
//on top of net http module is built and others .
const server = net.createServer((socket) => {
    console.log("client connected!!")
    socket.on("data", (chunk) => {
        console.log({ chunk: chunk.toString() })
    })
    socket.on("end", () => {
        console.log("connection is closed")
    })
})

server.listen(3000, () => {
    console.log(`server connection established on ${JSON.stringify(server.address())}`)
})

