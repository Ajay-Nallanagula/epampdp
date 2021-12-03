const express = require('express')
const middleware1 = require('../restdemo/testMiddleware')
const app = express()

//console.log(middleware1.nested())
app.use(middleware1())
app.use(express.static('public')) //http://localhost:9000/readme.txt

//console.log(process.env.NODE_ENV)
console.log(app.get('env'))
console.log(app.get('app_Pwd'))

app.get('/', (req, res) => {
    res.send('From express')
    res.end()
})

app.get('/api/contacts/:contactid/:name', (req, res) => {
    res.send(req.params.name)
    res.end()
})

// app.post('/contacts', (req, res) => {
//     console.log(req.body)
//     res.write('Posted message')
//     res.end()
// })

const port = process.env.PORT || 9000
app.listen(port, () => {
    console.log('listening on port ' + port)
})






/*const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world')
        res.end('stream endeded')
    }
    console.log('server created')
})
server.on('connection', () => {
    console.log('connection established')
})

server.listen('9000', () => {
    console.log('server accepting requests on port 9000')
})*/