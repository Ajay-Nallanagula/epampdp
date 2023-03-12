import React from "react";
import ErrorDesc from './ErrorDesc'

class ErrorBoundary extends React.Component {
  state = { hasError: false, error:null,errorInfo:null };

  static getDerivedStateFromError(error) {
    //When error is encontered this static method is hit and updates the state 
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState(() =>({
        hasError:true, error:error, errorInfo:errorInfo
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
