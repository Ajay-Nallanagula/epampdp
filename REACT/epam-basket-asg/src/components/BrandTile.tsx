import { IBrand } from "../models/Product";
import ProductTile from "./ProductTile";

interface IBrandTileProps {
  brand: IBrand;
}

const BrandTile: React.FC<IBrandTileProps> = ({ brand }) => {
  return (
    <>
      <ProductTile brand={brand} key={brand.brandId} />
    </>
  );
};

export default BrandTile;
