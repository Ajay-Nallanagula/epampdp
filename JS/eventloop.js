console.log(1)
setTimeout(() => console.log(2), 0)
Promise.resolve().then(() => console.log(3))
Promise.resolve().then(() => setTimeout(() => console.log(4), 0))
Promise.resolve().then(() => Promise.resolve().then(() => console.log(99)))
Promise.resolve().then(() => console.log(5))
setTimeout(() => console.log(6), 0)
console.log(7)

//O/p:  1, 7, 3, 5,99, 2,6,4