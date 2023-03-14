import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState={
    value: []
};

export const cardBoxSlice=createSlice({
    name: "cardBox",
    initialState,
    reducers: {
        addCardBox: (state,action)=>{
            state.value=[...state.value,action.payload];
            toast.success("product is added")
        },
        removeCardBox: (state, action) => {
            const index = state.value.findIndex(item => item.id === action.payload);
            if (index !== -1) {
              state.value.splice(index, 1);
            }
            toast.success("product is removed")
        },
        deleteCardBox: (state)=>{
            state.value=[];
            toast.success("all products is removed")
        }
    }
});

export const {addCardBox,removeCardBox,deleteCardBox}=cardBoxSlice.actions;
export default cardBoxSlice.reducer; 