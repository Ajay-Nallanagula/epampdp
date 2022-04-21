Problem: In this case if you see there is a Logger instance in each of Store.js and Shoppers.js .
Index.js gives the count of only two log messages, though the logs printing are 4
What if we want the count of all the logs in different classes ?

Solution : Singleton Implementation

Usecases for Singleton
--> Database connections, where the connectivity can be done once
--> Logging
--> Caching

Two ways in Javascript
--> Write a Singleton class
--> Export instance of logger itself

https://www.linkedin.com/learning/node-js-design-patterns/singletons-in-node?autoSkip=true&autoplay=true&resume=false&u=2113185

What is "instance" keyword in JS?
class SingleTon{
constructor(){
if(!SingleTon.instance){
SingleTon.instance = {name:'Ajay'}
console.log('instance works',SingleTon.instance)
}
}

getInstance(){
return SingleTon.instance
}
}
module.exports = Singleton

console.log('BEFORE', SingleTon)
const s = new SingleTon()
console.log('AFTER',s.getInstance())
