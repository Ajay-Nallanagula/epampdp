import React from "react";
class ComponentDidUpdateDOM extends React.Component {
  state = { size: 100 };
  boxRef = React.createRef();

  handleIncrementClick = (event) => {
    // set new state to force 
    const isInc = event.target.id === "btnInc";
    const incNum = isInc ? 10:-10
    this.setState((state, props) => ({ size: state.size + incNum }));
  };

  componentDidUpdate(prevState, prevProps) {
    // react to update and change the HTML element's size
    this.boxRef.current.style.width = `${this.state.size}px`;
    this.boxRef.current.style.height = `${this.state.size}px`;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrementClick} id="btnInc">
          Increase Size
        </button>
        <button onClick={this.handleIncrementClick} id="btnDec">
          Decrease Size
        </button>
        <div style={{ "background-color": "red" }} ref={this.boxRef}></div>
      </div>
    );
  }
}

export default ComponentDidUpdateDOM;
