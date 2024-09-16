const fs = require("node:fs/promises");
const { Buffer } = require("node:buffer")

async function copyFileWithoutStreamCopyFunc() {
    console.log("COPY FILE WITHOUT streams,fs.copy()\n")
    console.log("IN A WAY THIS IS CUSTOM STREAM IMPLEMENTATION\n")

    const readFileHandler = await fs.open("src.txt", "r");
    const writeFileHandler = await fs.open("target.txt", "w")

    let bytesRead = -1

    while (bytesRead !== 0) {
        const readResult = await readFileHandler.read()
        bytesRead = readResult.bytesRead
        //To avoid Junk values be added to target.txt
        //Such checks can be avoided when we use pipes ,
        //pipes handle data-flow, buffering, back-pressure automatically
        if (bytesRead !== 16384) {
            const indexOfNotFilled = readResult.buffer.indexOf(0)
            const newBuffer = Buffer.alloc(indexOfNotFilled)
            readResult.buffer.copy(newBuffer, 0, 0, indexOfNotFilled)
            await writeFileHandler.write(newBuffer)
        } else {
            await writeFileHandler.write(readResult.buffer)
        }
    }
}



(async () => {
    await copyFileWithoutStreamCopyFunc()
})()