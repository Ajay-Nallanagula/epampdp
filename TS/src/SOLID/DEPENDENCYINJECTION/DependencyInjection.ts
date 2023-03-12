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

interface IPayment2 {
  makePayment(count: number): void;
}

class StripePayment2 {
  userName: string;
  constructor(userName: string) {
    this.userName = userName;
  }

  makePayment(count) {
    console.log(`${this.userName} have bought items of worth $${count * 100}`);
  }
}

class PayPal2 {
  userName: string;
  constructor(userName: string) {
    this.userName = userName;
  }

  makePayment(count) {
    console.log(`${this.userName} have bought items of worth $${count * 100}`);
  }
}

class PayPalPaymentProcessor implements IPayment2 {
  userName: string;
  payProcessor: PayPal2;
  constructor(username: string) {
    this.payProcessor = new PayPal2(username);
  }
  makePayment(count: number): void {
    this.payProcessor.makePayment(count);
  }
}

class StripePaymentProcessor implements IPayment2 {
  userName: string;
  payProcessor: StripePayment2;
  constructor(username: string) {
    this.payProcessor = new StripePayment2(username);
  }
  makePayment(count: number): void {
    this.payProcessor.makePayment(count);
  }
}

//Now if we want to swap Stripe with Paypal... you will need to make changes ,
//Store is dependent on Payment...
class Store2 {
  payMethod: IPayment2;
  constructor(payMethod: IPayment2) {
    this.payMethod = payMethod;
  }

  pay(count: number) {
    this.payMethod.makePayment(count);
  }
}

function client_DI() {
  // const payPalPaymentProcessor = new PayPalPaymentProcessor("Ajay Nallanagula");
  const stripePaymentProcessor = new StripePaymentProcessor(
    "Jumpin Kumar Nallanagula"
  );
  const store = new Store2(stripePaymentProcessor);
  store.pay(2);
}

client_DI();
