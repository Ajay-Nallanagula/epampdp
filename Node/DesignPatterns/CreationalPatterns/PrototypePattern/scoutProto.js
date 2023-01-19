const Shopper = require('./Shopper')


const scoutProto = new Shopper()
scoutProto.addItemToList('I1')
scoutProto.addItemToList('I2')
scoutProto.addItemToList('I3')
scoutProto.addItemToList('I4')

module.exports = scoutProto