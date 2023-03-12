import React from 'react'
import {Provider} from './KitKatBarContext'

export class KitKatBarProvider extends React.Component {
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
   /* btnAutoCloseHandler = () => {
      setTimeout(
        () =>
          this.setState({
            open: false,
          }),
        1900000
      );
    };
      componentDidMount() {
        this.btnAutoCloseHandler();
      }
      componentDidUpdate() {
        this.btnAutoCloseHandler();
      }*/
    render() {
      const { children } = this.props;
      return (
        <Provider
          value={{
            isOpen: this.state.open,
            message: this.state.message,
            btnClickHandler: this.btnClickHandler,
            btnHideClickHandler: this.btnHideClickHandler,
          }}
        >
          {children}
        </Provider>
      );
    }
  }

  export default KitKatBarProvider