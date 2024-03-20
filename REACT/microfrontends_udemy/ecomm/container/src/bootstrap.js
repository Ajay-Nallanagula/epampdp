//import { mount as billingMount } from 'billing/BillingIndex';
import { mount as productsMount } from 'products/ProductsIndex'
import { mount as cartMount } from 'cart/CartShow'


console.log('Container is loaded!!!')

productsMount(document.querySelector('#dev-products'))
cartMount(document.querySelector('#dev-cart'))

//billingMount(document.querySelector('#dev-billing'))