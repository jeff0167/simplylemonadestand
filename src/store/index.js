import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, addProduct, removeProduct } from "./slices/cartSlice";
import { receiptReducer } from "./slices/receiptSlice";
import { createReceipt } from "./actions";

const store = configureStore({
  reducer: {
    cart: cartReducer, // key value pair
    receipt: receiptReducer,
  },
});

export { store, addProduct, removeProduct, createReceipt };
