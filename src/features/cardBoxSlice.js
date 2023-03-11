import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value: []
};

export const cardBoxSlice=createSlice({
    name: "cardBox",
    initialState,
    reducers: {
        addCardBox: (state,action)=>{
            state.value=[...state.value,action.payload];
        },
        removeCardBox: (state,action)=>{
            state.value=state.value.filter(item=>item.id!==action.payload)
        }
    }
});

export const {addCardBox,removeCardBox}=cardBoxSlice.actions;
export default cardBoxSlice.reducer; 