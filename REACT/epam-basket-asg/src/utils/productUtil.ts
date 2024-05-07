import { IProduct, IVariant } from "../models/Product";

export const getProductNames = (products: IProduct[]) => {
  const groceryNames = products.map((product) => product.name);
  //const productsSet = new Set(groceryNames);
  return formatDropDownOptions(groceryNames);
};

export function formatDropDownOptions(products: string[]) {
  const dropDownOptions = products.map((product, index) => {
    return {
      label: product,
      id: `${index}_${product}`,
      value: product,
    };
  });
  return dropDownOptions;
}

export const getSelectedGroceryWithName = (
  selectedGroceryName: string,
  products: IProduct[]
): IProduct => {
  return (
    products.find((product) => product.name === selectedGroceryName) ||
    ({} as IProduct)
  );
};

export const getDefaultVariant = (variants: IVariant[]) => {
  return variants.find((variant) => variant.isDefault) || ({} as IVariant);
};

export const getVaraints = (variants: IVariant[]) =>{
  return variants.map(variant => {
    return {
      
    }
  })
}
