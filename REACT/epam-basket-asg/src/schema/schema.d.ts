import { ICart, IProduct, IVariant } from "../models/Product";

export interface IOption {
  id: string | number;
  value: string | number;
  label: string;
  isSelected?: boolean;
}

export interface ISelectedCategory {
  category: string;
  categoryId?: string;
}

export interface IReduxInitialState {
  products: IProduct[];
  cart: ICart;
  selectedCategory: ISelectedCategory;
  selectedVariant: IVariant;
}
