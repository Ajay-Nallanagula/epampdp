import React from 'react'
import FakeText from './FakeText'
import {Redirect, useHistory,useParams,useLocation } from 'react-router-dom'

const Contact = (props)=>{

console.log({props})
const {match} =props
console.log({match})
//const name = props.match.params.name
//const {history} = props
const useParamsObj = useParams()
const useLocationObj = useLocation()
console.log({useParamsObj},{useLocationObj})
const history = useHistory()
const {name} = useParamsObj

if(name==='AjayN'.toUpperCase()){
    return  <Redirect to="/" />
}
    return(
        <>
        <h1>Contact Page {name}</h1>
        <div><FakeText/></div>
        <div><button onClick={()=>history.push("/")}>Go to Home</button></div>
        <div><button onClick={()=>history.push("/about")}>Go to About</button></div>
        </>
    )
}

export default Contact