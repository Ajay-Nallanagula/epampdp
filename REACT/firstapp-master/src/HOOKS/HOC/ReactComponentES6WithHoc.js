import React from "react";
import withHoc from "./withHoc";

const ReactComponentES6WithHoc = (props) => {
  const { loading, repos } = props;

  if (loading === true) {
    return (
      <div>
        <h2>Returned from ReactComponentES6WithHoc</h2>
        <h1>LOADING......</h1>
      </div>
    );
  }

  return (
    <div>
      <h2>Returned from ReactComponentES6WithHoc</h2>
      <ul>
        {repos.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default withHoc(ReactComponentES6WithHoc);
