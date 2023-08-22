class Shopper {
    constructor(name = 'unamed person') {
        this.name = name,
        this.shopList = []
    }

    addItemToList(item) {
        this.shopList = [...this.shopList, item]
        return this.shopList
    }

    clone() {
        const proto = Object.getPrototypeOf(this) //get blue print of Shopper
        const cloned = Object.create(proto) //this will create all the properties and methods. 
        //All the methods will be added to prototype
        cloned.name = this.name
        cloned.shopList = [...this.shopList]
        return cloned

    }
}

module.exports = Shopper