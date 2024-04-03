import React from 'react'
class ComponentWillUnMountDemo2 extends React.Component{

    componentWillUnmount(){
        console.log('ComponentWillUnMountDemo2 is called')
    }
render(){
   return (
       <div>ComponentWillUnMountDemo2</div>
   )
}
}
export default ComponentWillUnMountDemo2