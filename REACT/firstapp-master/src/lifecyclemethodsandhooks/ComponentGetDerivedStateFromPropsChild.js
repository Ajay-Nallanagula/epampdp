import React from 'react'

class ComponentGetDerivedStateFromPropsChild extends React.Component{

    componentDidMount(){
        console.log('componentDidMount: ComponentGetDerivedStateFromPropsChild')
    }

    render(){
        console.log('render: ComponentGetDerivedStateFromPropsChild')
        return (
            <div>
        <h1>ComponentGetDerivedStateFromPropsChild</h1>
        </div>
        )
    }
}

export default ComponentGetDerivedStateFromPropsChild