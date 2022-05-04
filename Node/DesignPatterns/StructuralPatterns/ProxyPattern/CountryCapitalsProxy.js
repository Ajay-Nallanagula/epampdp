class GetCapital {
    getMycapital(country) {
        if (country === "Pakistan") {
            return "Islamabad";
        } else if (country === "India") {
            return "New Delhi";
        } else if (country === "Canada") {
            return "Ottawa";
        } else if (country === "Egypt") {
            return "Cairo";
        } else {
            return "";
        }
    }

    getThresholdLimit(threshold) {
        //  const threshold = Math.floor(Math.random() * 7)
        // if (threshold % 2 === 0) {
        //     console.log('Please standby..busy serving 100 client requests')
        //     return true //thresold reached hence stop
        // }
        // return false //Proceed

        return true
    }
}

class ProxyGetCapital {
    constructor() {
        this.getCapital = new GetCapital()
        this.collectRequests = []
        this.cache = {}
    }

    getMycapital(country) {
        const cacheVal = this.cache[country]
        const isInCache = !!cacheVal

        if (!isInCache) {
            const capital = this.getCapital.getMycapital(country)
            this.cache[country] = capital
            return `${capital} -- Returned from GetCapital Class`
        }
        return `${cacheVal} -- Returned from Cache`
    }

    getThresholdLimit(country) {
        const threshold = Math.floor(Math.random() * 7)
        const isThresholdReached = this.getCapital.getThresholdLimit(threshold)
        if (!isThresholdReached) {
            return this.getMycapital(country)
        }
        this.collectRequests.push(country)
        if (this.collectRequests.length > 2) {
            this.executeRequests(this.collectRequests, this.getMycapital)
            //this.collectRequests = []
        }

        console.log({ length: this.collectRequests.length })
    }

    executeRequests(arry, getMycapital) {
        // console.log('From setTimeout threshold..')
        // function x() {
        //     console.log({ arry: this.collectRequests })
        //     this.collectRequests.forEach(item => console.log(this.getMycapital(item)))
        // }
        // setTimeout(x.bind(this), 5000)

        setTimeout(function x(self) {
            // console.log({ self })
            //console.log({ arry: self.collectRequests })
            self.collectRequests.forEach(item => console.log(self.getMycapital(item)))
        }, 5000, this) //we can pass params as third argument in setTimeout
    }
}

//On Client side
const getCapitalObj = new ProxyGetCapital()
// console.log(getCapitalObj.getMycapital("Egypt"))
// console.log(getCapitalObj.getMycapital("Canada"))
// console.log(getCapitalObj.getMycapital("Egypt"))
// console.log(getCapitalObj.getMycapital("Canada"))

console.log(getCapitalObj.getThresholdLimit("Egypt"))
console.log(getCapitalObj.getThresholdLimit("Canada"))
console.log(getCapitalObj.getThresholdLimit("India"))
console.log(getCapitalObj.getThresholdLimit("Pakistan"))