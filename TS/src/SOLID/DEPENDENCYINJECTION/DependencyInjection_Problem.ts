/**
 * The Dependency Inversion Principle (DIP) states that high-level modules/classes should not depend on low-level modules/classes. Both should depend upon abstractions. Secondly,
 * abstractions should not depend upon details. Details should depend upon
 * abstractions.
 *
 * DIP: https://www.youtube.com/watch?v=9oHY5TllWaU&list=PLZlA0Gpn_vH9kocFX7R7BAe_CvvOCO_p9&index=5
 *
 * HigherModule(store) should not depend on lower module(stripe)
 *  STORE ---store depends on stripe--> STRIPE_PAYMENT
 *
 */

class StripePayment {
  userName: string;
  constructor(userName: string) {
    this.userName = userName;
  }

  makePayment(count) {
    console.log(`${this.userName} have bought items of worth $${count * 100}`);
  }
}

class PayPal {
  constructor() {}

  makePayment(userName, count) {
    console.log(`${userName} have bought items of worth $${count * 100}`);
  }
}

//Now if we want to swap Stripe with Paypal... you will need to make changes ,
//Store is dependent on Payment...
class Store {
  stripePay: StripePayment;
  constructor(userName: string) {
    this.stripePay = new StripePayment(userName);
  }

  makePayment(count) {
    this.stripePay.makePayment(count);
  }
}

function client_DIP() {
  const store = new Store("Ajay Nallanagula");
  store.makePayment(2);
}

client_DIP();
