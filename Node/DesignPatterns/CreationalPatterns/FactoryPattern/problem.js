const Shopper = require('./Shopper')
const Employee = require('./Employee')
const Department = require('./Department')

/*
Look at the imports we are importing too many classes in this case.
Factory Pattern says creation  of object can be delegated to an interface/utility, let the user decide which object they want
*/
const shopper = new Shopper('Ajay',100,'Tea')
shopper.toString()

const employee = new Employee('Emp1',101,'Level3')
employee.toString()

const department = new Department('Dept1','Logistics','Hyderabad')
department.toString()

