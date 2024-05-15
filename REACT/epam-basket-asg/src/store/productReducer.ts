import { getDefaultVariant } from "./../utils/productUtil";
import { IBrand, ICart, IVariant } from "./../models/Product";
import { IReduxInitialState } from "./../schema/schema.d";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
//import { useProductsContext } from "../context/ProductsContext";
import { allProducts } from "../data/products";
import { IProduct } from "../models/Product";

//Use createAsyncthunk here
/*const fetchProducts = async () => {
  const products = await allProductsApi();
  return { products };
};*/

const initialState: IReduxInitialState = {
  products: allProducts,
  cart: { totalCartItems: 0 } as ICart,
  selectedCategory: {
    category: "",
    categoryId: "",
  },
  selectedVariant: {} as IVariant,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      return state;
    },
    removeProduct(state, action) {
      return state;
    },
    addToCart(state, action) {
      state.cart.totalCartItems += 1;
      return state;
    },
    addSelectedCategory(state, action) {
      state.selectedCategory.category = action.payload.category;
      state.selectedCategory.categoryId = action.payload.categoryId || "";
      return state;
    },

    setSelectedVariant(state, action) {
      const { category, brandId, selectedVariantId } = action.payload;
      const selectedVariant = state.products
        .find((product) => product.category === category)
        ?.brands.find((brand: IBrand) => brand.brandId === brandId)
        ?.variants.find(
          (variant: IVariant) => variant.id === selectedVariantId
        ) as IVariant;
      state.selectedVariant = selectedVariant;
      return state;
    },
  },
});

const allProductsSelector = (state: IReduxInitialState) => state.products;
const allCartItemsSelector = (state: IReduxInitialState) => state.cart;

export const getAllProducts = createSelector(
  [allProductsSelector],
  (products: IProduct[]) => products
);

export const getAllCartItems = createSelector(
  [allCartItemsSelector],
  (cart: ICart) => cart
);

export const {
  addProduct,
  removeProduct,
  addToCart,
  addSelectedCategory,
  setSelectedVariant,
} = productSlice.actions;

export default productSlice.reducer;
