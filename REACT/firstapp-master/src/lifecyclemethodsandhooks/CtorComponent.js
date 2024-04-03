import React,{Component} from 'react'

class CtorComponent extends Component{

    constructor(props){
         super(props) //why shd we supply props to super
    console.log("ctor",this.props)
    }



    componentDidMount(){
        console.log('componentDidMount',this.props)
    }


    render(){
    console.log("render",this.props)
    return <h1>This is CtorComponent {this.props.name}</h1>
    }
}

export default CtorComponent