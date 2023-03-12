https://springframework.guru/gang-of-four-design-patterns/

Design Patterns in JQUERY:
https://www.patterns.dev/posts/classic-design-patterns/

AntiPatterns:
https://www.patterns.dev/posts/classic-design-patterns/#antipatterns

Creational Patterns: How objects are created
Creational design patterns are concerned with the way of creating objects. These design patterns are used when a decision must be made at the time of instantiation of a class
https://www.javatpoint.com/creational-design-patterns

Structural Patterns: How the objects are composed (instance functions, variables)
Structural design patterns are concerned with how classes and objects can be composed, to form larger structures.
The structural design patterns simplifies the structure by identifying the relationships.
These patterns focus on, how the classes inherit from each other and how they are composed from other classes.
https://www.javatpoint.com/structural-design-patterns

Behavioral Patterns: How the Object communicate with external sources
Behavioral design patterns are concerned with the interaction and responsibility of objects.
In these design patterns, the interaction between the objects should be in such a way that they can easily talk to each other and still should be loosely coupled.
That means the implementation and the client should be loosely coupled in order to avoid hard coding and dependencies.
https://www.javatpoint.com/structural-design-patterns

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
