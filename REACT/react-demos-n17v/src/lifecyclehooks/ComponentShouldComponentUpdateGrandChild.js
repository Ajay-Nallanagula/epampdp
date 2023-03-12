import React from 'react'

class ComponentShouldComponentUpdateGrandChild extends React.Component{

      state={label:this.props.label}
    // static getDerivedStateFromProps(nextProps,prevState){
    //     console.log('GRAND CHILD --> ','getDerivedStateFromProps --> ',{nextProps},{prevState})
    //    if(nextProps.label !== prevState.label){
    //     return {label:nextProps.label }
    //     }
    //     return null
    // }
   
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('getDerivedStateFromProps ComponentShouldComponentUpdateGrandChild')
        return null
    }
    componentDidMount(){
        console.log('componentDidMount: ComponentShouldComponentUpdateGrandChild')
        return false
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate ComponentShouldComponentUpdateGrandChild')
    }

    render(){
        return (<h1>ComponentShouldComponentUpdateGrandChild </h1>)
    }
}

export default ComponentShouldComponentUpdateGrandChild