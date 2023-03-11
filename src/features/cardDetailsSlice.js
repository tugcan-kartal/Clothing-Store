import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value: []
};

export const cartSlice=createSlice({
    name: "cartDetails",
    initialState,
    reducers: {
        detailCard: (state,action)=>{
            state.value=action.payload;
        }
    }
});

export const {detailCard}=cartSlice.actions;
export default cartSlice.reducer;