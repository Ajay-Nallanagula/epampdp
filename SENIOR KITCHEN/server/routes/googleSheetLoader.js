const express = require('express')
const { loadSpreadSheetById } = require('../utils/googleSheetLoaderUtils')
const router = express.Router()

router.get('/', async (req, res) => {
    console.log('XXXXXXXXXXXXXXXXXXXXXXXX')
    // res.status(200).send()
    const { sheet, headerRow } = await loadSpreadSheetById()
    const rows = await sheet.getRows()
  // const result =  await rows[0].loadHeaderRow(1)
   //console.log({result})
    let arr = []
    // for (i = 0; i <= rows.length; i++) {
    //     console.log(Object.keys(rows[i]))
    // }
    //console.log(arr)
    res.json({ rowsLength: rows.length })
})

module.exports = router