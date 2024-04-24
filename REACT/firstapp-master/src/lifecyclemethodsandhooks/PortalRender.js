import React from 'react'
import ReactDOM from 'react-dom'

//https://medium.com/@rahulrulz680/react-portals-and-use-cases-8f3bdc1fff68

/*Why do we need portals?

When we use modal dialog inside a parent component its height and width will be inherited from the component in which the modal resides. The way modal dialog should display is outside the parent component, because parent component can be nested deeply. 
There is a possibility that the modal will be cropped and not be shown properly.


*/
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