import React from "react";

const ErrorDesc = ({ error }) => {
  return <div>{JSON.stringify(error)}</div>;
};

export default ErrorDesc;
