import React, { useState } from 'react'

const TestApp = () => {
    let [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count => count + 1)
    }
    const handleDecrement = () => {
        setCount(count => count - 1)
    }

    return (
        <div>
            <h1>COUNT: {count}</h1>
            <div> <button onClick={handleIncrement}>Increment</button> </div>
            <div> <button onClick={handleDecrement}>Decrement</button> </div>
        </div>
    )
}

export default TestApp