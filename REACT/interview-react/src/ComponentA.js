import {useState} from 'react'
import ComponentB from './ComponentB'

const ComponentA = ({onChange})=>{
    const context = useContext()
      return(
        <>
        <input type="text" onChange={(e) =>onChange(e)}/>
        </>
      )
    }
    
    export default ComponentA