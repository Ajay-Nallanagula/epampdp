import { useState } from "react"
import useArray from "./useArray"

const App = () => {
    const { value, push, removeByIndex } = useArray([1, 2, 3])

    const handlePushArray = () => {
        push([10, 20, 30])
    }

    const handleRemoveArrayItem = () => {
        removeByIndex(3)
    }


    return (
        <div>
            <button onClick={handlePushArray}>Push Array</button>
            <button onClick={handleRemoveArrayItem}>Remove Array Item</button>
            <div> value: {JSON.stringify(value)} </div>
        </div>
    )
}

export default App