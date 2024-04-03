import React from 'react'

class ComponentDidUpdateAPI extends React.Component{

    
    componentDidUpdate(nextProps){
        console.log('componentDidUpdate is called')
    }

    render(){
        return <h1>{this.props.number}</h1>
    }
}

export default ComponentDidUpdateAPI