const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()


//schema
const genresSchema = new mongoose.Schema({
    name: {
        type: String,
    }
})


const Genre = mongoose.model('Genre', genresSchema)

const findAllGenres = async () => {
    return await Genre.find()
}

const findGenreById = async (id) => {
    return await Genre.findById(id)
}

router.get('/', async (req, res) => {
    const resp = await findAllGenres()
    res.send(resp)
})

router.post('/', async (req, res) => {
    const genre = new Genre()
    genre.set({ name: req.body.genre.name })
    const result = await genre.save()
    console.log(result)
    const resp = await findAllGenres()
    res.send(resp)
})

router.put('/:id', async (req, res) => {
    const genreId = req.params.id
    const updateResponse = await Genre.findByIdAndUpdate(genreId, { name: 'RomCom' }, { new: true })
    const resp = await findAllGenres()
    res.send(resp)
})

router.delete('/:id', async (req, res) => {
    const genreId = req.params.id
    await Genre.findByIdAndDelete(genreId)
    const resp = await findAllGenres()
    res.send(resp)
})

// exports.genresSchema = genresSchema
// exports.Genre = Genre
module.exports = { router, genresSchema, Genre }