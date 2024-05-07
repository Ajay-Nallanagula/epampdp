import styled from "styled-components";
import Dropdown from "../common/Dropdown";
import { getProductNames } from "../utils/productUtil";
import { IProduct } from "../models/Product";
import ProductTile from "./ProductTile";
import TilesLayout from "./TilesLayout";
import { ChangeEvent, useState } from "react";

//const StyledDropdown = styled.Dropdown``

const Container = styled.div`
  height: 50px;
  margin: 10px;
  border: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Item = styled.div`
  margin: 5px;
  width: 300px;
  height: 30px;
`;

const CartButton = styled.button`
  width: 250px;
  height: 25px;
`;

interface MainLayoutProps {
  products: IProduct[];
}

const MainLayOut: React.FC<MainLayoutProps> = ({ products }) => {
  const [selectedGroceryName, setselectedGroceryName] = useState("");
  const categories = getProductNames(products);

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setselectedGroceryName(event.target.value);
  };

  return (
    <main>
      <Container>
        <Item>
          <Dropdown
            options={categories}
            placeholder="Select a Category"
            onChange={handleCategoryChange}
          />
        </Item>
        <Item>
          <CartButton>Cart_Image</CartButton>
        </Item>
      </Container>
      <TilesLayout selectedGroceryName={selectedGroceryName} />
    </main>
  );
};

export default MainLayOut;
