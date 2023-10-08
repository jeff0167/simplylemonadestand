import { createSlice } from "@reduxjs/toolkit";
import { createReceipt } from "../actions";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addProduct(state, action){
            state.push(action.payload);
        },
        removeProduct(state, action){
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    },
    extraReducers(builder) {
        builder.addCase(createReceipt, (state, action) => {
            return [];
        });
      }
})

export const { addProduct, removeProduct } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;