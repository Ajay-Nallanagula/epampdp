import React from "react";
import Contact from "./Contact";
import About from "./About";

import { Link, Switch, Route } from "react-router-dom";
import FakeText from "../FakeText";

const Home = (props) => {
  const { history } = props;
  return (
    <>
      <h1>Home Page</h1>
      <div>
        <FakeText />
      </div>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <Link to="/home/contact">Contact</Link>
        </li>
        <li>
          <Link to="/home/about">About</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/home/contact" component={Contact}></Route>
        <Route path="/home/about" component={About}></Route>
      </Switch>
    </>
  );
};

export default Home;
