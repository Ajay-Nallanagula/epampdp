//const { Worker } = require('worker_threads');

console.log("main.js --> Web Worker Example")
console.log("CHROME DOESN'T ALLOW YOU TO LOAD LOCAL FILES AS WORKERS!")
console.log("Run with LiveServer or Nodeserver".toUpperCase())

$("#btnBgColor").click(() => {
    const body = $("body")
    const background = document.body.style.background
    if (background === 'pink') {
        body.css("background", 'turquoise')
    } else {
        $("body").css("background", 'pink')
    }
})

const myWebWorker = new Worker('http://localhost:5500/JS/Workers/Webworker/webWorker.js', { type: 'module' })

$("#btnCalculateSum").click(() => {
    // let sum = 0
    // for (let i = 0; i < 100000; i++) {
    //     sum += i
    //     console.log({ [`iteration_${i}`]: sum })
    // }


    myWebWorker.postMessage(100000)
    alert(sum)
})

myWebWorker.onmessage = (e) => {
    alert(`SUM is ${e.data}`)
}

//"CHROME DOESN'T ALLOW YOU TO LOAD LOCAL FILES AS WORKERS!, Run With Live server.


//send message to worker.js
// myWebWorker.postMessage('ParamsForLongTask')

// //get message from worker.js
// myWebWorker.onmessage = function (e) {
//     console.log(e.data)
// }
