class PubSub {
    constructor() {
        this.events = {}
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = []
        }

        this.events[event].push(listener)
        //console.log(this.events[event])
        return () => { this.events[event] = this.events[event].filter(fn => fn.toString() != listener.toString()) }
    }

    publish(event, ...args) {
        this.events[event].forEach(evt => {
            evt(...args)
        });
    }
}

const sendEmailToUser = (user) => {
    console.log(`Email is sent to ${user.name}!!`)
}

const sendSMSToUser = (user) => {
    console.log(`SMS is sent to ${user.name}!!`)
}

const applyFirstUserDiscount = (user) => {
    console.log(`Dear ${user.name} discount of 30% is given!!`)
}

const pubsub = new PubSub()
//Every event is being triggered via custom events (a.k.a. channels) i.e "USER:REGISTER"
//Every observer subscribes to a specific channel i.e mail,SMS,discount
pubsub.on("USER:REGISTER", sendEmailToUser)
pubsub.on("USER:REGISTER", sendEmailToUser)
pubsub.on("USER:REGISTER", sendSMSToUser)
pubsub.on("USER:REGISTER", applyFirstUserDiscount)

const registerUser = (user) => {
    //Both publisher/subscriber must rely on this object to interact
    pubsub.publish("USER:REGISTER", user)
}
registerUser({ name: 'AjayNallanagula', age: 30 })
