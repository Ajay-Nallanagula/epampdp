//https://medium.com/@adityakashyap_36551/the-pub-sub-pattern-event-management-in-javascript-17196444ca2f

/*
The Publish-Subscribe (PubSub) pattern is a messaging pattern where senders (publishers) send messages without targeting them to specific receivers (subscribers), and receivers subscribe to event types
 and receive only messages of interest, all without direct coupling between the publishers and subscribers
*/

/*
Pubsub can also be implemented for EventBus related question 
*/

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
        //Below LOC Code to Unsubscribe
        const unsubscribe = () => {
            if (this.events[event]) {
                const index = this.events[event].findIndex(item => item === listener)
                this.events[event].splice(index, 1);
                //console.log('unsubscribe', this.events)
            }
        }

        return unsubscribe
    }

    publish(event, ...args) {
        this.events[event].forEach(evt => {
            evt(...args)
        });
    }

    //This method is not required
    displaySubscriptions(action) {
        const eveArr = this.events[action]
        if (eveArr?.length) {
            this.events[action].forEach(eve => {
                console.log(`Subscribed to ${eve.name}`)
            })
        } else {
            console.log('No events are subscribed!!!')
        }
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

//Message-Broker or Event-Bus
const registerUser = (user) => {
    //Both publisher/subscriber must rely on this object to interact
    pubsub.publish("USER:REGISTER", user)
}
registerUser({ name: 'AjayNallanagula', age: 30 })
