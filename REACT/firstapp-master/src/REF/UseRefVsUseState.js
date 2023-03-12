import React, { useState } from "react";

const UseRefVsUseState = () => {
//The count below is re-initialized for evvery re-render, cannot hold the previous value
//persistence during re-renders is not possible
  let count = 0;
  const [state, setState] = useState("A");
  const handleClick = () => {
    setState((prevState) => prevState + "--u--");
    count++;
  };
  return (
    <>
      <div>State:{state}</div>
      <div>Show count: {count}</div>
      <button onClick={handleClick}>Click Me!!</button>
    </>
  );
};



export default UseRefVsUseState;

