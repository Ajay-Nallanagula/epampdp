import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import ErrorBoundaryDemoParent1 from "./ErrorBoundaryDemoParent1";

const ErrorBoundaryApp = () => {
  return (
    <ErrorBoundary>
      <ErrorBoundaryDemoParent1 />
    </ErrorBoundary>
  );
};

export default ErrorBoundaryApp;
