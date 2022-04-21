const Shopper = require('./Shopper')

//NOTE: If you see below code I1-I4 is repeated in both the places , redundant seperate it.

const ajay = new Shopper()
ajay.name = 'Ajay Nallanagula'
ajay.addItemToList('I1')
ajay.addItemToList('I2')
ajay.addItemToList('I3')
ajay.addItemToList('I4')
ajay.addItemToList('gooogles')

const divya = new Shopper()
divya.name = 'Divya Nallanagula'
divya.addItemToList('I1')
divya.addItemToList('I2')
divya.addItemToList('I3')
divya.addItemToList('I4')
divya.addItemToList('Dress')

