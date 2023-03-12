import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Child1 from './Child1'
const arr = []

const ErrorBoundaryDemoParent1 = () => {
  
// const [count, setCount] = useState(0);
// const btnHandler = () => {
//   setCount(count + 1);
// };
  // if (count === 1) {
  // const length =  arr[1].length
  // }
 
  return (
    <React.Fragment>
      <h1>ErrorBoundaryDemo--Parent1</h1>
      {/*<button onClick={btnHandler}>Trigger error</button>*/}
      <Child1/>
    </React.Fragment>
  );
};

export default ErrorBoundaryDemoParent1;
