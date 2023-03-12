import React from "react";
import Home from './Home'
import Contact from './Contact'
import { Route, Switch, Link } from "react-router-dom";

const CodeSplittingRouteDemo = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/home" component={Home} exact></Route>
        <Route path="/contact" component={Contact} exact></Route>
      </Switch>
    </>
  );
};

export default CodeSplittingRouteDemo;
