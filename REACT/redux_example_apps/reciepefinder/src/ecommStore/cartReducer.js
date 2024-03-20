import { createAction, createReducer, createSlice, current } from "@reduxjs/toolkit"

import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import Item6 from '../images/item6.jpg'

const preloadedState = {
    items: [
        {
            id: 1, title: 'Winter body',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 110,
            img: Item1,
            quantity: 0,
        },
        { id: 2, quantity: 0, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2 },
        { id: 3, quantity: 0, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3 },
        { id: 4, quantity: 0, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4 },
        { id: 5, quantity: 0, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5 },
        { id: 6, quantity: 0, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item6 }
    ],
    addedItems: [],
    total: 0
}

/*
export const addToCart = createAction('addToCart')

//Deprecated Style of createReducer
// const reducer = createReducer([], {
//     [addToCart.type]: (state, action) => {
//         const selectedItem = state.items.filter(item => item.id === action.payload.id)
//         state.addedItem = [...state.addedItem, selectedItem]
//         state.total = state.total + 1
//     }
// })

const reducer = createReducer(preloadedState, builder => {
    //similar to switch-case
    builder
        .addCase(addToCart.type, (state, action) => {
            //https://stackoverflow.com/questions/64586207/redux-toolkit-state-showing-as-proxy-undefined-within-reducer
            //State here will give a proxy Object, because immer will wrap state inside proxy Object
            console.log(current(state)) //current() is used only for debugging purpose 
            const selectedItem = state.items.find(item => item.id === action.payload)
            console.log(selectedItem)
            state.addedItems = [...state.addedItems, selectedItem]
            state.total = state.total + 1
        })
        // You can apply a "matcher function" to incoming actions
        .addMatcher(isActionWithNumberPayload, (state, action) => { })
        // and provide a default case if no other handlers matched
        .addDefaultCase((state, action) => { })
})

function isActionWithNumberPayload(action) {
    return true//typeof action.payload === 'number'
}

export default reducer

*/

const { reducer, actions } = createSlice({
    name: 'cart',
    initialState: preloadedState,
    reducers: {
        addToCart: (state, action) => {
            //console.log({ 'addToCartState': current(state) }) //current() is used only for debugging purpose 
            const selectedItem = state.items.find(item => item.id === action.payload.id)
            //console.log(selectedItem)
            state.addedItems = [...state.addedItems, { ...selectedItem }]
            console.log({ 'addToCartState': current(state) })
            const total = state.total + (action.payload.quantity * selectedItem.price)
            console.log('reducer', { total })
            state.total = state.total + (action.payload.quantity * selectedItem.price)

        },
        setQuantity: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id)
            state.items[index] = { ...state.items[index], quantity: action.payload.quantity }
        },
    }
})

export const { addToCart, setQuantity } = actions
export default reducer

