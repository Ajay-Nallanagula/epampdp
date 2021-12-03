const express = require('express')
const genres = require('./routes/genre')

const app = express()

//middlewares
app.use(express.json())
app.use('/api/genres', genres)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server listening at port: ${port}`)
})