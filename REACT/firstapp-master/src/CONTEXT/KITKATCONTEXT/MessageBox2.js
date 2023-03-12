import React from 'react'

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
              borderRadius: "25px"
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

  export default MessageBox2