import React, { useRef, createRef, useState } from "react";

const CreateRefVsUseRef = () => {
  const createRefInp = createRef();
  const useRefInp = useRef(null);
  const [count, setCount] = useState(0);
  if (!useRefInp.current) {
    useRefInp.current = count;
  }
  if (!createRefInp.current) {
    createRefInp.current = count;
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