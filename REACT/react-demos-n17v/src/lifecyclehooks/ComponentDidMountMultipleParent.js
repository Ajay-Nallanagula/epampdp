import React,{Component} from 'react'
import ComponentDidMountMultipleChild from './ComponentDidMountMultipleChild'

class ComponentDidMountMultipleParent extends Component{
constructor(props){
    super(props)
    this.state={hits:0}
}

handleClickHandler(){ this.setState((prevState)=>({hits:prevState.hits+1}))}

render(){
    //return null
    return (
        
        <div>
        <button onClick={()=>this.handleClickHandler()}>Increment</button>
        <ComponentDidMountMultipleChild hits={this.state.hits}/>
        </div>
    //     <dl>
    //     {this.props.items.map(item => (
    //       // Without the `key`, React will fire a key warning
    //       <React.Fragment key={item.id}>
    //         <dt>{item.name}</dt>
    //         <dd>{item.description}</dd>
    //       </React.Fragment>
    //     ))}
    //   </dl>
    )
}
}

export default ComponentDidMountMultipleParent