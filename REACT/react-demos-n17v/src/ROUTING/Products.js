import React from "react";
import FakeText from "./FakeText";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Products = (props) => {
  //The below mentioned history,match,location will be null/empty because ,
  //products route is defined as <Route><Product/></Route>, from react-routeV5.1 you need to access
  //these with hooks as shown below
  //const {history,match,location} = props
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();

  console.log("HOOKS", { history }, { location }, { params }, { match });

  const { prodName } = params;
  const { state, search } = location;
  //Search comes is an un-formatted query string ,
  //which needs to be parsed using browser-api or query-string library
  const searchParams = new URLSearchParams(search);
  for (const [key,value] of searchParams) {
    console.log({[key]:value});
  }
  //searchParams.map(item => console.log(item))
  return (
    <>
      <h1>Products Page for {prodName}</h1>
      <div>
        <h3>STATE: {JSON.stringify(state)}</h3>
        <h4>SEARCH: {JSON.stringify(search)}</h4>
        <FakeText />
      </div>
      <div>
        <button onClick={() => history.push("/contact")}>Go to Contact</button>
      </div>
      <div>
        <button onClick={() => history.push("/contact/someName")}>
          Go to Contact Param
        </button>
      </div>
      <div>
        <button onClick={() => history.push("/about")}>Go to About</button>
      </div>
    </>
  );
};

export default Products;
