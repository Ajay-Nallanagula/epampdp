import React, { useState, useEffect } from "react";

/**
 * Capture props and state componentDidMount Vs UseEffect
 */

const longResolve = () => new Promise((res) => setTimeout(res, 3000))

export class GotchaUseEffect2 extends React.Component {
  state = { count: 0 };
  componentDidMount() {
   // longResolve().then(()=> alert(this.state.count)) //async
    setTimeout(() => alert(this.state.count), 3000);
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState((state) => ({ count: state.count + 1 }));
          }}
        >
          CLICK ME MULTIPLE TIMES BEFORE 3S
        </button>
      </div>
    );
  }
}

//The count will always be zero, here because useEffect is a closure, when its created the value of count is zero 
//So zero is retained , where as compnentDidMount is not a closure at all. 
//Hence it increments the value . 

export const GotchaUseEffectFn2 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const count=0
   // setTimeout(() => alert(count), 3000);
   longResolve().then(()=> alert(count)) //async
  },[count]);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        CLICK ME MULTIPLE TIMES BEFORE 3S
      </button>
    </div>
  );
};
