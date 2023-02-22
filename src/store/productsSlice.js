import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: null,
    loading: false,
    total: 0
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
