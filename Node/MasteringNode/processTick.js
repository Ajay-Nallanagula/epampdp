const event = require('events')

const getEmmiter = () => {
    const emitter = new event.EventEmitter()
    emitter.emit('start')
    return emitter
}

const newEmitter = getEmmiter()
newEmitter.on('start', () => {
    console.log('Started')
})

// let racer = function () {
//     setTimeout(() => console.log("timeout"), 0);
//     setImmediate(() => console.log("immediate"));
//     process.nextTick(() => console.log("nextTick"));
//     console.log("current event loop");
// }

// racer()

/*
let racer1 = function () {
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
    process.nextTick(() => console.log("nextTick"));
}

let racer2 = function () {
    process.nextTick(() => console.log("nextTick"));
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
}

let racer3 = function () {
    setImmediate(() => console.log("immediate"));
    process.nextTick(() => console.log("nextTick"));
    setTimeout(() => console.log("timeout"), 0);
}

racer1()
racer2()
racer3()
*/

// setTimeout(() => console.log('a) timer with 1000s', 1000))
// setTimeout(() => console.log('b) timer with 1001s', 999))

setTimeout(() => console.log('End of program'), 100)
const intervalId = setInterval(() => { console.log('set interval 1s') }, 1000)
intervalId.unref() //This will terminate the process