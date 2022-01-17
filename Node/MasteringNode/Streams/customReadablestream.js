const { Readable } = require('stream')
const peaks = [
    "Tallac",
    "Ralston",
    "Rubicon",
    "Twin Peaks",
    "Castle Peak",
    "Rose",
    "Freel Peak"
];

//Streams is an abstraction on top of buffers
class StreamFromArray extends Readable {
    constructor(arr) {
        //If we don't pass encoding the chunk in the console is seen as in binary mode
        //using encoding we can read the chunks as strings 
        // super({ encoding: "UTF-8" })
        super({ objectMode: true }) //@@@_ObjectMode
        this.arr = arr
        this.index = 0
    }

    //This method is called iteratively when chunk by chunk is read
    _read() {
        if (this.index <= this.arr.length) {
            // const chunk = this.arr[this.index]
            //uncomment @@@_ObjectMode when object mode is true, chunk can be anytype of the object
            const chunk = {
                name: this.arr[this.index],
                index: this.index
            }
            this.push(chunk)
            this.index = ++this.index
        } else {
            //When you pass null to the stream it means its the end of file .
            this.push(null)
        }
    }
}

const arrayStream = new StreamFromArray(peaks)
//All the streams have base class as EventEmitter
arrayStream.on('data', (chunk) => {
    console.log({ chunk })
})
arrayStream.on('end', () => {
    console.log('Stream Reading completed')
})