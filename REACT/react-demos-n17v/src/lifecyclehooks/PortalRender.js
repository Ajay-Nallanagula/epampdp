import React from 'react'
import ReactDOM from 'react-dom'



class PortalRender extends React.Component{
     portalRoot = document.getElementById("portal");
    el = document.createElement('div')
componentDidMount(){
    this.portalRoot.appendChild(this.el)
}
componentWillUnmount(){
    this.portalRoot.removeChild(this.el)
}

render(){
    const {children} = this.props
    return ReactDOM.createPortal(children,this.el)
}
}

export default PortalRender