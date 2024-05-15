import { Suspense } from "react";
//import ProductsProvider from "./context/ProductsProvider";
import Router from "./routes/Routers";

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Router />
    </Suspense>
  );
};

export default App;
