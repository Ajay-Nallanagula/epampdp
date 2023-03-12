import React from "react";
import CreateRefComponent from "./CreateRefComponent";
import SimpleUseRefDemo from "./SimpleUseRefDemo";
import CreateRefVsUseRef from "./CreateRefVsUseRef";
import UseRefVsUseState from "./UseRefVsUseState";
import UseRefVsUseStateSolution from "./UseRefVsUseStateSolution";

const ParentRef = () => {
  return (
    <>
      <div>
        <h3>CreateRef example</h3>
        <CreateRefComponent />
      </div>
      <div>
        <h3>useRef Example</h3>
        <SimpleUseRefDemo />
      </div>
      <div>
        <h3>CreateRef Vs. UseRef</h3>

        <CreateRefVsUseRef />
      </div>
      <div>
        <h3>UseState Vs UseRef</h3>
        <h4>Problem</h4>
        <UseRefVsUseState />
        <h4>Solution</h4>
        <UseRefVsUseStateSolution />
      </div>
    </>
  );
};

export default ParentRef;
