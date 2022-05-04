class Logger {
    constructor() {
        this.logs = []
    }

    get count() {
        return this.logs.length
    }

    log(message) {
        const timeStamp = new Date().toISOString()
        this.logs.push({ timeStamp, message })
        console.log(`${timeStamp} - ${message}`)
    }
}
console.log(Logger)

module.exports = new Logger()

/*class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Logger()
        }
    }

    getInstance() {
        return Singleton.instance
    }
}

module.exports = Singleton
*/