import { useState } from "react";
import { IVariant } from "../../models/Product";
import PackageSizeButton from "./PackageSizeButton";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedVariant } from "../../store/productReducer";
import { IReduxInitialState } from "../../schema/schema";

interface PackSizesProps {
  allVariants: IVariant[];
  selectedVariant: IVariant;
}

const PackSizes: React.FC<PackSizesProps> = ({
  allVariants,
  selectedVariant,
}) => {
  const { id: variantId } = useSelector(
    (state: IReduxInitialState) => state.selectedVariant
  );
  const [searchParams] = useSearchParams();
  const brandId = searchParams.get("brandId");
  const category = searchParams.get("category");

  const dispatch = useDispatch();

  const handlePackageSizeButtonClick = (e: any, variantId: string) => {
    dispatch(
      setSelectedVariant({ brandId, category, selectedVariantId: variantId })
    );
  };

  return (
    <>
      {allVariants.map((variant: IVariant) => (
        <PackageSizeButton
          variant={variant}
          isShowCheck={variant.id === (variantId || selectedVariant.id)}
          onClick={handlePackageSizeButtonClick}
          variantId={variant.id}
          key={variant.id}
        />
      ))}
    </>
  );
};

export default PackSizes;
