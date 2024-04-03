import React from 'react'
import PortalRender from './PortalRender'

class PortalParent extends React.Component{
    state={
        on:false
    }

    toggle=()=>{
        this.setState((prevState)=>{
            return {...prevState,on:!prevState.on}
        })
    }
    render(){
        return (<>
        <h1>Portal Demo</h1>
        <button onClick={()=>this.toggle()}>Click for Portal</button>
        {this.state.on && <PortalRender><div><h3>PORTAL TEXT RENDERD</h3></div></PortalRender>}
        </>)
    }
}

export default PortalParent