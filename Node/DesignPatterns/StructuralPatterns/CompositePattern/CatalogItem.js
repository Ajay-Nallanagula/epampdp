//leaf node 

class CatalogItem {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    print() {
        console.log(`${this.name} --- ${this.price}`)
    }

    get total() {
        return this.price
    }
}

//composite class
class CatalogGroup {
    constructor(name, composites = []) {
        this.name = name
        this.composites = composites
    }

    print() {
        console.log(`\n${this.name.toUpperCase()}`)
      //  console.log(this.composites)
        this.composites.forEach(item => {
        //   console.log(JSON.stringify(item))
            item.print() // thiswill be called recursively
        })
    }

    get total() {
        return this.composites.reduce((acc, item) => acc + item.total, 0)
    }
}

//client
function run() {

    const shoe = new CatalogItem('Reebok', 100)
    const sneakers = new CatalogItem('Sneakers', 90)
    const loafers = new CatalogItem('loafers', 80)

    //Group of shoes
    const footwearGroup = new CatalogGroup('footwear Group', [shoe, sneakers, loafers])
    //footwearGroup.print()
    //console.log('TOTAL: ', footwearGroup.total)

    //group of food
    const milkshake = new CatalogItem('milkshake', 6)
    const frenchFries = new CatalogItem('frenchFries', 5)
    const doughnut = new CatalogItem('doughnut', 3)


    const food_Group = new CatalogGroup('food group', [milkshake, frenchFries, doughnut])
    // food_Group.print()
    //console.log(food_Group.total)


    const keyChain = new CatalogGroup('key chains', [new CatalogItem('deer key', 1)])
    //keyChain.print()
    //console.log(keyChain.total)

    const catalogGroup = new CatalogGroup('All items', [footwearGroup, food_Group, keyChain])
    catalogGroup.print()
    console.log(catalogGroup.total)

    // const anotherCGrp = new CatalogGroup('up-up-cgrp', [catalogGroup])
    // anotherCGrp.print()
    // console.log(anotherCGrp.total)
}

run()
