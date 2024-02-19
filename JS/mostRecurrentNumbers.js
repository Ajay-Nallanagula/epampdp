/*
Finding the Most Frequently Occurring Number
Given an array of numbers, find the most recurrent number.

For example, given [1, 2, 3, 4, 3], your algorithm should return 3, 
as it has the highest level of recurrence. For ties, return the first found more 
recurrent number.
*/
const mostRecurrent = (arr) => {
    const uniqueNumbers = new Set([...arr])
    return [...uniqueNumbers].reduce((acc, item) => {
        const occurrence = arr.filter(i => i === item).length
        if (acc.occurrence < occurrence) {
            acc = { number: item, occurrence }
        }
        return acc

    }, { number: null, occurrence: 0 })
}

console.log(mostRecurrent([1, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5]))