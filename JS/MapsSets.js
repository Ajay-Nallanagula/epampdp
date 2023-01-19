const h = '🙂 '

const burger = '🍔 '
//alert(burger)

//polyfill for map
Array.prototype.myMap = function (cb) {
    //this here is an array on which map is called
    let arr = []
    for (let i = 0; i < this.length; i++) {
        const transformedItem = cb(this[i], i, this)
        arr.push(transformedItem)
    }
    return arr
}

// const newArr = [1, 2, 3].myMap(i => i * 2)
// console.log(newArr)

//polyfill for filter
Array.prototype.myFilter = function (cb) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        const isQualified = cb(this[i], i, this)
        if (isQualified) {
            arr.push(this[i])
        }
    }
    return arr
}

const newArr = [2, 4, 6, 7].myFilter(i => i % 2 === 0)
console.log(newArr)


function imperative_sorted(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}

const declarative_Sort = arr => arr.sort()

console.log("sorted-Imperative", imperative_sorted([9, 3, 8, 1, 7]))

console.log("sorted-Declarative", declarative_Sort([9, 3, 8, 1, 7]))