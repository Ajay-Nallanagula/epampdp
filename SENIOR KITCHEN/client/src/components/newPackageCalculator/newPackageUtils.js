import {
    STANDARD_PACKAGES,
    MENU_ITEMS,
    MEAL_TYPES,
    FULL_MEALS,
    FOILKEY_1PACK,
    VEG_CURRY,
    MEAL_TYPE_KEY,
    VEG_CURRY_TYPE_COUNT,
    FULL_MEAL_TYPE_COUNT
} from './newPackageConstants.js'

const normalizeFullMeals = (fullMealsCustomerOrderData, finalResult) => {
    if (!fullMealsCustomerOrderData?.length) {
        return finalResult
    }
    const fullMealKeys = Object.keys(FULL_MEALS)

    fullMealsCustomerOrderData.forEach(fullMealsCustomerOrder => {
        const fullMealCount = fullMealsCustomerOrder[FULL_MEAL_TYPE_COUNT] || 1
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
        const vegCurryCount = vegCurryCustomerOrder[VEG_CURRY_TYPE_COUNT] || 1
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

const calculatePackagesBasedOnMealTypes = (customerFullMealsSeperatePack, customerVegCurrySeperatePack, finalResult) => {
    const updatedFullMealsFinalResult = normalizeFullMeals(customerFullMealsSeperatePack, finalResult)
    const updatedFullNVegCurryFinalResult = normalizeVegCurry(customerVegCurrySeperatePack, updatedFullMealsFinalResult)
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

const transformCustomerDataWithFullMeals = (item, fullMealTypeCount) => {
    let newItem = { ...item }
    const fullMealsKeys = Object.keys(FULL_MEALS)
    fullMealsKeys.forEach(fullMealsKey => {
        const individualMenuItemVal = item[fullMealsKey] || 0
        newItem = { ...newItem, [fullMealsKey]: individualMenuItemVal + (1 * fullMealTypeCount) }
    })
    return newItem
}

const transformCustomerDataWithVegCurries = (item, vegCurryTypeCount) => {
    let newItem = { ...item }
    const vegCurryKeys = Object.keys(VEG_CURRY)
    vegCurryKeys.forEach(vegCurryKey => {
        const individualMenuItemVal = item[vegCurryKey] || 0
        newItem = { ...newItem, [vegCurryKey]: individualMenuItemVal + (1 * vegCurryTypeCount) }
    })
    return newItem
}

const transformCustomerData = (customerOrderData) => {
    return customerOrderData.reduce((acc, item) => {
        if (!MEAL_TYPES.includes(item[MEAL_TYPE_KEY])) {
            acc.transformedCustomerData = [...acc.transformedCustomerData, item]
            return acc
        }
        const { MealType, IsMealsSeparatePack = 0, IsVegCurrySeparatePack = 0, FullMealTypeCount = 1, VegCurryTypeCount = 1 } = item
        const isFullMeals = MealType === 'FM'
        const isVegCurry = MealType === 'VC'
        const isBothMealType = MealType === 'FM-VC'

        if (isFullMeals || isBothMealType) {
            if (IsMealsSeparatePack) {
                acc.customerFullMealsSeperatePack = [...acc.customerFullMealsSeperatePack, item]
                //Even though Fullmeals are seperate, you can still independently order MENU_ITEMS, in that case default count to zero
                const newFullMealsItem = transformCustomerDataWithFullMeals(item, 0)
                acc.transformedCustomerData = [...acc.transformedCustomerData, newFullMealsItem]
            }
            else {
                const newFullMealsItem = transformCustomerDataWithFullMeals(item, FullMealTypeCount)
                acc.transformedCustomerData = [...acc.transformedCustomerData, newFullMealsItem]
            }
        }

        if (isVegCurry || isBothMealType) {
            if (IsVegCurrySeparatePack) {
                acc.customerVegCurrySeperatePack = [...acc.customerVegCurrySeperatePack, item]
                //Even though VegCurry are seperate, you can still independently order MENU_ITEMS, in that case default count to zero
                const newVegCurryItem = transformCustomerDataWithVegCurries(item, 0)
                acc.transformedCustomerData = [...acc.transformedCustomerData, newVegCurryItem]
            }
            else {
                const newVegCurryItem = transformCustomerDataWithVegCurries(item, VegCurryTypeCount)
                acc.transformedCustomerData = [...acc.transformedCustomerData, newVegCurryItem]
            }
        }

        return acc
    }, { transformedCustomerData: [], customerFullMealsSeperatePack: [], customerVegCurrySeperatePack: [] })
}

export const generatePackageCount = (customerOrderData) => {
    //  const { customerFullMeals, customerVegCurry /*,customerMenuItems*/ } = filterBasedOnMealTypes(customerOrderData)
    const { transformedCustomerData, customerFullMealsSeperatePack, customerVegCurrySeperatePack } = transformCustomerData(customerOrderData)
    let finalResult = {}
    //customerMenuItems is not considered because  There can be a usecase  where Customer can add FullMeals + Menu Items
    //customerMenuItems is not considered because  There can be a usecase where Customer can add VegCurry + Rice Items
    transformedCustomerData.forEach((item, itemIndex) => {
        const itemKeys = Object.keys(item)
        itemKeys.forEach(foodKey => {
            const foodPiecesRequired = item[foodKey]
            if (foodKey !== MEAL_TYPE_KEY && MENU_ITEMS.includes(foodKey) && foodPiecesRequired > 0) {
                let count = 0
                const foodPiecesRequiredFoilLabel = STANDARD_PACKAGES[foodPiecesRequired]
                //Check finalResult already have the foilLabel and its value 
                //if exists add the value, if not add new entry
                if (!foodPiecesRequiredFoilLabel) {
                    console.log('foodPiecesRequiredFoilLabel undef')
                }
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
    // return finalResult
    //Todo: Check Here if customerDataHave MEAL_TYPES and if they need SEPERATE_PACKS
    const updatedFullNVegCurryFinalResult = calculatePackagesBasedOnMealTypes(customerFullMealsSeperatePack, customerVegCurrySeperatePack, finalResult)
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