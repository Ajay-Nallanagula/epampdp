const { Buffer } = require('node:buffer')

console.log("START_____________NOTES ON BUFFER__________________")
console.log(
    `
    Buffers allocate space in the memory, these are fixed size data structures.
    1) Nodejs reserves some space in the RAM for readily allocating the space when the buffers are used.
    2) The space is known as Buffer.poolsize, by default its 8 Kibibytes(1024 Bytes, 1000 Bytes is KiloBytes)
    3) When you do Buffer.poolsize >>> 1 it means Math.floor((8*1024)/2) i.e ">>>"(right-shift-operator), 
    4) 1110 0000 >>> 1  will beacome 0000 1110.
    5) Buffer.poolsize >>> 2  ===> Math.floor((8*1024)/4)
    6) Left-Shift-Operator:  Buffer.poolsize <<< 1  ===> Math.floor((8*1024)*2)
    7) When we use buffer.alloc , new memory will allocated which is not part of this buffer.poolsize
    8) When we use buffer.allocUnsafe() , memory will be allocated from this poolsize, filled with junk memory values
    9) When we use buffer.allocUnsafeSlow() , memory will be allocated from this poolsize, filled with nothing.
    10) buffer.from() and buffer.concat both use buffer.allocUnsafe() under the hood , and fill the buffer ASAP after instantiation.
    `
)
console.log("END_____________NOTES ON BUFFER________________\n\n")


//#region Buffer.allo
console.log("START_____________Demo Buffer.alloc()__________________")

console.log(` 1) This alloc is safe, by default all the bits are filled with 0 `)
console.log(` 2) You can also fill any other content by passing second parameter to alloc(size,fill) `)
console.log(` 3) The filling the content can take some time , so its time taking process`)

const memoryContainer = Buffer.alloc(3)

console.log(memoryContainer)//this will output in hexa-decimal
console.log(memoryContainer[0]) //this will output in decimal

memoryContainer[0] = 0x48
console.log(memoryContainer[0]) //this will output in decimal
memoryContainer[1] = 0x21
console.log(memoryContainer[1])

memoryContainer[2] = 0x69
console.log(memoryContainer[2])

console.log("memoryContainer: " + memoryContainer.toString())
console.log("Memory Size of the Buffer in Bytes: " + memoryContainer.length)
console.log("END________Demo Buffer.alloc()________________\n\n")
//#endregion Buffer.allo


//#region Buffer.allocUnsafe()
console.log("START_____________Demo Buffer.allocUnsafe()__________________")

console.log(` 1) This allocUnsafe is unsafe, it doesn't fill any data `)
console.log(` 2) This allocUnsafe as name suggests is unsafe, its gives some junk data stored in the memory by default `)
console.log(` 3) Hackers can exploit this data for their on use`)
console.log(` 4) Not suitable for sensitive applications`)
console.log(` 5) allocUnsafe()  is faster than alloc(), because fill is not there `)

const memoryUnsafeContainer = Buffer.allocUnsafe(3)

console.log(memoryUnsafeContainer)//this will output in hexa-decimal
console.log(memoryUnsafeContainer[0]) //this will output in decimal

memoryUnsafeContainer[0] = 0x48
console.log(memoryUnsafeContainer[0]) //this will output in decimal
memoryUnsafeContainer[1] = 0x21
console.log(memoryUnsafeContainer[1])

memoryUnsafeContainer[2] = 0x69
console.log(memoryUnsafeContainer[2])
console.log("END_____________Demo Buffer.allocUnsafe()__________________\n\n")
//#endregion Buffer.allocUnsafe()


//#region Buffer.concat()
console.log("START____________Demo Buffer.concat([list of buffers])____________")
const bufferConcat = Buffer.concat([memoryContainer, memoryUnsafeContainer])
console.log("BufferConcat Size: " + bufferConcat.length)
console.log("Buffer.concat creates new buffer, combining the list of buffers given ")

console.log("END____________Demo Buffer.concat([list of buffers])__________\n\n")
//#endregion Buffer.concat()


//#region Buffer.from()
console.log("START____________Demo Buffer.from([])____________")
//size is inferred , when we use from and space is allocated in below case 6*8=48 bits
const memoryFromContainer = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

console.log("memoryFromContainer: " + memoryFromContainer)
console.log("memoryFromContainer data is given in Decimal: " + memoryFromContainer[0])
console.log("memoryFromContainer data is given in Decimal: " + memoryFromContainer[1])
console.log("memoryFromContainer data is given in Decimal: " + memoryFromContainer[2])
console.log("memoryFromContainer data is given in Decimal: " + memoryFromContainer[3])
console.log("memoryFromContainer data is given in Decimal: " + memoryFromContainer[4])
console.log("memoryFromContainer data is given in Decimal: " + memoryFromContainer[5])
console.log("Memory Size of the Buffer in Bytes: " + memoryFromContainer.length)
console.log("END ___________Demo Buffer.from([])_________________\n\n")

//#endregion Buffer.from()