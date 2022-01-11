const express = require('express')
const router = express.Router()

let genres = [{ id: 1, genre: 'Horror' }, { id: 2, genre: 'Comedy' }]

router.get('/', (req, res) => {
    res.send(genres)
})

router.post('/', (req, res) => {
    const genre = req.body.genre
    genres = [...genres, { id: genres.length + 1, genre }]
    res.send(genres)
})

router.put('/:id', (req, res) => {
    const genreId = req.params.id
    const genre = req.body.genre
    genres = genres.reduce((acc, item) => {
        if (item.id === parseInt(genreId)) {
            return [...acc, { ...item, genre }]
        }
        return [...acc, item]
    }, [])
    res.send(genres)
})

router.delete('/:id', (req, res) => {
    const genreId = req.params.id
    genres = genres.reduce((acc, item) => {
        if (item.id !== parseInt(genreId)) {
            acc = [...acc, item]
        }
        return acc
    }, [])
    res.send(genres)
})

module.exports = router