import React, { useRef, createRef, useState } from "react";

const CreateRefVsUseRef = () => {
  const createRefInp = createRef();
  const useRefInp = useRef(null);
  const [count, setCount] = useState(0);

  if (!useRefInp.current) {  //The control will never pass into the condition,its initialized only once during comp mount
    useRefInp.current = count; //This will remain at initial count in state
  }
  if (!createRefInp.current) { //The control will enter this condition because state is always initialized to zero
    createRefInp.current = count; //This will show the incremented count in state
  }
  return (
    <>
      <p>Current render index: {count}</p>
      <p>
        <b>refFromUseRef</b> value: {useRefInp.current}
      </p>
      <p>
        <b>refFromCreateRef</b> value:{createRefInp.current}
      </p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click to Rerender
      </button>
    </>
  );
};

export default CreateRefVsUseRef