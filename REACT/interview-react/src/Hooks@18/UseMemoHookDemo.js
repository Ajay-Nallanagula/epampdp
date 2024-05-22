import React, { useState, useMemo, useCallback } from "react"

const UseMemoDemoHook = () => {
    const [text, setText] = useState('')
    const [search, setSearch] = useState('')

    const dataSet = [
        { id: 10, value: 100 },
        { id: 25, value: 101 },
        { id: 36, value: 102 }
    ]

    // const filteredProduct =
    //     dataSet.find(item => {
    //         console.log('find logic executed!')
    //         return item.id === search
    //     })

    const filteredProduct = useMemo(() => {
        return dataSet.filter(item => {
            console.log('find logic executed!')
            return item.id.toString() === search
        })
    }, [search])

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleButtonClick = () => {
        setSearch(text)
    }

    const removeHandler = useCallback(() => {
        console.log("Remove Handler")
    }, [])



    return (
        <>
            <input type="text" placeHoder="Type Id here" onChange={handleChange} />
            <button onClick={handleButtonClick}>Click to Search</button>
            <Demo filteredProduct={filteredProduct} search={search} />
            <MeomizedDemo filteredProduct={filteredProduct} removeHandler={removeHandler} />
        </>
    )
}

const MeomizedDemo = React.memo(({ filteredProduct, removeHandler }) => {
    return (
        <div>
            {JSON.stringify(filteredProduct)}
            <div><button onClick={removeHandler}>Remove Item</button></div>
        </div>)
})

const Demo = ({ filteredProduct, removeHandler }) => {
    return (
        <div>
            {JSON.stringify(filteredProduct)}
            <div><button onClick={removeHandler}>Remove Item</button></div>
        </div>)
}

export default UseMemoDemoHook