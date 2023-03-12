import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import Products from "./Products";
import Category from "./Category";
const styleObj = {
  divClass: {
    background: "aqua",
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

const RoutingDemo = () => {
  const name = "AJAYNALLANAGULA";
  const prodName = "Shoe";
  return (
    <>
      {/* <div style={styleObj.divClass}>
        <ul style={styleObj.ulClass}>
          <li style={styleObj.liClass}>
            <a href="/">Home</a>
          </li>
          <li style={styleObj.liClass}>
            <a href="/contact">Contact</a>
          </li>
          <li style={styleObj.liLastClass}>
            <a href="/about">About</a>
          </li>
        </ul>
      </div> */}
      {/* <Route path='/' render={()=><h1>Welcome Home</h1>}/> */}
      <div style={styleObj.divClass}>
        <ul style={styleObj.ulClass}>
          <li style={styleObj.liClass}>
            <Link to="/">Home</Link>
          </li>
          <li style={styleObj.liClass}>
            <Link to={`/contact/${name}`}>Contact</Link>
          </li>
          <li style={styleObj.liClass}>
            <Link
              to={{
                pathname: `/product/${prodName}`,
                state: {
                  empObj: {
                    empId: "84",
                    empName: "Ajay Kumar N",
                    empAddr: "Hitech-city",
                  },
                },
                search:'?size=8&brand=rebook&color=blue'
              }}
            >
              Products
            </Link>
          </li>
          <li style={styleObj.liClass}>
            <NavLink to={`/category`}>Category</NavLink>
          </li>
          <li style={styleObj.liLastClass}>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact/:name?" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/product/:prodName?">
          <Products />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </>
  );
};

export default RoutingDemo;
