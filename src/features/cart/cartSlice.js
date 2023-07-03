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
        }
    },
})

export const { clearCart, removeItem } = cartSlice.actions
export default cartSlice.reducer