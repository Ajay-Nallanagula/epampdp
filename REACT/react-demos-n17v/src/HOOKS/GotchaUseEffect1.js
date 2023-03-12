import React, { useEffect ,useState} from 'react'

/**
 * Take a close note here render is been called twice, inital render and compDidMount-->setstate , 
 * but the component in the browser shows update state directly i.e count:2 without a flicker 
 * One expects flicker when the component is re-rendered.But there is no flicker
 * Because, the state is updated synchronously, as its not an api acall
 * componentDidMount is called just before the paint is commited, hence you cannot see the flicker 
 * */
export class GotchaUseEffect1 extends React.Component{
    state={count:0}
    componentDidMount(){
       this.setState({count:this.state.count+1}) //Synchronous update
    }

    render(){
        console.log('render called')
    return(<div>CLASS COUNT:{this.state.count}</div>)
    }
}

export const GotchaUseEffectFn1 =()=>{
    const[state,setState] =useState(0)

    useEffect(()=>{
        setState(state+1)
    },[])

    return(<div>FUNCTION COUNT:{state}</div>) 
}

