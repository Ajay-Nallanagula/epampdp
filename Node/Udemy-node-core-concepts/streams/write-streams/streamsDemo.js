
/*
    What are streams?
    -----------------
    1) Streams are an abstract interface used in working with streams of data in NodeJs.
    2) Streaming is not only video-game streaming, movie-streaming, newsfeed streaming etc , 
       It can also be attributed to data-streaming.
    3) What is Data-Streaming? : Data that is flowing continously in the form of chunks. Like a river 
    4) In "problemWithManyWritesToFile.js" the data is written all at once , hence the performance is poor
    5) If we use streams , the writes will be more performant, In nodejs default chunk size is 16Kb .
    6) Consider the metaphor , students are streaming to the school to attend a farewell party
        That doesn't mean 500 students are entering all at once through the gate 
        Students enter in small groups(chunks) 5,10... 
    7) Nodejs use's streams for storage, network, memory , CPU I/O operations.

    Analogy : Copy/Paste 
    All 10GB data can be copied at once and pasted in another file, during the transit the data is in-memory
                                    OR
    All 10GB can can be streamed in chunks to the destination location , there would be many writes but still efficent.

    How are Streams built internally?
    ---------------------------------
    Consider a Parent Container, this Parent container have , events , properties and methods to access the Parent Container
    This Parent Container have a Child Container , This child container have a finite size of 16KB(16384) by default
    The size can be changed .
    In the above definition the Parent Container is stream object , which we get when we use read/write methods
    other types of streams are duplex and transform stream .
    The Child container inside Parent Container is Buffer, whose size is 16KB.

     Explained in The code below :
     ----------------------------
     How will we know we have reached 16KB limit?
     console.log(`stream.write will return a boolean value , true if we can write , false if data to be drained
                  indicates buffer inside stream is full or not:  ${stream.write(buff)}`)
    
    What will happen when we reach 16KB limit ?
    --------------------------------------------
    The default size is 16KB and you are trying to fill the size of 20KB , it will cause "back-pressure"
    20KB-16KB = 4KB, this 4KB will be moved to memory(RAM), thus a performance hit 
    this 4KB will find its place in stream-buffer , when the filled 16KB is "drain" out.

    What is "drain"?
    When the stream-buffer is full reached 16KB limit, we should drain the buffer to some outlet 
    like file or some other data-source , So we have stream event called as drain.
    
     stream.on("drain", () =>{
        console.log("All the data is drained out !!!!")
     })

    
*/

const fs = require("node:fs/promises")
const { Buffer } = require("node:buffer")

//Take around 500-600ms , faster then file.write
async function writeWithStreams(path) {
    console.log("In streams data is written as chunks.")
    const fileHandler = await fs.open(path, 'w')
    const stream = fileHandler.createWriteStream()

    /*
     const buff = Buffer.alloc(10, 'Ajay')
     stream.write(buff) 
     console.log(`Buffer data: ` + buff)
 
     console.log(`The default size of the buffer in bytes inside the stream: ${stream.writableHighWaterMark}`)
     console.log(`The size of the Buffer that is filled ${stream.writableLength}`)
     */

    /*
    let drainHitCount = 0
    console.log("How will we Know we Reached 16KB Limit?")
    const buff = Buffer.alloc(16384, 'Ajay')
    console.log(`The default size of the buffer in bytes inside the stream: ${stream.writableHighWaterMark}`)
    console.log(`BEFORE WRITE: The size of the Buffer that is filled ${stream.writableLength}`)
    console.log(`stream.write will return a boolean value , true if we can write , false if data to be drained
         indicates buffer inside stream is full or not:  ${stream.write(buff)}`)
    console.log(`AFTER WRITE: The size of the Buffer that is filled ${stream.writableLength}`)

    stream.on("drain", () => {
        drainHitCount++
        console.log("All the data is drained out. get ready to fill again !!!")

        const buff = Buffer.alloc(16384, 'Vijay')

        //If we don't mention this condition, this will end up in infinite loop
        if (drainHitCount < 3) {
            stream.write(buff)
            console.log(`drainHitCount: ${drainHitCount} inside drain , 
                     stream.write will trigger drain again once buffer is full!!`)
            if (drainHitCount === 2) {
                stream.close(() => {
                    console.log('Stream is close for writing')
                })
            }
        }
    })
*/




    console.time("write Many")

    let i = 0
    const writeMany = () => {
        while (i < 1000000) {
            const buffer = Buffer.from(`${i} `, 'utf-8')
            i++;

            if (i === (1000000 - 1)) {
                //stream.end will emit "finish" even which is used to unsubscribe/close etc
                return stream.end(() => {
                    console.log("Data written to stream, Data flow ended")

                })
            }

            if (!stream.write(buffer)) {
                break;
            }
        }
    }


    writeMany();

    //Internal buffer is emptied 
    stream.on("drain", () => {
        // console.log(`The stream-buffer has reached the default thresold limit of ,
        //             writableHighWaterMark: ${stream.writableHighWaterMark} & writableLength:${stream.writableLength}`)
        writeMany()
    })

    stream.on("finish", () => {
        fileHandler.close()
        console.timeEnd("write Many")
    })



}

(async () => {
    await writeWithStreams("test.txt")
})()
