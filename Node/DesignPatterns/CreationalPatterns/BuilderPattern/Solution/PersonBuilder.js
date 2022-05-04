const Person = require('./Person');

class PersonBuilder {

    constructor(name) {
        this.name = name
    }

    withEmployee() {
        this.isEmployee = true
        return this
    }
    withHours(hours) {
        this.hours = hours
        return this
    }
    withMoney(money) {
        this.money = money
        return this
    }
    withShopper() {
        this.isShopper = true
        return this
    }
    withShopList(list) {
        this.list = list
        return this
    }

    build() {
        return new Person(this)
    }

};

module.exports = PersonBuilder
