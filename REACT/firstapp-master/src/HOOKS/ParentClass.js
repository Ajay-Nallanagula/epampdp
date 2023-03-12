import React from "react";
import AncientReactClass from "./AncientReactClass";
import ReactComponentES6WithHoc from "./HOC/ReactComponentES6WithHoc";
import ReactClassES6Way from './ReactClassES6Way'
import AnotherComponentWithHoc from './HOC/AnotherComponentWithHoc'
import ReactComponentNestedHoc from './HOC/ReactComponentNestedHoc'
import dummyclass from './dummyclass'
import UseEffectDemo from './UseEffectDemo'
import UseEffectDemoAPICall from './UseEffectDemoAPICall'
import {GotchaUseEffect1,GotchaUseEffectFn1} from './GotchaUseEffect1'
import {GotchaUseEffect2,GotchaUseEffectFn2} from './GotchaUseEffect2'
import UseEffectCompDidUpdate from './UseEffectCompDidUpdate'

class ParentClass extends React.Component {
  state = { id: 1 }; // class property proposal

  componentDidMount() {
    //MOCK UPDATION OF THE STATE
    setTimeout(() => {
      this.setState((prevState) =>
        prevState.id === 1 ? { ...prevState, id: 2 } : { ...prevState, id: 1 }
      );
    }, 6000);
  }

  render() {
    return <UseEffectCompDidUpdate/>
    // return <GotchaUseEffectFn2/>
    //return <GotchaUseEffect2/>
  //  return <><GotchaUseEffect1/><br/><br/><br/> <GotchaUseEffectFn1/></>
   //return <UseEffectDemoAPICall/>
   // return (this.state.id ===1 ? <UseEffectDemoAPICall/>:null)
     //return <UseEffectDemo/>
     //return (this.state.id ===1 ? <UseEffectDemo/>:null)
   // console.log({dummyclass})
   // console.log({ReactClassES6Way})
   // return <dummyclass/>
   // return <AncientReactClass id={this.state.id} />;
  // return <ReactClassES6Way id={this.state.id} />;
  //   return (
  //   <>
  //  <ReactComponentES6WithHoc id={this.state.id}/>
  //  <AnotherComponentWithHoc id={this.state.id}/>
  //  </>
  //   )
// return (<ReactComponentNestedHoc/>)
  }
}

export default ParentClass;

