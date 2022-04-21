const scoutProto = require('./scoutProto')

//Todo: If you see below code I1-I4 is repeated in both the places , redundant

const ajay = scoutProto.clone()
ajay.name = 'Ajay Nallanagula'
if (ajay?.addItemToList) {
    console.log('addItemToList there')
    ajay.addItemToList('gooogles')
}


const divya = scoutProto.clone()
divya.name = 'Divya Nallanagula'
divya.addItemToList('Dress')

console.log(`${ajay.name}`, `${ajay.shopList}`)
console.log(`${divya.name}`, `${divya.shopList}`)