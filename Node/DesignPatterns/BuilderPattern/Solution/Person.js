
class Person {
    constructor(builder) {
        this.name = builder.name
        this.isEmployee = builder.isEmployee
        this.isManager = builder.isManager
        this.hours = builder.hours

        this.money = builder.money

        this.isShopper = builder.isShopper
        this.list = builder.list
    }

    toString() {
        return JSON.stringify(this)
    }
}

module.exports = Person
