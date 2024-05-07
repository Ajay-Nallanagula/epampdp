import React from "react";
import styled from "styled-components";
import { IProduct } from "../models/Product";
import { useProductsContext } from "../context/ProductsContext";
import { getSelectedGroceryWithName } from "../utils/productUtil";
import ProductTile from "./ProductTile";
import BrandTile from "./BrandTile";

const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

interface TileProps {
  children?: React.JSX.Element[];
  selectedGroceryName: string;
}

const TilesLayout: React.FC<TileProps> = ({ selectedGroceryName }) => {
  const { products } = useProductsContext();
  const grocery = getSelectedGroceryWithName(selectedGroceryName, products);

  return (
    <Container>
      {grocery.brands?.map((brand) => {
        return <BrandTile brand={brand} key={brand.brandId} />;
      })}
    </Container>
  );
};

export default TilesLayout;
