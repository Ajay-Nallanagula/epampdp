class User1 {
    constructor(name) {
        this.name = name
    }
    say() {
        console.log("User: " + this.name);
    }
}

class DecoratedUser1 {
    constructor(user, street, city) {
        this.user = user
        this.name= this.user.name
        this.street = street
        this.city = city
    }

    say() {
        console.log("Decorated User: " + this.name + ", " +
            this.street + ", " + this.city);
    }
}


function run() {

    var user = new User1("Kelly");
    user.say();

    var decorated = new DecoratedUser1(user, "Broadway", "New York");
    decorated.say();
}

run()
