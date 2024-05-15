import { IBrand, IProduct, IVariant } from "../models/Product";
import { IOption } from "../schema/schema";

export const getProductNames = (
  products: IProduct[],
  selectedCategory: string
) => {
  const groceryNames = products.map((product) => product.category);
  return formatDropDownOptions(groceryNames, selectedCategory);
};

export function formatDropDownOptions(
  products: string[],
  selectedCategory: string
) {
  const dropDownOptions = products.map((product, index) => {
    return {
      label: product,
      id: `${index}_${product}`,
      value: product,
      isSelected: selectedCategory === product,
    };
  });
  return dropDownOptions;
}

export const getSelectedCategoryWithName = (
  selectedCategoryName: string,
  products: IProduct[]
): IProduct => {
  return (
    products.find((product) => product.category === selectedCategoryName) ||
    ({} as IProduct)
  );
};

// export const getVariantInfo = (variants: IVariant[])=>{
//   const defaultVariant  =  getDefaultVariant(variants)
//   const allOtherVariants =
// }

export const getVariant = (variantId: string, variants: IVariant[]) => {
  return (
    variants.find((variant) => variant.id === variantId) || ({} as IVariant)
  );
};

export const getDefaultVariant = (variants: IVariant[]) => {
  return variants.find((variant) => variant.isDefault) || ({} as IVariant);
};

export const getVaraints = (variants: IVariant[]) => {
  return variants.map((variant) => {
    return {
      id: variant.id,
      label: variant.name,
      value: variant.id,
      isSelected: variant.isDefault,
    };
  });
};

export const getSelectedBrand = (
  product: IProduct,
  brandId?: string
): IBrand => {
  if (!brandId) {
    return {} as IBrand;
  }
  const brand: IBrand =
    product?.brands.find((brand: IBrand) => brand.brandId === brandId) ||
    ({} as IBrand);

  return brand;
};

export const getSelectedProduct = (products: IProduct[], category?: string) => {
  if (!category) {
    return {} as IProduct;
  }

  const product: IProduct =
    products.find((product) => product.category === category) ||
    ({} as IProduct);
  return product;
};

export const getSelectedVariantDetails = (
  products: IProduct[],
  filterCriteria: Partial<{
    category: string;
    brandId: string;
    selectedVariantId: string;
  }>
): {
  selectedVariant: IVariant;
  desc: string;
  brandName: string;
  allVariants: IVariant[];
} => {
  const product: IProduct = getSelectedProduct(
    products,
    filterCriteria.category
  );

  const brand = getSelectedBrand(product, filterCriteria.brandId);

  const selectedVariant =
    (filterCriteria.selectedVariantId &&
      getVariant(filterCriteria.selectedVariantId, brand.variants)) ||
    ({} as IVariant);

  return {
    allVariants: brand.variants,
    selectedVariant,
    desc: brand.desc,
    brandName: brand.brandName,
  };
};
