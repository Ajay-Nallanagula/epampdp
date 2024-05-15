import styled from "styled-components";
import { IBrand, IProduct } from "../models/Product";
import BrandTile from "./BrandTile";
import { getSelectedCategoryWithName } from "../utils/productUtil";
import { useSelector } from "react-redux";
import { IReduxInitialState } from "../schema/schema";

const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const TilesLayout = () => {
  const products = useSelector((state: IReduxInitialState) => state.products);
  let reqBrands: IBrand[] = [];
  //Selected Category
  const { category } = useSelector(
    (state: IReduxInitialState) => state.selectedCategory
  );

  if (!category) {
    const allBrands = products.map((product: IProduct) => product.brands);
    reqBrands = allBrands.flat();
  } else {
    const grocery = getSelectedCategoryWithName(category, products);
    reqBrands = [...grocery.brands];
  }

  return (
    <Container>
      {reqBrands?.map((brand) => {
        return <BrandTile brand={brand} key={brand.brandId} />;
      })}
    </Container>
  );
};

export default TilesLayout;
