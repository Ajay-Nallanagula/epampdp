import React from "react";
import ErrorDesc from './ErrorDesc'

//https://builtin.com/software-engineering-perspectives/react-error-boundary

/*
Development Mode:

Error Reporting: In development, React provides more detailed error messages and stack traces. This helps developers identify the source of the error and debug more effectively.
Component Tree: React intentionally unmounts the whole component tree below the error boundary and remounts it for a better debugging experience. This makes sure that you get the latest error messages and stack traces.

Production Mode:

Error Reporting: In production, the error messages are less detailed to avoid exposing potentially sensitive information about the internals of your application.
Component Tree: In production, React tries to render as much of the UI as possible, preserving the parts of the component tree that didn’t crash. This behavior provides a better user experience by avoiding a full re-render of the component tree below the error boundary.
*/

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null, errorInfo: null };

  static getDerivedStateFromError(error) {
    //When error is encountered this static method is hit and updates the state 
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState(() => ({
      hasError: true, error: error, errorInfo: errorInfo
    }));
  }

  render() {
    if (this.state.hasError) {
      return <ErrorDesc error={this.state.errorInfo} />;
    }
    return this.props.children
  }
}

export default ErrorBoundary;
