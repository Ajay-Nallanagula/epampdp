import React from 'react'
class ComponentDidMountAPI extends React.Component{
    state={        hits:0    }
    componentDidMount(){
        //Psudo code for API call 
        setInterval(()=>{
           return this.setState((prevState)=>({hits:prevState.hits+1}))
        },5000)
        console.log('componentDidMount')
       // document.getElementById('root').append(" Appended FROM componentDidMount")
       // return (<div>DIV RENDERED FROM componentDidMount</div>)
    }
    render(){        return (<h1>{this.state.hits} THIS IS COMPONENTDIDMOUNT</h1>)    }

}

export default ComponentDidMountAPI