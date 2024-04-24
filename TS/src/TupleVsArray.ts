const arr = [1,2,3]
//TS type inference will show number[]
console.log(arr)

let tuple = ['Ajay',100]
//Type inference will still show  (string | number)[] an array
console.log(tuple) 
tuple = [100,'Ajay']
console.log(tuple) //Valid statement becaus TS treats this as an array 


let tuple2:[string,number] = ['Vijay',100]
console.log(tuple2) //Type Inference [string,number]
//tuple2 = [100,'A'] //Error , The order of types should be preserved
tuple2.unshift(10)
console.log(tuple2)

const arr2 = []
console.log(arr2) //Any array