const fs = require('fs')

const readStream = fs.createReadStream('./bufferVsstream/powder-day.mp4') //config object can be given this way { encoding: 'UTF-8' }
/*
What are streams ?
Streams work on a concept called buffer. A buffer is a temporary memory that a stream takes to hold some data until it is consumed.
In a stream, the buffer size is decided by the highWatermark property on the stream instance which is a number denoting the size of the buffer in bytes.

can i give encoding:'UTF-8' in this case ??
No , because its not a string , UTF-8 converts wat can be converted to string

What is Flowing stream?
When the chunks or bits of data are flowing without any intteruption, then such flow is called Flowing stream

What is Non-Flowing stream
When the chunks or bits of data are been interrupted/paused and resumed, then such stream is called Non-Flowing stream.

*/

readStream.on('data', (chunk) => {
    console.log(chunk.length)
    //  console.log({ chunk })
    // console.log(typeof (chunk)) //Object
})

readStream.on('end', () => {
    console.log('File read completed!!!')
})

readStream.on('error', (err) => {
    //To see this add this line const readStream = fs.createReadStream('./bufferVsstream/powder-dayyyyyy.mp4') 
    console.log(err)
})

//why is process.stdin triggerd ? because in readStream.on we are giving input to stdin console.log is an stdin ...
//Non-Flowing stream , is  created 
readStream.pause()
process.stdin.on('data', (chunk) => {
    if (chunk.toString().trim() === 'finish') {
        readStream.resume() //this will resume to normal flow whenever we type 'finish'
    }
    readStream.read()
})