import React from "react";

/*
AncientReactClass Vs ReactClassES6Way
1) Javascript ES6 has introduced class keyword.
2) React team embraced ES6 style of class creation, ditching the functional way of class creation.
3) Intention is to progress with ES6 

Drawbacks of ReactClassES6Way:
------------------------------
1) In the below example , class properties proposal is used, However in regular sense constructor should be used
2) constructor is rule of JS for inheritance, passage of props to CTOR is only React constraint. 
3) "this" phobia, Its tedious job to know how "this" works in JS , kyile Simpson have a book dedicated to "this"
4) "this" autobinding, like this.state, this.handler function etc.. practices have to be by-hearted.
To OVERCOME these nitty-gritty stuff, class properties proposals rescued react developers.

BUT the problem is not yet solved ..... 

Scenario : say we needed to create another component that also needed the repos state. 
Right now, that state and the logic for handling it lives inside of the ReactClassES6Way component. 
How do we separate it ?? 

1) Higher-Order-Componets can be one solution , (Different topic)
In short,  NewComponent =  HOC(component) , here HOC contains all the common logic , to it we pass our component which will give the repos
What if we have multiple HOC's
NewComponent =  HOC2(HOC1(HOC(component)))..... that's the mess with HOC . We end up in wrapper Hell


To SOLVE the above mentioned issues , React came up with Functional Components .
*/

class ReactClassES6Way extends React.Component {
    //Regular way
//   constructor(props) {
//     super(props);
//     this.state = {
//       repos: [],
//       loading: true,
//     }
//this.updateRepos = this.updateRepos.bind(this)
//   }

state = {
    repos: [],
    loading: true,
  }

  updateRepos = this.updateRepos.bind(this)

  componentDidMount() {
    this.updateRepos(this.props.id); //1
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.updateRepos(this.props.id);
    }
  }

  updateRepos(id) {
    this.setState((prevState) => ({ ...prevState, loading: true }));
    //PSUEDO API CALL, Based on ID your repo changes
    setTimeout(() => {
      this.setState((prevState) => {
        let repos = [];
        if (id === 1) {
          repos = ["UserRepo", "AdminRepo"];
        } else if (id === 2) {
          repos = ["UPDATED_UserRepo", "UPDATED_AdminRepo"];
        }
        return { ...prevState, repos, loading: false };
      });
    }, 5000);
  }

  render() {
    const { loading, repos } = this.state;

    if (loading === true) {
      return (
        <div>
          <h1>LOADING......</h1>
        </div>
      );
    }

    return (
      <ul>
        {repos.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}

export default ReactClassES6Way;
