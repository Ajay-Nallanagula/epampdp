const express = require('express')
const mongoose = require('mongoose')
const { genresSchema, Genre } = require('./genreMongoose')
const router = express.Router()



const movieSchema = mongoose.Schema({
    title: { type: String, required: true, trim: true, minlength: 3, maxlength: 255 },
    genre: { type: genresSchema, required: true },
    numberInStock: { type: Number, default: 0, required: true, maxlength: 255 },
    dailyRentalRate: { type: Number, default: 0, required: true, maxlength: 255 }
})
const Movie = mongoose.model('Movie', movieSchema)

const findAll = async () => {
    return await Movie.find()
}

const onGetMovies = async (req, res) => {
    const allMovies = await findAll()
    res.send(allMovies)
}

const onCreateMovies = async (req, res) => {
    const { title, genreId } = req.body
    const genre = await Genre.findById(genreId)
    if (!genre) {
        res.send('Valid Genre is Required')
    }

    const movie = new Movie()
    movie.set({
        title,
        genre: {
            _id: genre._id,
            name: genre.name
        }
    })
    const movieSaved = await movie.save()
    console.log('movieSaved', movieSaved)
    const allMovies = await findAll()
    res.send(allMovies)
}

const onEditMovies = (req, res) => {
    const movieId = req.params.id
    res.send(`MovieId : ${movieId}`)
}

const onDeleteMovies = (req, res) => {
    const movieId = req.params.id
    res.send(`MovieId : ${movieId}`)
}

router.get('/', onGetMovies)
router.post('/', onCreateMovies)
router.put('/:id', onEditMovies)
router.delete('/:id', onDeleteMovies)


module.exports = router