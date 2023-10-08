import { createSlice } from "@reduxjs/toolkit";
import { createReceipt } from "../actions";

const receiptSlice = createSlice({
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