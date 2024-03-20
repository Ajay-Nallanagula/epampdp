//Example Reference: https://dev.to/julfikarhaidar/redux-toolkit-crud-example-with-react-hooks-4d98

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit'



/*
    When you use createSlice  we see following error:
    Cannot use `create.asyncThunk` in the built-in `createSlice`. 
    Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.

    To avoid that we make use of 
    export const createProductsSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
    })
*/


export const createProductsSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

const slice = createProductsSlice({       //createSlice({
    name: 'products',
    initialState: {
        products: [],
        error: "",
        loading: false,
        selectedProductDetail: {}
    },
    reducers: (create) => ({
        fetchAllProducts: create.asyncThunk(
            async (obj1, obj2) => {
                console.log({ obj1 }, { obj2 })
                const productsPromise = await fetch('https://dummyjson.com/products')
                const productsResponse = await productsPromise.json()
                return productsResponse.products
            },
            {
                pending: (state) => {
                    state.loading = true
                },
                rejected: (state, _action) => {
                    state.loading = false
                },
                fulfilled: (state, action) => {
                    state.products = [...action.payload]
                }
            }
        ),

        fetchProductById: create.asyncThunk(
            async (product) => {
                const id = product.id
                const productsPromise = await fetch(`https://dummyjson.com/products/${id}`)
                const productsResponse = await productsPromise.json()
                return productsResponse
            },
            {
                pending: (state) => {
                    state.loading = true
                },
                rejected: (state, _action) => {
                    state.loading = false
                },
                fulfilled: (state, action) => {
                    state.selectedProductDetail = { ...action.payload }
                }
            }
        )
    })
    // Old Way, there is also ancientway  using speciffic middleware THE STORE=>NEXT=>ACTION way
    //#region
    // reducers: {
    //     loadProducts: (state, action) => {
    //         state.currentPage = action.payload;
    //     },
    // },
    // extraReducers: {
    //     [fetchAllProducts.pending]: (state, action) => {
    //         state.loading = true
    //     },
    //     [fetchAllProducts.fulfilled]: (state, action) => {
    //         state.loading = false
    //         state.products = [action.payload]
    //     },
    //     [fetchAllProducts.rejected]: (state, action) => {
    //         state.loading = false
    //         state.error = action.payload.message
    //     }
    // }
    //#endregion
})


const { reducer, actions } = slice

console.log(actions)

export const { fetchAllProducts, fetchProductById } = actions

export default reducer


// const fetchAllProducts = createAsyncThunk(
//     'crud-redux/products',
//     async (obj1, obj2) => {
//         console.log({ obj1 }, { obj2 })
//         try {
//             const productsPromise = await fetch('https://dummyjson.com/products')
//             const productsResponse = await productsPromise.json()
//             return productsResponse.data
//         } catch (error) {
//             console.error('Error in API', error)
//             return obj2.rejectWithValue(error.response.data)
//         }
//     })
