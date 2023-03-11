import {configureStore} from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import cardDetailsSlice from "../features/cardDetailsSlice";

export const store=configureStore({
    reducer: {
        productReducer: productSlice,
        cardDetailReducer: cardDetailsSlice
    },
});