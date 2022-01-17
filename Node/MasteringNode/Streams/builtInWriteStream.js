const fs = require('fs')

const readStream = fs.createReadStream('./bufferVsstream/powder-day.mp4')
const writeStream = fs.createWriteStream('./WriteStreaamDemo/powder-day.mp4')

readStream.on('data', (chunk) => {
    writeStream.write(chunk)
})

readStream.on('end', () => {
    writeStream.end()
})

writeStream.on("close", () => {
    process.stdout.write('File writing completed')
})

writeStream.on("error", (err) => {
    process.stdout.write(err)
})

