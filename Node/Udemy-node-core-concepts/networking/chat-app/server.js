/*
   1) "node:net" module is used to work with TCP or IPC(Inter Process Communication) 
   2) TCP takes a port number and IP address
   3) IPC takes a file path
3.1) If in net.createServer(port) its a TCP connection, if in net.createServer(path) its an IPC connection, this is the way node recognises.
   4) learning "node:net" with TCP is similar to that of IPC most of the methods ,callbacks and events are same.
*/

const net = require("node:net");

//Step 1: Create Server
const server = net.createServer();
let chakodis = []; //means clients

server.on("connection", function (clientSocket) {

    clientSocket.on('data', function (payloadBuffer) {
        // console.log('You have entered your name as: ' + payloadBuffer.toString("utf-8"));
        //console.log(chakodis.length)
        console.log("START Message broadcast from Server!")
        chakodis.map(function (cs) { //cs: clientSocket
            JSON.stringify(cs)
            //socket is a duplex stream.
            
            cs.write(payloadBuffer.toString("utf-8"))
        });
        console.log("END Message broadcast from Server!")
    });

    //naive way of broadcasting messages to multiple clients 
    console.log('Message appears when client listens to the server : Server is Connected!!')
    chakodis.push(clientSocket);
})

server.on("end", () => {
    console.log(`SERVER: server connection is closed!!`)
});

server.listen('3008', '127.0.0.1', () => {
    console.log(`server has started at ${JSON.stringify(server.address())}`)
})