import React from "react";
class SimplifyShouldComponentUpdateChild extends React.Component {
  // state={title:this.props.title}

  // componentDidMount(){
  //     this.setState({session:'Praveen DOUBT!!!'})
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //     console.log(
  //       "GRAND CHILD --> ",
  //       "getDerivedStateFromProps --> ",
  //       { nextProps },
  //       { prevState }
  //     );
  //     //The state will be stale, not the updated state , we need to pass the updated state
  //     // return null

  //     if (nextProps.title !== prevState.title) {
  //       return { title: nextProps.title };
  //     }
  //     return null;
  //   }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log({ nextProps }, { nextState });
    const isTitleChange = this.props.title !== nextProps.title;
    const isSalaryChange = this.props.salary !== nextProps.title;
    return isTitleChange || isSalaryChange;
    //return  false

    //const stateChanged = this.state.session !== nextState.session
    //return stateChanged
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.id}</div>
        <div>{this.props.title}</div>
        <div>{this.props.salary}</div>
      </div>
    );
  }
}
export default SimplifyShouldComponentUpdateChild;
