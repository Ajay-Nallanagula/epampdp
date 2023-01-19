console.log("Web Worker Example")
console.log('IN CASE OF WORKER GLOBAL OBJECT IS WORKER ITSELF, HENCE USE SELF')

const someLongTask = (msg) => {
    console.log(msg)
}

self.onmessage = function (e) {
    let sum = 0
    //Some CPU Intensive Operation or Image Processing,Video Processing, Audio Processing etc
    for (let i = 0; i < e.data; i++) {
        sum += i
        console.log({ [`iteration_${i}`]: sum })
    }

    //Considering, 'IN CASE OF WORKER GLOBAL OBJECT IS WORKER ITSELF, HENCE USE SELF'
    //We don't even have to use self here
    postMessage(sum)
}


