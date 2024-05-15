import { useRoutes } from "react-router-dom";
import HomeRoute from "../components/HomeRoute";
import React from "react";
import MainLayout from "../components/MainLayout";
import TilesLayout from "../components/TilesLayout";

const LazyProductDetailPage = React.lazy(
  () => import("../components/ProductDetailPage")
);
//const LazyHomePage = React.lazy(() => import("../components/HomePage"))
const LazyCartPage = React.lazy(() => import("../components/CartPage"));

const Router = () => {
  const routes = useRoutes([
    { path: "/cart", element: <LazyCartPage /> },
    {
      path: "/productDetail/:variantId",
      element: <HomeRoute component={<LazyProductDetailPage />} />,
    },
    {
      path: "/",
      element: <HomeRoute component={<TilesLayout />} />,
    },
  ]);

  return routes;
};

export default Router;
