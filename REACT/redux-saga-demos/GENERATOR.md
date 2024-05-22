https://javascript.info/async-iterators-generators 
https://javascript.info/generators

async and await Implementation
https://akashhamirwasia.com/blog/internals-of-async-await-in-javascript/

**What are generator functions** ?
https://www.youtube.com/watch?v=EzdgkEMvrvA



**What is javascript iterator pattern with example how is generator function linked with Iterator pattern?**
The iterator pattern is a design pattern in which an iterator is used to traverse a container and access the container's elements. It provides an access method to the elements without necessarily exposing the details of the underlying structure.

In JavaScript, the iterator pattern can be implemented through the use of special objects, known as iterators. These iterators provide a next() method that returns the next value in the sequence. If there are no more items to return, it will return a done value of true.

Here's an example:

javascript


let myArray = [1, 2, 3, 4, 5];
let iterator = myArray[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
// ....
console.log(iterator.next()); // { done: true }
The relation between a generator function and the iterator pattern is that a generator function returns a special type of iterator, called a generator. You can then iterate through the yielded values from the generator function, like this:

javascript


function* generatorFunc(){
   yield 1;
   yield 2;
   yield 3;
}
      
let generator = generatorFunc();
      
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { done: true }

In this case, the generator function - generatorFunc - is creating an iterator. When next method is called, execution resumes and goes until the nearest yield expression, where the function's state is saved and paused, and the yielded value is returned. This continues till the function ends. After which, when next is called, { done: true } is returned. This behavior enables the generator to be an iterator that can be used in a loop or other data consumption methods.

What are the usecases of Iterator function?
Iterators are key in JavaScript because they allow developers to access and manipulate collections of data.

Here are some use cases:

Working with Collection Data Structures: Arrays, Maps, and Sets all have iterator methods so developers can easily retrieve data. Iterators are used to go through these types of collections, retrieve data one by one, and perform any necessary operations.

Lazy Evaluation: Because iterator's next method is manually invoked, you have finer control over when and how many items you want to process. This is particularly useful when working with large datasets as you can process only what you need, helping to improve performance by reducing the amount of processing power required.

Streams and Asynchronous Programming: Iterators can be applied in real-time data handling, like working with live feeds or streams. For example, generating a potentially infinite sequence of Fibonacci numbers as and when they are needed.

Data Manipulation: Iterator in combination with generator functions allow on-demand processing and manipulation of data sequences, such as filtering, mapping, combining, etc.

Custom Iteration: When creating custom data structures, you can rely on Symbol.iterator to define default iteration behavior, ensuring interoperability with higher-level libraries or language constructs that make use of the iteration protocols: Array destructuring, for/of loop, spread operator, Promise.all, etc.

Built-In Iterators: Many built-in JavaScript constructs, such as strings or NodeLists, can be iterated using iterators. Moreover, several advanced JS features and methods (like async/await and fetch API) make use of iterable protocol internally.

So, iterators can be used in many scenarios in JavaScript, especially when it comes to handling and managing data in a more efficient and elegant way.

How is async/await implemented with generators ?
The async/await syntax is built on top of Promises and generators. The async keyword makes a function return a Promise, and the await keyword can only be used inside an async function, it causes the function execution to pause and wait for a Promise's resolution, then resumes the function execution and returns the resolved value.

Here is a basic iteration example involving an async function:
const myPromiseFunc = (val, time) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(val);
    }, time)
  );

const arr = [1, 2, 3, 4, 5];

async function asyncIter(arr) {
  const iter = arr[Symbol.iterator]();

  while (true) {
    const { done, value } = iter.next();

    if (done) break;

    const newValue = await myPromiseFunc(value, 2000);
    console.log(newValue);
  }
}

asyncIter(arr);    // Will log 1, 2, 3, 4, 5 at 2-second intervals