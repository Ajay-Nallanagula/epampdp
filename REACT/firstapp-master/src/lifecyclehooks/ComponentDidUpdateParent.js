import React from 'react'
import ComponentDidUpdateAPI from './ComponentDidUpdateAPI'

class ComponentDidUpdateParent extends React.Component{
    state={
        number:0
    }

    componentDidMount(){
        return this.setState((prevState) => ({...prevState,number:prevState.number+1}))
    }

    render(){
        return <ComponentDidUpdateAPI number={this.state.number}/>
    }
}

export default ComponentDidUpdateParent