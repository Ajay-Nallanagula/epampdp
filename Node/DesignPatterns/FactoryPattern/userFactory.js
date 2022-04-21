const Shopper = require('./Shopper')
const Employee = require('./Employee')
const Department = require('./Department')

const userFactory = (type, ...args) => {
    switch (type) {
        case 'Shopper':
            return new Shopper(...args)
        case 'Employee':
            return new Employee(...args)
        case 'Department':
            return new Department(...args)
        default:
            return new Error(`No class found with ${type}`)
    }
}

module.exports = userFactory