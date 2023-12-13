import { createSlice } from "@reduxjs/toolkit";
import { createReceipt } from "../actions";

const cartSlice = createSlice({  // creates reducer AND action creaters
    name: "cart",
    initialState: [],
    reducers: {
        addProduct(state, action){ // this is an actionCreater function
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
}) // Action creators for the types of actions that are handled by the slice reducer.

export const { addProduct, removeProduct } = cartSlice.actions; // these are action creaters 
export const cartReducer = cartSlice.reducer; // the slice has a reducer which we export, I guess