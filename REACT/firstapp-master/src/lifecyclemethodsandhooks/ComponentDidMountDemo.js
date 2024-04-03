import React, {Component} from 'react'

class ComponentDidMountDemo extends Component{
 constructor(props){
     super(props)
     this.state={         label:'DEFAULT'     }
 }

 componentDidMount(){
     console.log('componentDidMount',this.props)
     //this will cause a render to trigger again 
     this.setState((prevState) =>({...prevState,label:'componentDidMount, WILL NOT BE CALLED after setState render'}))
 }


    render(){
       // setTimeout(()=>this.setState((prevState) =>({...prevState,label:'renderMeth called , componentDidMount will NOT BE CALLED FOR EVERY RENDER'})),10000)
        console.log('render',this.state)
        return <h1>This is ComponentDidMountDemo</h1>
    }
}

export default ComponentDidMountDemo