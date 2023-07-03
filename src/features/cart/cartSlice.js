import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: cartItems,
        amount: 4,
        total: 0,
        isLoading: true,
    },
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemID = action.payload
            state.cartItems = state.cartItems.filter((item) =>
                item.id !== itemID)
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount - 1
        }
    },
})

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions
export default cartSlice.reducer