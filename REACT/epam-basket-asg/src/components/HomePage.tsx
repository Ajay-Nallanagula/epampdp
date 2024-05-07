import React, { useEffect, useState } from "react";
import { IProduct } from "../models/Product";
import allProductsApi from "../data/products";
import ProductTile from "./ProductTile";
import MainLayOut from "./MainLayout";
import TilesLayout from "./TilesLayout";
import { useProductsContext } from "../context/ProductsContext";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justifycontent: center;
`;

const HomePage = (): React.JSX.Element => {
  const { products } = useProductsContext();
  return (
    <>
      <StyledContainer>
        <h2>Epam Basket</h2>
      </StyledContainer>
      <MainLayOut products={products} />
    </>
  );
};

export default HomePage;
