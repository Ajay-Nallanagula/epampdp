const fs = require('fs')
const { Duplex, PassThrough } = require('stream')

const readStream = fs.createReadStream('./powder-day.mp4') //RS
const writeStream = fs.createWriteStream('./WriteStreaamDemo/duplexStream.mp4') //WS

//In the below code readstream is directly fed into writestream.
//If there be a need to process the recieved chunk from RS and then pass on to WS, there has to be an intermediary entity
//which has access to both RS and WS
// readStream.pipe(writeStream)

class Throttle extends Duplex {
    constructor(ms) {
        super()
        this.delay = ms
    }
    //Duplex can Read
    _read() {

    }

    //Duplex can write
    _write(chunk, encoding, callback) {
        this.push(chunk)
        setTimeout(callback, this.delay)
    }

    //Duplex ,additionally have final method used to close the streams
    _final() {
        this.push(null)
    }
}



const throttle = new Throttle(5000)
const passThrough = new PassThrough()

readStream.pipe(throttle).pipe(passThrough).pipe(writeStream)

//PassThrough is an inbuilt node duplex stream, which is used to know meta-data about the chunk
passThrough.on('data', (chunk) => {
    console.log('Passed on for processing')
})

readStream.on('data', (chunk) => console.log('The chunk length' + chunk.length))