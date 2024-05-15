import React from "react";
import MainLayout from "./MainLayout";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getAllProducts } from "../store/productReducer";
import { Outlet } from "react-router-dom";

const StyledContainer = styled.div`
  display: flex;
  justifycontent: center;
`;

interface HomeRouteProps {
  component?: React.ReactNode;
}

const HomeRoute: React.FC<HomeRouteProps> = ({ component }) => {
  return <MainLayout>{component}</MainLayout>;
};

export default HomeRoute;
