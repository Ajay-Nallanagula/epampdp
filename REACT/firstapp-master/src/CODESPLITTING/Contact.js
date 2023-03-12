import React,{Suspense} from "react";
import Fallback from "./FallBack";
// import CodeSplitComponent1 from "./CodeSplitComponent1";
// import CodeSplitComponent2 from "./CodeSplitComponent2";

const CodeSplitComponent2 = React.lazy(() =>
  import("./CodeSplitComponent2" /*webpackChunkName: 'CodeSplitComponent2' */)
);

const CodeSplitComponent1 = React.lazy(() =>
  import("./CodeSplitComponent1" /*webpackChunkName: 'CodeSplitComponent1' */)
);

const Contact = (props) => {
  return (
    <Suspense fallback={Fallback}>
      <h1>Contact Page</h1>
      <CodeSplitComponent1 />
      <CodeSplitComponent2 />
    </Suspense>
  );
};

export default Contact;
