import React, { useState ,useRef} from "react";

const UseRefVsUseStateSolution = () => {
    const countRef = useRef(0);
    const [state, setState] = useState("A");
    const handleClick = () => {
      setState((prevState) => prevState + "--u--");
      countRef.current++;
    };
    return (
      <>
        <div>State:{state}</div>
        <div>Show count: {countRef.current}</div>
        <button onClick={handleClick}>Click Me!!</button>
      </>
    );
  };
  
  export default UseRefVsUseStateSolution