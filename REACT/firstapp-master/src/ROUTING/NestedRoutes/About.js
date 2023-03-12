import React from 'react'
import { Redirect } from 'react-router-dom'
import FakeText from '../FakeText'

const About = ({history})=>{
    return(
        <>
        <h1>About Page</h1>
        <div><FakeText/></div>
        <div><button onClick={()=>history.push("/")}>Go to Home</button></div>
        <div><button onClick={()=>history.push("/contact")}>Go to Contact</button></div>
        <div><button onClick={()=>(<Redirect to="/"/>)}>Redirect to Home</button></div>
        </>
        
    )
}

export default About