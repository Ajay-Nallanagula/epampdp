import {RouteObject, useRoutes } from "react-router-dom";
import HomePage from "../components/HomePage";

const routes:RouteObject[] = [
  {
    path: "/",
    element: <HomePage/>,
    //children:[]
  }
]

export default routes
