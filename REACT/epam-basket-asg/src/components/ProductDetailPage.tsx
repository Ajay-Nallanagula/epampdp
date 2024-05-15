import "../styles/productDetail.css";
import ProductDescription from "./product-desc/ProductDescription";
import { useSelector } from "react-redux";
import { getAllProducts } from "../store/productReducer";
import { getSelectedVariantDetails } from "../utils/productUtil";
import useUrlParams from "../hooks/useUrlParams";

const ProductDetailPage = () => {
  const products = useSelector(getAllProducts);
  const {
    brandId,
    category,
    variantId: selectedVariantId,
  } = useUrlParams(["brandId", "category"], ["variantId"]);

  const { selectedVariant, desc, brandName, allVariants } =
    getSelectedVariantDetails(products, {
      brandId,
      category,
      selectedVariantId,
    });

  return (
    <div className="main-container">
      <div className="left-container">
        <img src={selectedVariant.image}></img>
      </div>

      <div className="right-container">
        <ProductDescription
          desc={desc}
          brandName={brandName}
          allVariants={allVariants}
        />
      </div>
    </div>
  );
};

export default ProductDetailPage;
