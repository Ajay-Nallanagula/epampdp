const PersonBuilder = require('./PersonBuilder');

/**
 */
//const employee = new Person('Ajay',false,false,30,1000)

const employee = new PersonBuilder('Ajay').withEmployee().withHours(30).withMoney(1000).build()

const shopper = new PersonBuilder('Divya').withMoney(100).withShopper().withShopList(['Jeans','Shirt']).build()

console.log(employee.toString())
console.log(shopper.toString())