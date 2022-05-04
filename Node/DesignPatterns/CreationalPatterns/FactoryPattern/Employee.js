class Employee {
    constructor(name, id, designation) {
        this.name = name
        this.id = id
        this.designation = designation
    }

    toString() {
        console.table([this.name, this.id, this.designation])
    }

}

module.exports = Employee