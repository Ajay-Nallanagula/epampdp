import React from "react";
import withHoc from "./withHoc";

const AnotherComponentWithHoc = (props) => {
  const { loading, repos } = props;

  if (loading === true) {
    return (
      <div>
        <h2>Returned from AnotherComponentWithHoc</h2>
        <h1>LOADING......</h1>
      </div>
    );
  }

  return (
    <div>
      <h2>Returned from AnotherComponentWithHoc</h2>
      <ul>
        {repos.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default withHoc(AnotherComponentWithHoc);
