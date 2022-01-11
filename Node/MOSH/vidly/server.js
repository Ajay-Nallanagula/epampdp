const express = require('express')
const mongoose = require('mongoose')
//const genres = require('./routes/genre')
const genres = require('./routes/genreMongoose')
const movies = require('./routes/movies')

const app = express()

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('VIDLY mongo db is connected'))
    .catch(err => console.error(err.message))

//middlewares
app.use(express.json())
app.use('/api/genres', genres.router)
app.use('/api/movies', movies)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server listening at port: ${port}`)
})