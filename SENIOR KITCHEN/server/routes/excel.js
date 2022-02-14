const express = require('express')
const router = express.Router()

router.get('/convertExcelToJson', (req, res) => {
    res.send('convertExcelToJson')
})

module.exports = router