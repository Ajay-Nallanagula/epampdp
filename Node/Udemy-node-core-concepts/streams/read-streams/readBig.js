const fs = require("node:fs/promises");

async function readWriteDestinationStreamDemo(filePath) {
    const readFileHandler = await fs.open(filePath, "r")
    const writeFileHandler = await fs.open("target.txt", "w")

    const writeStream = writeFileHandler.createWriteStream()
    const readStream = readFileHandler.createReadStream() //{highWaterMark:xxx}

    console.log(`Unlike 16KB for writeStream, readStream default buffer size is ${readStream.readableHighWaterMark}`)

    readStream.on("data", (chunk) => {
        /*
          When you log the arr , below you would see there is some loss of data 
          consider arr = [1,2,3,4 ..... 33182], in this case the last array item 33182 
          only 33 will be there in the chunk and 182 is truncated and passed onto the second array

          To solve this we can 
          --> See where the chunk-splitting is happening , 
          --> if(arr1[arr1.length-2]+ 1 !== arr1[arr1.length-1]) {
          string concatenation give the complete number . can be dobe 
          } 

        */
        const arr = chunk.toString("utf-8").split(" ")
        // console.log(arr)
        //console.log('----------------------------------')

        //Read the chunk and write it to destination 
        /*
        The read stream sends the data of 64KB , but write stream can write at 16KB speed
        Expect "back pressure" in this case. 
        To avoid such situation we can pause and resume the readstream, 
        pause will stop at certain cursor position, 
        resume will pick the reading from that cursor position
        */
        if (!writeStream.write(chunk)) {
            console.log(`chunk length: ${chunk.length}`)
            readStream.pause()
        }
    })

    writeStream.on("drain", () => {
        console.log(`The chunk data is been drained--------------`)
        readStream.resume()
    })

    readStream.on("end", () => {
        console.log(`readstream.end() All the content of the ${filePath} have been read.`)

        writeStream.end(() => {
            console.log(` writeStream.end() All the content have been written to target.txt`)
        })

        writeStream.on("finish", () => {
            console.log("writeStream.on(finish) All file handlers are closed!!")
            writeFileHandler.close()
            readFileHandler.close()
        })
    })

}

(async () => {
    await readWriteDestinationStreamDemo('src.txt')
})()