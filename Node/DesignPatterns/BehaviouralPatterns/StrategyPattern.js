//#Strategy1
class BankAccountTransfer {
    doAction() {
        return 'Money Transferred through BankAccount'
    }
}

//#Strategy2
class MobileTransfer {
    doAction() {
        return 'Money Transferred through Mobile'
    }
}

//#Strategy3
class CardTransfer {
    doAction() {
        return 'Money Transferred through Card'
    }
}

//All the strategies are 
class StrategyManager {
    constructor(strategy) {
        this.strategy = strategy
    }

    doAction() {
        return this.strategy.doAction()
    }
}

//In client i.e Amazon Store, you make a payment 
class AmazonStore {
    constructor(userSelection) {
        this.strategy = userSelection
    }
    payPrice() {
        return this.strategy.doAction()
    }
}

(function main() {
     //Here the userselection can be created in Factory Pattern
    const mobileStrategy = new MobileTransfer()
    const store = new AmazonStore(mobileStrategy)
    const result = store.payPrice()
    console.log(result)
})()