class Observable {
    constructor() {
        this.observers = []
    }

    addObservers(obrs) {
        //Here observer is a function
        this.observers.push(obrs)
    }

    notifyObservers(...args) {
        this.observers.forEach(obs => {
            obs(...args)
        });
    }
}

class UserList extends Observable {
    constructor() {
        super()
    }

    registerUser(user) {
        console.log('NEW USER REGISTERED!!')
        this.notifyObservers(user)
    }
}

//All observers, external sorces intrested in new user

const sendEmailToUser = (user) => {
    console.log(`Email is sent to ${user.name}!!`)
}

const sendSMSToUser = (user) => {
    console.log(`SMS is sent to ${user.name}!!`)
}

const applyFirstUserDiscount = (user) => {
    console.log(`Dear ${user.name} discount of 30% is given!!`)
}

//register observers
const registerNewUser = (user) => {
    const userList = new UserList()

    userList.addObservers(sendEmailToUser)
    userList.addObservers(sendSMSToUser)
    userList.addObservers(applyFirstUserDiscount)

    userList.registerUser(user)
}

registerNewUser({ name: 'AjayNallanagula', age: 30 })