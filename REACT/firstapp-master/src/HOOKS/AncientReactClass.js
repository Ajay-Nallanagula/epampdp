import React from "react";
var createClass = require('create-react-class')

//When react was introduced , this was the defacto way of creating react class,
// ES6 was not introduced by then. ES5 was in vogue.
//For createClass to work we need to do the following in modern ReactJs
    //a) npm install create-react-class --save
    //b) var createClass = require('create-react-class')

const AncientReactClass = createClass({
  getInitialState() {
    return {
      repos: [],
      loading: true,
    };
  },
  componentDidMount() {
    this.updateRepos(this.props.id);
  },
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.updateRepos(this.props.id);
    }
  },
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
  },
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
  },
});

export default AncientReactClass;
