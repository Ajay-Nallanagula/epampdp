import { type } from '@testing-library/user-event/dist/type'
import { useReducer } from 'react'

const action_creators = {
    "INCREMENT_COUNT": "INCREMENT_COUNT",
    "DECREMENT_COUNT": "DECREMENT_COUNT"
}


const reducer = (state, action) => {
    switch (action.type) {
        case action_creators.INCREMENT_COUNT: {
            state = { ...state, count: state.count + 1 }
            return state
        }
        case action_creators.DECREMENT_COUNT: {
            if (state.count > 0) {
                state = { ...state, count: state.count - 1 }
            }
            return state
        }
        default: {
            return state
        }
    }
}


const UseReducerDemo = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    const handleIncrementCount = () => {
        dispatch({ type: action_creators.INCREMENT_COUNT })
    }

    const handleDecrementCount = () => {
        dispatch({ type: action_creators.DECREMENT_COUNT })
    }

    return (
        <>
            <div><h2>Count: {state.count}</h2></div>
            <div>
                <button onClick={handleIncrementCount}>Increment Count</button>
            </div>
            <div>
                <button onClick={handleDecrementCount}>Decrement Count</button>
            </div>
        </>
    )

}

export default UseReducerDemo