import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    productList : []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart(state, action){
            state.productList.push(action.payload);
        }
    }
})

const store = configureStore({
    reducer: { cart: cartSlice.reducer}
});

export const cart = cartSlice.actions;
export default store;