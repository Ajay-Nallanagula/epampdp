const userFactory = require('./userFactory')
/*
    Now if you see, the object creation responsibility is given to userFactory[Like an Interface/Utility]
    the imports are reduced , user can decide which instance he needs .
    How is this decided , which class instace to be created, its based on User Input
*/

const shopper = userFactory('Shopper', 'Ajay', 100, 'Tea')
shopper.toString()

const employee = userFactory('Employee', 'Emp1', 101, 'Level3')
employee.toString()

const department = userFactory('Department', 'Dept1', 'Logistics', 'Hyderabad')
department.toString()
