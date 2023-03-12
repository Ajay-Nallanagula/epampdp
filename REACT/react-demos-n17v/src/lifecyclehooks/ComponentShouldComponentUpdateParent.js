import React from "react";
import ComponentShouldComponentUpdateChild1 from "./ComponentShouldComponentUpdateChild1";
//import ComponentGetDerivedStateFromPropsChild from './ComponentGetDerivedStateFromPropsChild'
class ComponentShouldComponentUpdateParent extends React.Component {
  //By class properties proposal ES.Next concept
  state = {
    label: "state of Parent",
  };
  componentDidMount() {
    console.log("componentDidMount: ComponentShouldComponentUpdateParent");
    this.setState((prevState) => ({
      ...prevState,
      label: "UPDATED STATE FROM PARENT",
    }));
  }

  shouldComponentUpdate(nextProps,nextState){
      console.log('shouldComponentUpdate ComponentShouldComponentUpdateParent')
      return true
  }

  render() {
    return (
      <div>
        <h1>ComponentShouldComponentUpdateParent </h1>
        <ComponentShouldComponentUpdateChild1 label={this.state.label} />
      </div>
    );
  }
}

export default ComponentShouldComponentUpdateParent;
