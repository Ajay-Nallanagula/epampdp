const PACKAGES = [1, 2, 3, 4]
const MAX_PACKAGE = 4

const PACKAGE_TRANSLATION = {
    boxSize_4: 'PACKET_4',
    boxSize_2: 'PACKET_2',
    boxSize_3: 'PACKET_3',
    boxSize_1: 'PACKET_1'
}

export const calculatePackages = (quantity, menuItem) => {
    if (isQuantityLessOrEqualToPackage(quantity)) {
        const size = PACKAGES.find(packageNum => packageNum === quantity)
        return { [`boxSize_${size}`]: 1, menuItem }
    }

    const quotitent = Math.floor(quantity / MAX_PACKAGE)
    const remainder = quantity % MAX_PACKAGE
    // const boxSize = calculatePackages(remainder)
    if (remainder !== 0) {
        return { boxSize_4: quotitent, [`boxSize_${remainder}`]: 1, menuItem }
    }
    return { boxSize_4: quotitent, menuItem }

}

const isQuantityLessOrEqualToPackage = (quantity) => {
    return quantity <= MAX_PACKAGE
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
