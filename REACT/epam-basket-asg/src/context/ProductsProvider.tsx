import { useContext, useEffect, useState } from "react";
import ProductContext, { Provider } from "./ProductsContext";
import { IProduct } from "../models/Product";
import allProductsApi from "../data/products";

interface IProductsProviderProps {
  children: any;
}

const ProductsProvider: React.FC<IProductsProviderProps> = (props) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await allProductsApi();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return <Provider value={{ products }}>{props.children}</Provider>;
};

export default ProductsProvider;
