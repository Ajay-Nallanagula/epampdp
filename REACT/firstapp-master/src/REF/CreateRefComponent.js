import React from "react";

class CreateRefComponent extends React.Component {
  inputEl = React.createRef()

  handleClickHandler = () => {
    this.inputEl.current.onmouseover = () =>
      (this.inputEl.current.value = "You are Hovering");
    this.inputEl.current.onmouseout = () => (this.inputEl.current.value = "");
  };

  render() {
    return (
      <>
        <button onClick={() => this.handleClickHandler()}>
          Click Here for TextBox
        </button>
        <input type="text" ref={this.inputEl} />
      </>
    );
  }
}

export default CreateRefComponent
