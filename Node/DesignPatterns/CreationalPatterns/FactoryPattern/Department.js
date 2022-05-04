class Department {
    constructor(name, department, address) {
        this.name = name
        this.department = department
        this.address = address
    }

    toString() {
        console.table([this.name, this.department, this.address])
    }

}

module.exports = Department