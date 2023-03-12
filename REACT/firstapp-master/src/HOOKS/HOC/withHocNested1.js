import React from 'react'

const withHocNested1 = (ComponentRecieved)=>{
    //return (() => <ComponentRecieved name='withHocNested1'/>)
    return (
        function withHocNest1(){
            return (<ComponentRecieved name='withHocNested1'/>)
        }
    )
}

export default withHocNested1