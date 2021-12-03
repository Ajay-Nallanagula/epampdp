const testMiddleware = (req, res, next) => {
return function nested(req, res, next) {
        console.log('This is pattern of middleware!!!')
        next()
    }
}

module.exports = testMiddleware