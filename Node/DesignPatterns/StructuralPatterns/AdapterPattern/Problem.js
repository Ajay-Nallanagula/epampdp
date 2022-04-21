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