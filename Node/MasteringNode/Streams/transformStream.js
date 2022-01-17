const { Transform } = require('stream')

class ReplaceText extends Transform {
    constructor(char) {
        super()
        this.replaceChar = char
    }

    _transform(chunk, encoding, callback) {
        console.log('Original', chunk.toString())
        const replacedChunk = chunk.toString().replace(/[a-z][A-z]/g, this.replaceChar)
        this.push(replacedChunk)
    }

    _flush(callback) {
        this.push('More data is coming in')
        callback()
    }

}

const xStream = new ReplaceText('Z')
process.stdin.pipe(xStream).pipe(process.stdout)