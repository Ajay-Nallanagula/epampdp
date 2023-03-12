import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";

const styleObj = {
  divClass: {
    background: "antiquewhite",
    padding: "20px 20px",
    position: "sticky",
  },
  liClass: {
    display: "inline",
    float: "left",
    marginRight: "20px",
  },
  liLastClass: {
    display: "inline",
    float: "right",
    marginLeft: "20px",
  },
  ulClass: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "flex-start",
  },
};

const NestedRoutes = () => {
  return (
    <>
      <div style={styleObj.divClass}>
        <ul style={styleObj.ulClass}>
          <li style={styleObj.liClass}>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </div>
      <Switch>
      <Route path="/home" component={Home}/>
      </Switch>
    </>
  );
};

export default NestedRoutes;
