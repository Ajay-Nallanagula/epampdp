import { useState } from "react";
import { IVariant } from "../../models/Product";
import AddToCartButton from "../AddToCartButton";
import BrandTile from "../BrandTile";

import TitleTile from "../TitleTile";
import PackSizes from "./PackSizes";
import { useSelector } from "react-redux";
import { IReduxInitialState } from "../../schema/schema";
import { getDefaultVariant } from "../../utils/productUtil";

interface ProductDescriptionProps {
  brandName: string;
  desc: string;
  allVariants: IVariant[];
  isShowTitle?: boolean;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  brandName,
  desc,
  allVariants,
}) => {
  const defaultVariant = getDefaultVariant(allVariants);
  let selectedVariant = useSelector(
    (state: IReduxInitialState) => state.selectedVariant
  );

  if (!Object.keys(selectedVariant).length) {
    selectedVariant = { ...defaultVariant };
  }

  const [isShowAddCounter, setIsShowAddCounter] = useState(true);

  return (
    <div style={{ margin: "5px" }}>
      <TitleTile
        brandName={brandName}
        desc={desc}
        price={selectedVariant.price}
        name={selectedVariant.name}
      />

      <AddToCartButton
        isShowAddCounter={isShowAddCounter}
        resetShowAddCounter={setIsShowAddCounter}
      />

      <PackSizes
        allVariants={allVariants}
        selectedVariant={selectedVariant}
      ></PackSizes>
    </div>
  );
};

export default ProductDescription;
