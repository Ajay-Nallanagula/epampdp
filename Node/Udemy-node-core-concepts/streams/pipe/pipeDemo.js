const fs = require("node:fs/promises")
const { pipeline } = require("node:stream")

/*
    The pipe method is used to connect a readable stream to a writable stream,
    facilitating the flow of data from one to the other. This method simplifies 
    the process of reading data from a source and writing it to a destination, 
    handling the data flow, buffering, and backpressure automatically.
    See : streams\copy\copyFile.js example

    Pipe is a function only available on read-stream.
     We can chain pipes as long as the return type of pipe is a read-stream

    The key goal of stream.pipe is buffering levels of both source and destination will not 
    overwhelm the memory 

    How does Pipe work?
    When you call the pipe method on a readable stream, you pass in a writable stream 
    as an argument. The readable stream will then push its data into 
    the writable stream as it becomes available.
    This is particularly useful for operations like reading from a file and writing 
    to another file, sending HTTP responses, or working with any other streamable sources 
    and destinations.

    For better error handling with pipes => use const {pipeline} = require("node:streams")
*/

async function pipeDemo() {
    const readFileHandler = await fs.open("src.txt", "r")
    const writeFileHandler = await fs.open("target.txt", "w")

    const readStream = readFileHandler.createReadStream()
    const writeStream = writeFileHandler.createWriteStream()

    //Way 1: 
    //readStream.pipe(writeStream)

    //Way2: prior to pipeline , npm package "pump" was used 
    pipeline(readStream, writeStream, (err) => {
        console.log(err)
        console.log(`Copy Finished!!`)
    })
}

(async () => {
    await pipeDemo()
})()