class User {
    constructor(name) {
        this.name = name
    }
    say() {
        console.log(`User: ${this.name}`)
    }
}

//Address extended, What if PhoneNumber, Contact details added, we will have to create another class here
class UserWithAddress extends User {
    constructor(name, address) {
        super(name)
        this.address = address
    }

    say() {
        console.log(`Dec: ${this.name}-${this.address}`)
    }
}

(function run() {
    const userAddr = new UserWithAddress('Ajay', 'Neredmet')
    userAddr.say()
})()