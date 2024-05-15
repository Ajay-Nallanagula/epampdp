import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import Dropdown from "../common/Dropdown";
import { IBrand, IProduct, IVariant } from "../models/Product";
import "../styles/product.css";
import {
  getDefaultVariant,
  getVaraints,
  getVariant,
} from "../utils/productUtil";
import ImageButton from "../common/ImageButton";
import { useNavigate } from "react-router-dom";
import TitleTile from "./TitleTile";
import { useDispatch, useSelector } from "react-redux";
import { IReduxInitialState } from "../schema/schema";
import { setSelectedVariant } from "../store/productReducer";

interface ProductTileProps {
  brand: IBrand;
  isShowImage?: boolean;
}

const ProductTile: React.FC<ProductTileProps> = ({
  brand,
  isShowImage = true,
}): React.JSX.Element => {
  const dispatch = useDispatch();
  const { brandName: brandName, desc, variants, brandId } = brand;
  const formattedVariants = getVaraints(variants);
  const defaultVariant = getDefaultVariant(variants);

  const category = useSelector(
    (state: IReduxInitialState) => state.selectedCategory.category
  );

  // let selectedVariant = useSelector(
  //   (state: IReduxInitialState) => state.selectedVariant
  // );

  // if (!selectedVariant || !Object.keys(selectedVariant).length) {
  //   selectedVariant = defaultVariant;
  // }

  const [selectedVariant, setSelectedVariantVal] =
    useState<IVariant>(defaultVariant);

  const [isShowAddCounter, setIsShowAddCounter] = useState(true);

  const handleDropDownChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedSpecificVariant = getVariant(event.target.value, variants);
    setIsShowAddCounter(true);
    setSelectedVariantVal(selectedSpecificVariant);

    dispatch(
      setSelectedVariant({
        brandId,
        category: selectedSpecificVariant.category,
        selectedVariantId: selectedSpecificVariant.id,
      })
    );
  };

  const handleProductImageClick = () => {
    const queryString = `?category=${selectedVariant.category}&brandId=${brandId}`;
    window.open(`/productDetail/${selectedVariant.id}${queryString}`, "_blank");
  };

  return (
    <article id="productItem" style={{ margin: "5px" }}>
      {isShowImage && (
        <figure>
          <ImageButton
            imageUrl={selectedVariant.image}
            onClick={handleProductImageClick}
          />
        </figure>
      )}

      <TitleTile
        brandName={brandName}
        desc={desc}
        price={selectedVariant.price}
        name={selectedVariant.name}
      />
      <Dropdown options={formattedVariants} onChange={handleDropDownChange} />

      <section>
        <AddToCartButton
          isShowAddCounter={isShowAddCounter}
          resetShowAddCounter={setIsShowAddCounter}
        />
      </section>
    </article>
  );
};

export default ProductTile;
