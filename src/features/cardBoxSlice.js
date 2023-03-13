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
        removeCardBox: (state, action) => {
            const index = state.value.findIndex(item => item.id === action.payload);
            if (index !== -1) {
              state.value.splice(index, 1);
            }
        },
        deleteCardBox: (state)=>{
            state.value=[];
        }
    }
});

export const {addCardBox,removeCardBox,deleteCardBox}=cardBoxSlice.actions;
export default cardBoxSlice.reducer; 