
class Person {
    //This is called as Telescoping constructor pattern ANTI PATTERN
    constructor(name, isEmployee = false, isManager = false, hours = 0, money = 0, list, isShopper = false) {
        this.name = name
        this.isEmployee = isEmployee
        this.isManager = isManager
        this.hours = hours

        this.money = money

        this.isShopper = isShopper
        this.list = list
    }

    toString() {
        return JSON.stringify(this)
    }
}

module.exports = Person
