import apiMiddlewareSaga from './middlewares/apiMiddlewareSaga'
import loggerMiddleware from './middlewares/loggerMiddleware'
import todoReducer from './todoreducer'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: todoReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), loggerMiddleware, sagaMiddleware]
})

sagaMiddleware.run(apiMiddlewareSaga)


export default store