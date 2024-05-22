const loggerMiddleware = store => next => action => {
    const state = store.getState()
    console.log({ state }, { actionType: action.type })
    return next(action)
}

export default loggerMiddleware