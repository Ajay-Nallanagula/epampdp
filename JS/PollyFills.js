
// MAP:
// ----
Array.prototype.myMap = function (cb, arr) {
    const newArr = []

    for (let i = 0; i < this.length; i++) {
        const result = cb.call(this, this[i], i, this)
        newArr.push(result)
    }
    return newArr
}

const arr1 = [1, 2, 3, 4]
const result1 = arr.myMap((item, index) => {
    console.log(index)
    return item + 1
})

console.log(result)

//Filter:
Array.prototype.myFilter = function (cb, arr) {
    const newArr = []

    for (let i = 0; i < this.length; i++) {
        const result = cb.call(this, this[i], i, this)
        if (result) {
            newArr.push(this[i])
        }
    }
    return newArr
}

const arr2 = [1, 2, 3, 4]
const result2 = arr.myFilter((item, index) => {
    console.log(index)
    return item % 2 === 0
})

console.log(result)

//REDUCE
Array.prototype.myReduce = function (cb, initAcc, arr) {
    let accumulator = initAcc

    for (let i = 0; i < this.length; i++) {
        if (!accumulator === undefined) { //Only undefined check here ,
            accumulator = this[i]
        } else {
            accumulator = cb.call(this, accumulator, this[i], i, this)
        }
    }
    return accumulator
}

const arr = [1, 2, 3, 4]
const result = arr.myReduce((acc, item, index) => {
    acc = acc + item
    return acc
}, 0)

console.log(result)