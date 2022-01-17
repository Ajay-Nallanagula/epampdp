//consider builtInWriteStream.js, there we have to create read and write streams , 
//listen to bunch of events write whole lot of code
//There is a shorterway to accomplish this , and its Pipe
const fs = require('fs')

const readStream = fs.createReadStream('./bufferVsstream/powder-day.mp4')
const writeStream = fs.createWriteStream('./WriteStreaamDemo/copy.mp4')

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk)
// })

// readStream.on('end', () => {
//     writeStream.end()
// })

// writeStream.on("close", () => {
//     process.stdout.write('File writing completed')
// })

// writeStream.on("error", (err) => {
//     process.stdout.write(err)
// })

//Pipe will handle the backpressure,end of stream and other related issues for us.
// const writtenStream = readStream.pipe(writeStream)
// writtenStream.on('error', (err) => console.log(err))

//Another example
const writeToFile = fs.createWriteStream('./WriteStreaamDemo/textFile.txt')
process.stdin.pipe(writeToFile)
