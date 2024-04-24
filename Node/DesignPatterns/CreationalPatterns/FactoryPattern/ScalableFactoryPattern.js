class ProductFactory {
    constructor() {
      this.products = {};
    }
  
    registerProduct(productType, productClass) {
      this.products[productType] = productClass;
    }
  
    createProduct(productType, ...args) {
      const ProductClass = this.products[productType];
      return ProductClass ? new ProductClass(...args) : null;
    }
  }
  
  class Shopper {
    constructor(id, item, price) {
      this.id = id;
      this.item = item;
      this.price = price;
    }
  }
  
  class Diner {
    constructor(id, dish, price) {
      this.id = id;
      this.dish = dish;
      this.price = price;
    }
  }
  
  let factory = new ProductFactory();
  factory.registerProduct("Shopper", Shopper);
  factory.registerProduct("Diner", Diner);
  
  const shopper = factory.createProduct("Shopper", 1, 'TV', 200); 
  const diner= factory.createProduct("Diner", 2, 'Tacos', 10);