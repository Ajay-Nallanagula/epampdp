Reference: 
https://www.youtube.com/watch?v=nAIZxBeQx_Q&list=PL8p2I9GklV45pe55ZVEEhk8elLZLh932A&index=12 
Watch from Part 11

**Saga(declarative) Vs Thunk(imperative) Middlewares**

Redux-Saga and Redux-Thunk are both middleware libraries used for managing side effects in Redux-based JavaScript applications, such as handling asynchronous actions.

Redux-Thunk is a simpler middleware that allows you to write action creators that return a function instead of an action. The function can receive the dispatch method as a parameter and can use it for asynchronous tasks like API calls, timeouts, etc.

Example of Redux-Thunk:

function fetchUser(id) {
  return dispatch => {
    dispatch(fetchUserRequest(id));
    return fetchUserFromApi(id).then(
      user => dispatch(fetchUserSuccess(user)),
      error => dispatch(fetchUserFailure(error))
    );
  }
}

On the other hand, Redux-Saga uses Generator functions to make asynchronous code look like synchronous code. It's a more powerful library than thunk as it handles complex scenarios easily like race conditions, cancellation, and if-else style conditional logic in a better way.

import { call, put } from 'redux-saga/effects'

export function* fetchUser(action) {
   try {
      const user = yield call(fetchUserFromApi, action.id);
      yield put(fetchUserSuccess(user));
   } catch (e) {
      yield put(fetchUserFailure(e));
   }
}


**How can you write generator functions with Arrow functions in JS?**
The answer lies in the syntax, JS need "function* <functionName>"  to recognise a generator function .
JavaScript generator functions cannot be written using arrow function syntax. This is due to the nature of generator functions, which require the use of the function* keyword to denote that a function is a generator.

**Can we write generators with function expressions?**
Yes we can write.
const myGenerator = function*() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = myGenerator();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3

**How to add a Saga to store?**
import createSagaMiddleware from 'redux-saga';
import todoReducer from './reducers';
import rootSaga from './sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: todoReducer,
  middleware: [sagaMiddleware]
});
// Then run the saga
sagaMiddleware.run(rootSaga);

**How can we add Multiple Sagas?**
Adding multiple sagas to a Redux store involves combining all the sagas into a "root saga" using the all and fork effects from the redux-saga/effects module.
// saga1.js
import { call, put } from 'redux-saga/effects';

export function* saga1() {
  // ... definition for saga1
}

// saga2.js
import { call, put } from 'redux-saga/effects';

export function* saga2() {
  // ...definition for saga2
}

// rootSaga.js
import { all, fork } from 'redux-saga/effects';
import { saga1 } from './saga1';
import { saga2 } from './saga2';

export default function* rootSaga() {
  yield all([
    fork(saga1),
    fork(saga2)
  ]);
}

// store.js
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import rootSaga from './rootSaga'; // import the root saga

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga); // Run the root saga




