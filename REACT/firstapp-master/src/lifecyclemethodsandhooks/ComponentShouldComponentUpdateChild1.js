import React from "react";
import ComponentShouldComponentUpdateGrandChild from "./ComponentShouldComponentUpdateGrandChild";

class ComponentShouldComponentUpdateChild1 extends React.Component {
  state = { label: this.props.label };

static getDerivedStateFromProps(nextProps,prevState){
    console.log('getDerivedStateFromProps ComponentShouldComponentUpdateChild1')
    return null
}
shouldComponentUpdate(){
    console.log('shouldComponentUpdate ComponentShouldComponentUpdateChild1')
    return true
}

  componentDidMount() {
    console.log("componentDidMount: ComponentShouldComponentUpdateChild1");
  }

  render() {
    return (
      <div>
        <h1>ComponentShouldComponentUpdateChild1</h1>
        <ComponentShouldComponentUpdateGrandChild label={this.state.label} />
      </div>
    );
  }
}

export default ComponentShouldComponentUpdateChild1;
