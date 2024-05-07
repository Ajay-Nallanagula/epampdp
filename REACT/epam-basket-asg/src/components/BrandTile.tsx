import { IBrand } from "../models/Product";
import { getDefaultVariant } from "../utils/productUtil";
import ProductTile from "./ProductTile";

interface IBrandTileProps {
  brand: IBrand;
}

const BrandTile: React.FC<IBrandTileProps> = ({ brand }) => {
  const defaultVariant = getDefaultVariant(brand.variants);
  return (
    <>
      <ProductTile
        variant={defaultVariant}
        key={defaultVariant.id}
        brand={brand}
      />
    </>
  );
};

export default BrandTile;
