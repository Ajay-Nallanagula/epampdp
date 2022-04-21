const Person = require('./Person');

/**
 * https://stackoverflow.com/questions/328496/when-would-you-use-the-builder-pattern
 1) The problem here is a person ctor is a complex object with many params, this is called a s telescoping ctor
 2) For an onlooker, the "false, 30,1000" doesn't make any  sense , ehich can be maintainability hazard
 3) To compose the comple object instantiation we need Builder pattern.
 */
const employee = new Person('Ajay',false,false,30,1000)

const shopper = new Person('Divya',false,false,0,100,['Jeans','Shirt'],true)

console.log(employee.toString())
console.log(shopper.toString())