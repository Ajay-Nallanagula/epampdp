import { put, takeEvery } from "redux-saga/effects"
import { getTodosSaga, getTodosSagaSuccess } from "../todoreducer"

function* makeApiCall() {
    console.log("makeApiCall Generator function is called ")
    //Make your API Call Here 
    //const products = yield fetch('https://dummyjson.com/products')
    const response = yield new Promise((resolve) => {
        resolve([
            { id: 100, todoAction: " First Action from Saga" },
            { id: 101, todoAction: " Second Action from Saga" },
            { id: 102, todoAction: " Third Action from Saga" },
            { id: 103, todoAction: " Fourth Action from Saga" },
        ])
    })

    //Once you get the response , "put sideEffect from "redux-saga/effects"" in reducer 

    //This will yield in infinite loop
    //The component/btnClick dispatch(getTodosSaga()) and put({ type: getTodosSaga.type, payload: response })
    //This is going to infinite loop so we will need two reducers methods 
    // getTodosSaga and getTodosSagaSuccess.

    //yield put({ type: getTodosSaga.type, payload: response })

    /*
    The getTodosSaga.type action is dispatched when the button is clicked.
The makeApiCall saga listens for the getTodosSaga.type action and then runs.
The makeApiCall saga fetches the todo items and then dispatches another getTodosSaga.type action with the fetched todos as the payload.
This newly dispatched getTodosSaga.type action triggers the makeApiCall saga again, forming an infinite loop.
To mitigate this, you should have separate action types for requesting the todos and updating the todos:
    */

    yield put({ type: getTodosSagaSuccess.type, payload: response }) //shorthand : yield put(getTodosSagaSuccess(response))

}


function* apiMiddlewareSaga() {
    console.log("apiMiddlewareSaga Generator function is called ", getTodosSaga.type)
    //Pick the action you want with "takeEvery(actionCreator, <effect-Method>)" from redux-saga/effect 
    //In this case the <effect-method> is makeApiCall
    yield takeEvery(getTodosSaga.type, makeApiCall)
}

export default apiMiddlewareSaga