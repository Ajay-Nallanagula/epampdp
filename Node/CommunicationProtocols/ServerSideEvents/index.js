const express = require('express')
const app = express()
app.get("/", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Content-type', 'text/event-stream')

    send(res)
})

let i = 0
function send(res) {
    setTimeout(() => {
        //To signify this is an event we give "\n\n, else the stream will not work."
        res.write("data: " + `hello${i++}\n\n`)
        // res.write("data: " + `hello${i++}`)
        send(res)
    }, 1000)
}

app.listen(8080, () => {
    console.log('Server is listening at port 8080')
})
