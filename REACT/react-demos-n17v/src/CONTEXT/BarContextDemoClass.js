import React from "react";

export class BarContextDemoClass extends React.Component {
  state = { open: false, message: "" };
  btnClickHandler = (event) => {
    this.setState({ open: true,
        message: `YOU CLICKED BUTTON ${event.target.id} ` });
  };
  btnHideClickHandler = ()=>{
    this.setState({
        open: false
      })
  }
  btnClickCloseHandler = () => {
    setTimeout(
      () =>
        this.setState({
          open: false
        }),
      5000
    );
  };
  componentDidMount() {
    this.btnClickCloseHandler();
  }
  componentDidUpdate() {
    this.btnClickCloseHandler();
  }
  render() {
    return (
      <>
      <div style={{paddingBottom:'20px'}}>
        <button onClick={this.btnClickHandler} id="A">
          BUTTON A
        </button>
        <button onClick={this.btnClickHandler} id="B">
          BUTTON B
        </button>
        </div>
        <MessageBox open={this.state.open} message={this.state.message} btnHideClickHandler={this.btnHideClickHandler}/>
      </>
    );
  }
}

export class MessageBox extends React.Component {

  btnClickHandler = () => {
    this.props.btnHideClickHandler()
  };
  render() {
   
    if(this.props.open){
    return (
      <div style={{
        width: '30%',
        height: '100px',
        backgroundColor: 'turquoise',
        margin:'auto',
        padding:'20px'
      }}>
        <div>{this.props.message}</div>
        <div>
          <button onClick={this.btnClickHandler}>CLOSE POP-UP</button>
        </div>
      </div>
    )
    }

    return null
  }
}
