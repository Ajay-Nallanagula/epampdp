import { useState } from "react"
import { flushSync } from 'react-dom';

const UseStateDemo = () => {
    // const initDataAsync = () => {
    //     // const result2 = await fetch('https://jsonplaceholder.typicode.com/users')
    //     // const result = await result2.json()
    //     // console.log({ result })
    //     // return result
    //     flushSync(() => {
    //         setTimeout(() => console.log('Async Function Call'), 0)
    //     })
    // }
    flushSync(() => {
        console.log('From Flush Async!!!')
    })

    const initData = () => {
        console.log('State Sync data !')
        return [1, 2, 3, 4, 5]
    }

    //const [products, setProducts] = useState(() => initDataAsync())
    const [ids, setIds] = useState(() => initData())

    return (
        <div>
            <div>{console.log('Rendering!!')}</div>
            {/* {JSON.stringify(products)} */}
            {JSON.stringify(ids)}
        </div>
    )
}

export default UseStateDemo