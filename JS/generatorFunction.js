
/**
 Generator function is a function to generate many values over time by returning an object 
 which can be iterated over to pull values from the function one value at a time.
 */

function* infiniteNumbers() {
    let n = 1
    while (true) {
        yield n++;
    }
}

const numbers = infiniteNumbers()
console.log(numbers.next()) //{value: 1, done: false}
console.log(numbers.next()) //{value: 2, done: false}
console.log(numbers.next()) //{value: 3, done: false} so on.....

//Numbers is been used in for..of indicates its an iterable , for..of implements next() internall
for (let i of numbers) {
    console.log(i)
}

