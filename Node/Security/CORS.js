const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send('Server is running!!')
})

app.options('/', (_, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.sendStatus(204)
})

app.listen('9090', () => {
    console.log('http://localhost:9090')
})