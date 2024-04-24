import React from 'react'
import PortalRender from './PortalRender'


/**
 * //EASIER EXAMPLE 
 import { useState } from "react";
import { createPortal } from "react-dom";

function Modal({ onClose }) {
  return (
    <div className="modal">
      <p>This is a modal.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  //Syntax:createPortal(content,element)

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open modal.</button>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </div>
  );
}

export default App;
 */
class PortalParent extends React.Component{
    state={
        on:false
    }

    toggle=()=>{
        this.setState((prevState)=>{
            return {...prevState,on:!prevState.on}
        })
    }
    render(){
        return (<>
        <h1>Portal Demo</h1>
        <button onClick={()=>this.toggle()}>Click for Portal</button>
        {this.state.on && <PortalRender><div><h3>PORTAL TEXT RENDERD</h3></div></PortalRender>}
        </>)
    }
}

export default PortalParent