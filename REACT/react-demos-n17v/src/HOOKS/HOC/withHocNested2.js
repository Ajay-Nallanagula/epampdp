import React from "react";

const withHocNested2 = (ComponentRecieved) => {
  return class WithHocNested2 extends React.Component {
      state={
          name:'WithHocNested2'
      }
    render() {
      return <ComponentRecieved {...this.props} {...this.state}/>
    }
  };
};

export default withHocNested2;
