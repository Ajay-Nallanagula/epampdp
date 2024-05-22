


//The shortest Implementation of Iterator Pattern
const arr = [1, 2, 3, 4]
const iterator = arr[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
//{ value: undefined, done: true }
console.log(iterator.next())
/*
The relation between a generator function and the iterator pattern is 
that a generator function  returns a special type of iterator, called a generator. 
*/

function* generator1() {
    yield 100;
    yield 101;
    yield 102;
    //No return value for generator function 
}

function rungenerator1() {
    const result = generator1()
    /*
    In this case, the generator function - generatorFunc - is creating an iterator.
    When next method is called, execution resumes and goes until the nearest yield expression,
    where the function's state is saved and paused,  and the yielded value is returned. 
    This continues till the function ends.
    */

    let res = result.next()
    // let condition = false
    while (!res.done) {
        const { done, value } = res
        console.log(value, done)
        res = result.next()
    }
}
rungenerator1()


