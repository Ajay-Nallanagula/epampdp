import React from "react";
import SimplifyShouldComponentUpdateChild from './SimplifyShouldComponentUpdateChild'
class SimplifyShouldComponentUpdate extends React.Component {
  state = {
    name: "Ajay",
    id: "72",
    title: "Sr.Software Engineer",
    salary: "1000",
  };

 

  componentDidMount() {
    this.setState({ title: "Lead Engineer", salary: "1500" }); //Merge
  }

  render() {
    return (
     <SimplifyShouldComponentUpdateChild {...this.state}/>
    );
  }
}
export default SimplifyShouldComponentUpdate;
