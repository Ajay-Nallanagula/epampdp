import React from "react";

class ComponentGetDerivedStateFromPropsGrandChild extends React.Component {
  state = { label: this.props.label };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "GRAND CHILD --> ",
      "getDerivedStateFromProps --> ",
      { nextProps },
      { prevState }
    );
    //The state will be stale, not the updated state , we need to pass the updated state
    // return null

    if (nextProps.label !== prevState.label) {
      return { label: nextProps.label };
    }
    return null;
  }

  componentDidMount() {
    console.log(
      "componentDidMount: ComponentGetDerivedStateFromPropsGrandChild"
    );
  }

  render() {
    //this.props.label !== this.state.label && console.log("State of GRAND CHILD UPDATED", this.state);
    console.log("render:ComponentGetDerivedStateFromPropsGrandChild");
    console.log("MSG FROM GRAND CHILD,", this.state.label);
    return <h1>ComponentGetDerivedStateFromPropsGrandChild </h1>;
  }
}

export default ComponentGetDerivedStateFromPropsGrandChild;
