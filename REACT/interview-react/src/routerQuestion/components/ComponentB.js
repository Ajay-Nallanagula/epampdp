import React from 'react'
import { useNavigate } from 'react-router-dom'

const ComponentB = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Component B Rendering</div>
            <button onClick={() => navigate("/ComponentA")}>Click to Vist CompA</button>
        </>
    )
}

export default ComponentB