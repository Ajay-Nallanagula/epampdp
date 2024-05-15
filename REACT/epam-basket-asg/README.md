Some Notes 

Scenario: redux createslice initialData is to be fetched as part of async data 
================================================================================
When using Redux, it's common to fetch some initial data asynchronously when the app starts. However, you can't make the initialState in createSlice async directly, because Redux needs to have an initial state synchronously to setup.

Typically, what you do is set an initial state as some sort of loading state, and then dispatch an async thunk action after the store has been created to load the data.

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../api";

// Async thunk
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetchProducts();
  return response;
});

// Slice
const productsSlice = createSlice({
  name: "products",
  initialState: { products: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;


import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./productsSlice";

const ProductsComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // ... render your component
};



// export const getSelectedVariant = createSelector(
//   [allProductsSelector], //allProductsSelector
//   (products: IProduct[], filterCriteria:{category:string,brandId:string,selectedVariantId:string}) =>
//     products
//       .find((product) => product.category === filterCriteria.category)
//       ?.brands.find((brand: IBrand) => brand.brandId === filterCriteria.brandId)
//       ?.variants.find((variant: IVariant) => variant.id === filterCriteria.selectedVariantId)
// );

//const fetchDefaultVariant = (brand:IBrand) => brand.variants.find(variant => variant.isDefault)

/*
// create a basic selector
const getAllItems = (state) => state.items

// create a selector that accepts parameters
export const selectItemById = createSelector(
  getAllItems, //allProductsSelector
  (state, itemId) => itemId,
  (items, itemId) => items.find(item => item.id === itemId)
)

*/
