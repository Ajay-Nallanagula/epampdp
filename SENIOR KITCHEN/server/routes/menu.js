const config = require('config')
const menuItemModel = require('../models/menuItemModel')
const express = require('express')
const { findTypeOfMeal, getTodaysDate } = require('../utils/dates')
const router = express.Router()

const onGetMenu = (req, res) => {
    const menuItems = config.get('menu')
    res.send(menuItems)
}

const onGetTodaysMenu = async (req, res) => {
    const todaysDate = getTodaysDate()
    let typeOfMealItem = findTypeOfMeal()

    const items = await menuItemModel.find({ date: todaysDate, typeOfMeal: typeOfMealItem })
    if (items) {
        res.status(200).send(items)
    }
    res.status(500).send('OOps something wrong!!!')
}

router.get('/todaysMenu', onGetTodaysMenu)
router.get('/', onGetMenu)
module.exports = router