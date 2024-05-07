export interface IVariant {
  id: string;
  name: string;
  weight: number;
  price: number;
  weightedIn: string;
  isDefault?: boolean;
  image: string;
};

export interface IBrand {
  brand: string;
  brandId:string;
  desc: string;
  variants: IVariant[];
}

export interface IProduct {
  category: string;
  name: string;
  productId:string;
  brands: IBrand[];
}
