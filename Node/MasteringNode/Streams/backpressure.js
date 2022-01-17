const fs = require('fs')

const readStream = fs.createReadStream('./bufferVsstream/powder-day.mp4')
const writeStream = fs.createWriteStream('./WriteStreaamDemo/powder-day.mp4')

/* uncomment the below code when you have to set highWaterMark */
//const writeStream = fs.createWriteStream('./WriteStreaamDemo/powder-day.mp4', { highWaterMark: 169999 })

readStream.on('data', (chunk) => {
    //writestream.write returns a boolean value indicating backpressure with "FALSE" 
    const isBackPressure = !writeStream.write(chunk)
    if (isBackPressure) {
        console.log('backpressure', chunk.length)
        //How to see if writablestream is ready for intake, we have to listen to "drain" event plz see down for code
        readStream.pause()
    }
})

readStream.on('end', () => {
    writeStream.end()
})

writeStream.on('drain', () => {
    console.log('drain')
    readStream.resume()
})

writeStream.on("close", () => {
    process.stdout.write('File writing completed')
})

writeStream.on("error", (err) => {
    process.stdout.write(err)
})

