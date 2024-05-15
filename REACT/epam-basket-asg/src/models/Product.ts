export interface IVariant {
  id: string;
  name: string;
  weight: number;
  price: number;
  weightedIn: string;
  isDefault?: boolean;
  image: string;
  category: string;
}

export interface IBrand {
  brandName: string;
  brandId: string;
  desc: string;
  variants: IVariant[];
  category: string;
}

export interface IProduct {
  group: string;
  category: string;
  productId: string;
  brands: IBrand[];
}

export interface ICart {
  totalCartItems: number;
  cartItems?: IProduct[];
}
