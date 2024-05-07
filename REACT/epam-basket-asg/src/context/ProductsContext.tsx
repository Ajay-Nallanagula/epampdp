import React, { useContext } from "react";
import { IProduct } from "../models/Product";

type Products = {
  products: IProduct[];
};

const ProductContext = React.createContext<Products>({ products: [] });
const { Provider, Consumer } = ProductContext;

const useProductsContext = () => {
  return useContext(ProductContext);
};

export { Provider, Consumer, useProductsContext };
export default ProductContext;
