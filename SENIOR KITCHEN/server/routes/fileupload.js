const express = require('express')
const router = express.Router()
const formidable = require('formidable');
const menuItemModel = require('../models/menuItemModel')
const { convertExcelFileToJsonObject } = require('../services');
const { convertToLocaleDateString } = require('../utils/dates');

const onGetUploadPage = (req, res) => {
  const filePath = __dirname.replace('routes', 'public\\fileupload.html')
  res.sendFile(filePath)
}

const onPostMultipleMenuItems = (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      res.send('PLEASE CHECK UPLOAD THE FILE' + err.messsage);
    }
    const weekAllMealsObj = convertExcelFileToJsonObject(files.multipleFiles.filepath)
    console.log(weekAllMealsObj['Sheet1'])

    res.status(200).send(weekAllMealsObj['Sheet1'])
    //console.log(weekAllMealsObj)
    // try {
    //   Object.keys(weekAllMealsObj).forEach((key) => {
    //     return menuItemModel.insertMany(weekAllMealsObj[key]
    //       .map(dayMeals => ({ ...dayMeals, date: convertToLocaleDateString(dayMeals.date) })))
    //   })
    //   res.status(200).send('Uploaded Sucessfully!!')
    // } catch (error) {
    //   res.status(500).send('Upload failed, Please check the document!! ' + err.messsage)
    // }

  });

}

router.get('/', onGetUploadPage)
router.post('/', onPostMultipleMenuItems)

module.exports = router