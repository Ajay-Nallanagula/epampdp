import { STANDARD_PACKAGES, MENU_ITEMS, MEAL_TYPES, FULL_MEALS, FOILKEY_1PACK, VEG_CURRY } from './newPackageConstants.js'

const normalizeFullMeals = (fullMealsCustomerOrderData, finalResult) => {
    if (!fullMealsCustomerOrderData?.length) {
        return finalResult
    }
    const fullMealKeys = Object.keys(FULL_MEALS)

    fullMealsCustomerOrderData.forEach(fullMealsCustomerOrder => {
        const fullMealCount = fullMealsCustomerOrder['MealTypeCount'] || 1
        fullMealKeys.forEach(fullMealKey => {
            const menuItemVal = finalResult[fullMealKey]
            const foil1KeyVal = menuItemVal[FOILKEY_1PACK]
            finalResult[fullMealKey] = { ...menuItemVal, [FOILKEY_1PACK]: foil1KeyVal + (1 * fullMealCount) }
        })
    })

    return finalResult
}

const normalizeVegCurry = (vegCurryCustomerOrderData, finalResult) => {
    if (!vegCurryCustomerOrderData?.length) {
        return finalResult
    }
    const vegCurryKeys = Object.keys(VEG_CURRY)

    vegCurryCustomerOrderData.forEach(vegCurryCustomerOrder => {
        const vegCurryCount = vegCurryCustomerOrder['MealTypeCount'] || 1
        vegCurryKeys.forEach(vegCurryKey => {
            const menuItemVal = finalResult[vegCurryKey]
            const foil1KeyVal = menuItemVal[FOILKEY_1PACK]
            finalResult[vegCurryKey] = { ...menuItemVal, [FOILKEY_1PACK]: foil1KeyVal + (1 * vegCurryCount) }
        })
    })

    return finalResult
}

const filterBasedOnMealTypes = (customerOrderData) => {
    return customerOrderData.reduce((acc, item) => {
        switch (item['MealType']) {
            case 'FM': {
                acc.customerFullMeals = [...acc.customerFullMeals, item]
                break;
            }
            case 'VC': {
                acc.customerVegCurry = [...acc.customerVegCurry, item]
                break;
            }
            default: {
                acc.customerMenuItems = [...acc.customerMenuItems, item]
                break;
            }
        }
        return acc
    }, { customerFullMeals: [], customerVegCurry: [], customerMenuItems: [] })
}

const calculatePackagesBasedOnMealTypes = (customerFullMeals, customerVegCurry, finalResult) => {
    const updatedFullMealsFinalResult = normalizeFullMeals(customerFullMeals, finalResult)
    const updatedFullNVegCurryFinalResult = normalizeVegCurry(customerVegCurry, updatedFullMealsFinalResult)
    return updatedFullNVegCurryFinalResult
}


const updatePackagesFoodKeyExisting = (foilObj, foodPiecesRequiredFoilLabel, count) => {
    const isFoilKeyExisting = foilObj.hasOwnProperty(foodPiecesRequiredFoilLabel)
    if (!isFoilKeyExisting) {
        return {
            ...foilObj,
            [foodPiecesRequiredFoilLabel]: count + 1
        }
    }
    const valueInFoilObj = foilObj[foodPiecesRequiredFoilLabel]
    return {
        ...foilObj,
        [foodPiecesRequiredFoilLabel]: valueInFoilObj + count + 1
    }
}

export const generatePackageCount = (customerOrderData) => {
    const { customerFullMeals, customerVegCurry /*,customerMenuItems*/ } = filterBasedOnMealTypes(customerOrderData)
    let finalResult = {}
    //customerMenuItems is not considered because  There can be a usecase  where Customer can add FullMeals + Menu Items
    //customerMenuItems is not considered because  There can be a usecase where Customer can add VegCurry + Rice Items
    customerOrderData.forEach(item => {
        const itemKeys = Object.keys(item)
        itemKeys.forEach(foodKey => {
            if (MENU_ITEMS.includes(foodKey)) {
                let count = 0
                const foodPiecesRequired = item[foodKey]
                const foodPiecesRequiredFoilLabel = STANDARD_PACKAGES[foodPiecesRequired]
                //Check finalResult already have the foilLabel and its value 
                //if exists add the value, if not add new entry
                const isFoodKeyExisting = finalResult.hasOwnProperty(foodKey)
                if (!isFoodKeyExisting) {
                    finalResult[foodKey] = {
                        [foodPiecesRequiredFoilLabel]: count + 1
                    }
                } else {
                    finalResult[foodKey] = updatePackagesFoodKeyExisting(finalResult[foodKey], foodPiecesRequiredFoilLabel, count)//** */
                }
            }
        })
    });

    //Todo: Check Here if customerDataHave MEAL_TYPES
    const updatedFullNVegCurryFinalResult = calculatePackagesBasedOnMealTypes(customerFullMeals, customerVegCurry, finalResult)
    console.log(updatedFullNVegCurryFinalResult)
    return updatedFullNVegCurryFinalResult
}
































//**ACTUAL LOGIC IN METHOD */
/* const foilObj = finalResult[foodKey]
                   const isFoilKeyExisting = foilObj.hasOwnProperty(foodPiecesRequiredFoilLabel)
                   if (!isFoilKeyExisting) {
                       finalResult[foodKey] = {
                           ...foilObj,
                           [foodPiecesRequiredFoilLabel]: count + 1
                       }
                   } else {
                       const valueInFoilObj = foilObj[foodPiecesRequiredFoilLabel]
                       finalResult[foodKey] = {
                           ...foilObj,
                           [foodPiecesRequiredFoilLabel]: valueInFoilObj + count + 1
                       }
                   }*/