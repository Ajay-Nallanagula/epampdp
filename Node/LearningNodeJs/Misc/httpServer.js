let http = require('http')
const { createReadStream } = require('fs')
const { Readable, Duplex, Writable } = require('stream')

class TemplateStream extends Writable {
    constructor(message, res) {
        super({ encoding: 'utf-8' })
        this.message = message
        this.res = res
    }

    _write(chunk, encoding, callback) {
        // if (this.index > this.fileContent.length) {
        //     const formattedChunk = chunk.toString().replace('{message}', this.message)
        //     this.index += 1000
        //     this.push(formattedChunk)
        // } else {
        //     this.push(null)
        // }

        const formattedChunk = chunk.toString().replace('{message}', this.message)
        if (this.res.writable) {
            // console.log({ formattedChunk })
            this.write(formattedChunk)
            this.res.write(formattedChunk)
            this.res.end()
        }
    }


}

http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' })

    const templateStreaam = new TemplateStream('REPLACED FROM WRITE STREAM', res)
    // templateStreaam.on('data', (chunk) => {
    //     console.log(chunk.toString())
    // })

    // const readStream = createReadStream('./index.html', { encoding: 'utf-8', highWaterMark: 1000 })
    // readStream.on('data', (chunk) => {
    //     console.log({ chunk: chunk.length })
    // })


    await createReadStream('./index.html', { encoding: 'utf-8' }).pipe(templateStreaam)
    // res.end('end .....')


}).listen(9005, () => {
    console.log('server is up and running....')
})