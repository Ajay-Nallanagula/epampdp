//https://www.dofactory.com/javascript/design-patterns/adapter

/**
 The example code below shows an online shopping cart in which a shipping object is used to compute shipping costs. The old Shipping object is replaced by a new and improved Shipping object that is more secure and offers better prices.
The new object is named AdvancedShipping and has a very different interface which the client program does not expect. ShippingAdapter allows the client program to continue functioning without any API changes by mapping (adapting) the old Shipping interface to the new AdvancedShipping interface
 */

// old interface
class Shipping {
    request(zipStart, zipEnd, weight) {
        return 'Rs.49.75'
    }
}

// new interface
class AdvancedShipping {
    login(credentials) { }
    setStart(start) { }
    setDestination(destination) { }
    calculate(weight) {
        return 'Rs.32.96'
    }
}

// adapter interface
class ShippingAdapter {
    constructor(credentials) {
        // const shipping = new AdvancedShipping()
        // shipping.login(credentials)
        // this.request = (zipStart, zipEnd, weight) => {
        //     shipping.setStart(zipStart)
        //     shipping.setDestination(zipEnd)
        //     return shipping.calculate(weight)
        // }

        this.shipping = new AdvancedShipping()
        this.shipping.login(credentials) //Authenticate first
    }

    request(zipStart, zipEnd, weight) {
        this.shipping.setStart(zipStart)
        this.shipping.setDestination(zipEnd)
        return this.shipping.calculate(weight)
    }
}

//This method is executed in the client machine
function run() {
    var shipping = new Shipping();//This is old object that client has been using since ages 
    var credentials = { token: "30a8-6ee1" };
    var adapter = new ShippingAdapter(credentials); //Client will now shift to this

    // original shipping object and interface
    var cost = shipping.request("78701", "10010", "2 lbs"); //Client will delete these lines
    console.log("Old cost: " + cost);

    // new shipping object with adapted interface
    //client will adapt the new Interface(Advanced Shipping) adapter request , and reduce his costs.
    cost = adapter.request("78701", "10010", "2 lbs");

    console.log("New cost: " + cost);
}

run()