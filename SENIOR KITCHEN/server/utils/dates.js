const luxon = require('luxon')
const config = require('config')



const convertToLocaleDateString = (date) => {
    return new Date(date).toLocaleDateString()
}

const getTodaysDate = () => {
    return luxon.DateTime.now().toLocaleString()
}

const getPresentHours = () => {
    return new Date().getHours()
}

const findTypeOfMeal = () => {
    const typeOfMeals = config.get('typeOfMeals')
    const hours = getPresentHours()

    const lunch = typeOfMeals["lunch"]
    const dinner = typeOfMeals["dinner"]
    const breakfast = typeOfMeals["breakfast"]

    const isLunchTime = hours >= lunch.lunchStartTime && hours < lunch.lunchEndTime
    const isDinnerTime = hours >= dinner.dinnerStartTime

    let typeOfMealItem = breakfast.name
    if (isLunchTime) {
        typeOfMealItem = lunch.name
    } else if (isDinnerTime) {
        typeOfMealItem = dinner.name
    }
    return typeOfMealItem
}

module.exports = {
    convertToLocaleDateString,
    getTodaysDate,
    findTypeOfMeal
}