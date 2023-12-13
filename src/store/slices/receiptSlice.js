import { createSlice } from "@reduxjs/toolkit";
import { createReceipt } from "../actions";

const receiptSlice = createSlice({ // what is a slice now? it contains a reducer, but is more than a reducer
    name: "receipt",
    initialState: [],
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(createReceipt, (state, action) => {
            state.push(action.payload);
        });
      }
})

export const receiptReducer = receiptSlice.reducer;