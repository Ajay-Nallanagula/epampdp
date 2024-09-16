const fs = require("node:fs/promises");
const { Buffer } = require("node:buffer");

/* drawback:  More time taking, more CPU Usage, more memory */
//Using file-callbacks can show some improvement , because of eventloop
//However streams are more efficent
async function openWriteFile(path) {
    console.log("All data is written at once. ")
    const fileHandler = await fs.open(path, 'w')
    try {
        let writtenContent
        console.time("write Many")
        for (let i = 0; i <= 1000000; i++) {
            writtenContent = await fileHandler.write("Ajay Nallanagula, Writing many times")
        }
        console.timeEnd("write Many")

        if (writtenContent.bytesWritten) {
            console.log("File Opened & content Written")
        }
    } catch (error) {
        console.log(error)
    } finally {
        await fileHandler.close()
    }
}

//Take around 500-600ms , faster then file.write
async function writeWithStreams(path) {
    console.log("In streams data is written as chunks.")
    const fileHandler = await fs.open(path, 'w')
    const stream = fileHandler.createWriteStream()
    console.time("write Many")
    for (let i = 0; i <= 1000000; i++) {
        const buffer = Buffer.from(`${i}) Ajay Nallanagula, Writing many times`, 'utf-8')
        //Streams are written as chunks, for every 16KB the content is flushed to file
        const isStreamFull = stream.write(buffer)
        if (isStreamFull) {
            console.log('Continue Writing')
        } else {
            console.log("Its Time to drain the content")
        }
    }
    console.timeEnd("write Many")
    stream.end(() => {
        console.log("Data written using stream")
        fileHandler.close()
    })

}

(async () => {
    console.log("Writing data using file.write")
    await openWriteFile("test.txt")
    console.log("Writing data using streams \n\n")
    await writeWithStreams("test.txt")
})()

