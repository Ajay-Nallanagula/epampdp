import React from "react";

class ComponentDidUpdateDemo2Child extends React.Component {
  state = { projects: [] };

  //API call 
  fetchProjects(id){
    console.log({id})
    if(!id) return null;
    setTimeout(()=>{
      this.setState({
          projects:
          id === "1" ? ["Alpha", "Beta"] : ["Charlie", "Delta"],
        });
    },300)
  }

  componentDidMount(){
    console.log("componentDidMount is called ");
    this.fetchProjects(this.props.id)
  }

  componentDidUpdate(prevProps,prevState,snapShots) {
    if (prevProps.id !== this.props.id) {
      console.log("componentDidUpdate is called ");
      this.fetchProjects(this.props.id)
    }
  }

  render() {
    return this.props.id && (
      <div>
        ComponentDidUpdateDemo2Child
        {this.state.projects.map((project) => {
            return <div>{project}</div>
          })}
      </div>
    );
  }
}

export default ComponentDidUpdateDemo2Child;
