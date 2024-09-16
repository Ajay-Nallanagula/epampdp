const { error } = require("node:console");
const net = require("node:net");
const readLine = require('node:readline/promises');

const readline = readLine.createInterface({
    input: process.stdin, //stdin is a duplex stream
    output: process.stdout,
})

const clearLine = (dir) => {
    return new Promise((resolve, reject) => {
        //Check the documentation for dir(1,-1,0) param "writeStream.clearLine"
        process.stdout.clearLine(dir, () => { resolve() })
    })
}

const moveCursor = (dx, dy) => {
    return new Promise((resolve, reject) => {
        //The movecursor will move up and down along x and y axis 
        process.stdout.cursorTo(dx, dy, () => { resolve(); })
    })
}

const clientSocket = net.createConnection({ port: 3008, host: '127.0.0.1' },
    async () => {
        //console.log(`Client is ready to send messages `);
        const message = await readline.question("Enter you Name:  ")
        //Socket is a duplex stream
        //  console.log("you typed: "+ message);
        clientSocket.write(message);

        const ask = async () => {
            await moveCursor(0, -3)
            await clearLine(0)
        }

        ask()


        clientSocket.on('data', (message) => {
            console.log('CLIENT PRINTING: ' + message.toString("utf-8"))
            ask();
        })
    })


clientSocket.on('error', (error) => {
    console.log(error)
})

clientSocket.on("close", () => {
    console.log(`Server CLOSED the connection!!`)
})

clientSocket.on("end", () => {
    console.log(`Server ENDED the connection!!`)
})