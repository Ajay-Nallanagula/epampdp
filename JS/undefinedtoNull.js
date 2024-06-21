// undefinedToNull({a: undefined, b: 'BFE.dev'})
// // {a: null, b: 'BFE.dev'}

// undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']})

function undefinedToNull(obj) {
    const isArray = arr => Array.isArray(arr)
    const isUndefined = val => val === undefined
    const isObject = val => typeof val === 'object' && val !== null
    const changeArryItem = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (isObject(arr[i])) {
                undefinedToNull(arr[i])
            } else if (isUndefined(arr[i])) {
                arr[i] = null
            }
        }
    }

    if (isArray(obj)) {
        changeArryItem(obj)
    } else {
        const keys = Object.keys(obj)
        keys.forEach(key => {
            if (isUndefined(obj[key])) {
                obj[key] = null
            } else if (isArray(obj[key])) {
                changeArryItem(obj[key])
            } else if (isObject(obj[key])) {
                undefinedToNull(obj[key])
            }

        })
    }
    return obj
}

const test = ['BFE.dev', undefined, null, { a: ['BFE.dev', undefined] }]
console.log(undefinedToNull(test))