import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        amount: 0,
        total: 0,
        isLoading: true,

    }
})

export default cartSlice.reducer