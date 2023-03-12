import React from 'react'
import ComponentGetDerivedStateFromPropsChild1 from './ComponentGetDerivedStateFromPropsChild1'
//import ComponentGetDerivedStateFromPropsChild from './ComponentGetDerivedStateFromPropsChild'
class ComponentGetDerivedStateFromPropsParent extends React.Component{
    //By class properties proposal ES.Next concept
state={
    label:'state of Parent'
}
    componentDidMount(){
        console.log('componentDidMount: ComponentGetDerivedStateFromPropsParent')
        this.setState((prevState)=>({...prevState,label:'UPDATED STATE FROM PARENT'}))
    }
    
    render(){
        console.log('render: ComponentGetDerivedStateFromPropsParent')
        return (
            <div>
        <h1>ComponentGetDerivedStateFromPropsParent </h1>
        {/* <ComponentGetDerivedStateFromPropsChild/> */}
        <ComponentGetDerivedStateFromPropsChild1 label={this.state.label}/>
        </div>
        )
    }
}

export default ComponentGetDerivedStateFromPropsParent