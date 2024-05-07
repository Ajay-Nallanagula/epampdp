import ProductsProvider from "./context/ProductsProvider";
import routes from "./routeConfig/Routes";
import { useRoutes } from "react-router-dom";

const App = () => {
  const configuredRoutes = useRoutes(routes);
  return <ProductsProvider>{configuredRoutes}</ProductsProvider>;
};

export default App;
