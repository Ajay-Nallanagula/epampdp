//Example : https://www.educative.io/collection/page/5429798910296064/5725579815944192/5543883128700928

class SimpleEarPhones {
    constructor() {
        this.attach = function () {
            console.log('Simpeearphones attachment!!')
        }
    }
}

class EarPhoneAdapter extends SimpleEarPhones {
    constructor(adaptee) {
        super()
        this.attach = function () {
            adaptee.attach()
        }
    }
}

class TypeCPhone{
    constructor(){
        this.attach = function(){
            console.log(' This is TypeCPhone')
        }
    }
}

var typeCphone = new TypeCPhone()
var adapter = new EarPhoneAdapter(typeCphone)
adapter.attach()

const simpleEarPhones = new SimpleEarPhones()
let adapter2 = new EarPhoneAdapter(simpleEarPhones)
adapter2.attach()