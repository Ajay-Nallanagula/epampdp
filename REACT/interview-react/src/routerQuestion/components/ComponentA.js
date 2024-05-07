import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ComponentA = () => {
    return (
        <>
            <div>Component A Rendering</div>
            <Link to="/ComponentB">Component B</Link>
            <Link to="/ComponentA/ChildComponentA">ChildComponentA</Link>
            <Outlet />
        </>
    )
}

export default ComponentA