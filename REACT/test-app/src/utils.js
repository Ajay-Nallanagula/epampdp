import {
    MAX_PACKAGE,
    SECOND_MAX_PACKAGE,
    PACKAGE_TRANSLATION,
    AVAILABLE_PACKAGES,
} from './kitchenConstants.js'

const fetchQuotitentRemainder = (quantity, maxPackage) => {
    const quotitent = Math.floor(quantity / maxPackage)
    const remainder = quantity % maxPackage
    return { quotitent, remainder }
}

export const claculatePackageMax10 = (quantity, menuItem) => {
    const { quotitent, remainder } = fetchQuotitentRemainder(quantity, MAX_PACKAGE)
    if (remainder !== 0) {
        const calculatePackageLessThan10 = calculatePackages(remainder, menuItem)
        return { ...calculatePackageLessThan10, boxSize_10: quotitent }
    }
    return { boxSize_10: quotitent, menuItem }
}

export const calculatePackages = (quantity, menuItem) => {
    //Divide any number with x, the remainder will always be less than x, hence 
    const { quotitent, remainder } = fetchQuotitentRemainder(quantity, SECOND_MAX_PACKAGE)
    if (remainder !== 0) {
        return { boxSize_4: quotitent, [`boxSize_${remainder}`]: 1, menuItem }
    }
    return { boxSize_4: quotitent, menuItem }

}

export const calculateCumulativeTotal = (cumulative, menuCollation, menuItem) => {
    const individualCurryItem = menuCollation[menuItem]
    const collectiveCurryItem = cumulative[menuItem]
    if (!collectiveCurryItem) {
        cumulative[menuItem] = individualCurryItem
        return cumulative
    }

    const individualCurryItemKeys = Object.keys(individualCurryItem)
    individualCurryItemKeys.forEach(itemKey => {
        if (itemKey !== 'menuItem') {
            const isBoxSizeExisting = !!collectiveCurryItem[itemKey]
            if (isBoxSizeExisting) {
                const collectiveCurryItemQty = collectiveCurryItem[itemKey]
                collectiveCurryItem[itemKey] = individualCurryItem[itemKey] + collectiveCurryItemQty
            } else {
                collectiveCurryItem[itemKey] = individualCurryItem[itemKey]
            }
        }
    })
    return { ...cumulative, [menuItem]: collectiveCurryItem }
}

export const displayPackageList = (eachItemObject) => {
    const packedItems = Object.keys(eachItemObject).map((iKey) => {
        return `${PACKAGE_TRANSLATION[iKey]}:  ${eachItemObject[iKey]}`
    })

    return packedItems
}

/*
export const testTrial = (quantity, menuItem, maxPackage,resultingPackage ={}) => {
    const { quotitent, remainder } = fetchQuotitentRemainder(quantity, maxPackage)
    if (quotitent > 0) {
        resultingPackage = { ...resultingPackage, [`boxSize_${maxPackage}`]: quotitent }
    }
    if (remainder === 0) {
        return resultingPackage
    }
    //remainder can be 9,8,7,6,5,4,3,2,1
    const newMax = Math.max(...AVAILABLE_PACKAGES)
    const newResult = testTrial(remainder, menuItem, newMax, resultingPackage)
    return resultingPackage



}
*/