import React from 'react'
import withHocNested1 from './withHocNested1'
import withHocNested2 from './withHocNested2'

class ReactComponentNestedHoc extends React.Component{

    render(){
        console.log(this.props)
    return (<h1>{this.props.anothername}  {this.props.name} -- Wrapped Child Component</h1> )
    }
}
//const Dapp = withHocNested1(ReactComponentNestedHoc)
export default withHocNested2(withHocNested1(ReactComponentNestedHoc))