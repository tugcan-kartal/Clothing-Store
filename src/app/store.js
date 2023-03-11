import {configureStore} from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import cardDetailsSlice from "../features/cardDetailsSlice";
import cardBoxSlice from "../features/cardBoxSlice";

export const store=configureStore({
    reducer: {
        productReducer: productSlice,
        cardDetailReducer: cardDetailsSlice,
        cardBoxReducer: cardBoxSlice
    },
});