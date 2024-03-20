import React from 'react'
import Navigationbar from "./Navigationbar"
import SearchReciepe from "./SearchReciepe"
import Home from './Home'
import { useSelector } from 'react-redux'

const App = () => {
    const addedItems = useSelector(state => state.addedItems)
    console.log({ addedItems })
    return (
        <>
            <Navigationbar />
            <Home />
        </>
    )
}


export default App