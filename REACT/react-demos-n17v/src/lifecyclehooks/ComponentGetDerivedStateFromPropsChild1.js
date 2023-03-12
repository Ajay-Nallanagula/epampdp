import React from "react";
import ComponentGetDerivedStateFromPropsGrandChild from "./ComponentGetDerivedStateFromPropsGrandChild";

class ComponentGetDerivedStateFromPropsChild1 extends React.Component {
  //ctor intializes only once 
  state = { label: this.props.label}; //state initialized from props passed by parent

  //THIS SHOULD BE USED SPARSELY!!!!
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "CHILD --> ",
      "getDerivedStateFromProps --> ",
      { nextProps },
      { prevState }
    );
    //The state in the GRAND CHILD WILL NOT BE UPDATED
    // return null

//this.setState({leabel:'PQRS'}) //merge, this.state ={label:'PQRS',title:'xyz'}
//useState({laebe:'PQRS'}) //state={label:'PQRS'} Re-assign

    if (nextProps.label !== prevState.label) {
      return { label: nextProps.label }; //NOT MERGE, RE-ASSIGN OF STATE
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount: ComponentGetDerivedStateFromPropsChild1");
  }

  render() {
    //this.props.label !== this.state.label &&
      //console.log("State of CHILD1 UPDATED", this.state);
    console.log("render: ComponentGetDerivedStateFromPropsChild1");
    return (
      <div>
        <h1>ComponentGetDerivedStateFromPropsChild1</h1>
        <ComponentGetDerivedStateFromPropsGrandChild label={this.state.label} />
      </div>
    );
  }
}

export default ComponentGetDerivedStateFromPropsChild1;
