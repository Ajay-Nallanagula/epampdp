import React from "react";

const KitKatBarContext = React.createContext();
const { Provider, Consumer: KitKatBarConsumer } = KitKatBarContext;

class KitKatBarProvider extends React.Component {
  state = { open: false, message: "" };
  btnClickHandler = (event) => {
    this.setState({
      open: true,
      message: `YOU CLICKED BUTTON ${event.target.id} `,
    });
  };
  btnHideClickHandler = () => {
    this.setState({
      open: false,
    });
  };
  btnAutoCloseHandler = () => {
    setTimeout(
      () =>
        this.setState({
          open: false,
        }),
      19000
    );
  };
  //   componentDidMount() {
  //     this.btnClickCloseHandler();
  //   }
  //   componentDidUpdate() {
  //     this.btnClickCloseHandler();
  //   }
  render() {
    const { children } = this.props;
    return (
      <Provider
        value={{
          isOpen: this.state.open,
          message: this.state.message,
          btnClickHandler: this.btnClickHandler,
          btnHideClickHandler: this.btnHideClickHandler,
          btnAutoCloseHandler: this.btnAutoCloseHandler,
        }}
      >
        {children}
      </Provider>
    );
  }
}

class MessageBox2 extends React.Component {
  btnClickHandler = () => {
    this.props.btnHideClickHandler();
  };
  render() {
    if (this.props.open) {
      return (
        <div
          style={{
            width: "30%",
            height: "100px",
            backgroundColor: "turquoise",
            margin: "auto",
            padding: "20px",
          }}
        >
          <div>{this.props.message}</div>
          <div>
            <button onClick={this.btnClickHandler}>CLOSE POP-UP</button>
          </div>
        </div>
      );
    }

    return null;
  }
}

export const KitKatBarGrandFather =()=><KitKatBarParent/>
export const KitKatBarParent = ()=><KitKatBar/>

export const KitKatBar = () => {
  return (
    <KitKatBarConsumer>
      {({
        isOpen,
        message,
        btnClickHandler,
        btnHideClickHandler,
        btnAutoCloseHandler,
      }) => {
        return (
          <>
            <div style={{paddingBottom:'15px'}}>
              <button onClick={btnClickHandler} id="A">
                BUTTON A
              </button>
              <button onClick={btnClickHandler} id="B">
                BUTTON B
              </button>
            </div>
            <MessageBox2
              open={isOpen}
              message={message}
              btnHideClickHandler={btnHideClickHandler}
            />
          </>
        );
      }}
    </KitKatBarConsumer>
  );
}

export { KitKatBarContext, KitKatBarProvider, KitKatBarConsumer };
