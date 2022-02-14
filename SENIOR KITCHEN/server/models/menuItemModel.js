const config = require('config')
const mongoose = require('mongoose')

const typeOfMeal = config.get('typeOfMealsEnum')
const collectionName = config.get('mongoCreds.menuCollection')

const menuItemSchema = mongoose.Schema({
    itemId: Number,
    date: String,
    label: String,
    desc: String,
    shortDesc: String,
    price: Number,
    typeOfMeal: { type: String, enum: typeOfMeal },
  })

  const MenuItemModel = mongoose.model('MenuItem', menuItemSchema, collectionName)

  module.exports = MenuItemModel