class Shopper {
    constructor(name, price, product) {
        this.name = name
        this.price = price
        this.product = product
    }

    toString() {
       // console.table([this.name, this.price, this.product])
        console.group(this.name)
        console.log(`Price: ${this.price}`)
        console.log(`Product: ${this.product}`)
        console.groupCollapsed()
    }

}

module.exports = Shopper