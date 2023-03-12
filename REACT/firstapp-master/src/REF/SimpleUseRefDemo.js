import React, { useRef } from "react";

const SimpleUseRefDemo = () => {
  const inputEl = useRef(null);
  const handleClickHandler = () => {
    //the inputEL.current currently has  reference to textox,  pure events only will work
    inputEl.current.onmouseover = () =>
      (inputEl.current.value = "You are Hovering");
    inputEl.current.onmouseout = () => (inputEl.current.value = "");
  };
  
  return (
    <>
      <button onClick={handleClickHandler}>Click Here for TextBox</button>
      <input type="text" ref={inputEl} />
     
    </>
  );
};

export default SimpleUseRefDemo;
