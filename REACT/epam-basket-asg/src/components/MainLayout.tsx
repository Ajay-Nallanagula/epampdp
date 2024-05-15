import styled from "styled-components";
import Dropdown from "../common/Dropdown";
import { getProductNames } from "../utils/productUtil";
import { ICart, IProduct } from "../models/Product";
import { ChangeEvent, Children } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedCategory,
  getAllCartItems,
  getAllProducts,
} from "../store/productReducer";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IReduxInitialState } from "../schema/schema";
import TilesLayout from "./TilesLayout";

//const StyledDropdown = styled.Dropdown``

const Container = styled.div`
  height: 50px;
  margin: 10px;
  border: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Item = styled.div`
  margin: 5px;
  width: 100px;
  height: 30px;
`;

const CartItem = styled.div`
  margin: 5px;
  width: 100px;
  height: 30px;
  position: relative;
`;

const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const CartBadge = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  color: red;
  position: absolute;
  left: 2px;
  bottom: 15px;
`;

const StyledBannerContainer = styled.div`
  display: flex;
  justifycontent: center;
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const products = useSelector(getAllProducts);
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "";

  const category =
    useSelector(
      (state: IReduxInitialState) => state.selectedCategory.category
    ) || categoryFromUrl;

  const navigate = useNavigate();
  const categories = getProductNames(products, category);
  const cart: ICart = useSelector(getAllCartItems);

  const dispatch = useDispatch();

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(addSelectedCategory({ category: event.target.value }));
    navigate("/");
  };

  const handleCartButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (cart.totalCartItems > 0) {
      navigate("/cart");
    }
  };

  return (
    <main>
      <StyledBannerContainer>
        <h2>Epam Basket</h2>
      </StyledBannerContainer>

      <Container>
        <Item>
          <Dropdown
            options={categories}
            placeholder="Select a Category"
            onChange={handleCategoryChange}
            isEmptyRequired={true}
          />
        </Item>
        <CartItem>
          {
            <CartButton onClick={handleCartButton}>
              <ShoppingCartOutlinedIcon fontSize="large" />
              {cart.totalCartItems > 0 && (
                <CartBadge>
                  <b>{cart.totalCartItems}</b>
                </CartBadge>
              )}
            </CartButton>
          }
        </CartItem>
      </Container>

      {children}
    </main>
  );
};

export default MainLayout;
