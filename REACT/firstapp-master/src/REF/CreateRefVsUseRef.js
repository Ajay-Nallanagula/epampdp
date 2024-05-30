import React, { useRef, createRef, useState } from "react";

/* Use Cases of useRef
Managing Focus, Text Selection, or Media Playback You use useRef to keep a mutable reference to an HTML element like an input or a video, for example, and then you can focus, select or play it, as well as manipulating other properties or methods available in native DOM elements.

Animation You can use useRef to hold a reference to an animation, for example, when using a third-party library like GSAP.

Adding a Container for Instance Variables If a certain value (state or props) is changing within components, usually if we need to access the latest state from an asynchronous callback, etc., we may need the useRef hook. The useRef Hook in React creates a mutable object whose .current property is passed as an argument (the initial value). It’s like a box that can hold a mutable value in its .current property.

Storing Immutable Values over Lifecycles of the Component If you want to store a value across re-renders but don’t want to cause a re-render when that value changes, then useRef is the tool for it. It’s like having a box in memory that holds any value you want to put into it while your component is mounted.

Interacting with Third-Party DOM Libraries There are many third-party libraries that operate directly on the DOM and useRef could be used to hold a reference to a DOM node for that library to manipulate.

Mocking Instance Methods for Functional Components Class components usually have instance methods, while functional components do not. However, in functional components, a useRef Hook can be used to mimic the same behavior.

Remember, although useRef can be a powerful tool, it’s important to use it sparingly and only when necessary, as direct manipulation of the DOM in React should generally be avoided.
*/


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