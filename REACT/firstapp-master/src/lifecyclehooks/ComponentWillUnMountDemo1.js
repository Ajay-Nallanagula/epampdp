import React from 'react'
class ComponentWillUnMountDemo1 extends React.Component{

    componentWillUnmount(){
        console.log('ComponentWillUnMountDemo1 is called')
    }
render(){
   return (
       <div>ComponentWillUnMountDemo1</div>
   )
}
}
export default ComponentWillUnMountDemo1