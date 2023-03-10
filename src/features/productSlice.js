import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading: false,
    products: [],
    error: "",
};

export const fetchProducts=createAsyncThunk("fetchProducts",async()=>{
    const response=await axios.get("https://fakestoreapi.com/products");
    console.log("eheğ",response.data)
    return response.data.filter(item=>item.category==="men's clothing" || item.category==="women's clothing")
});

const productSlice=createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.loading=true
            state.products=[]
            state.error=""
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
            state.error=""
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false
            state.products=[]
            state.error="Bad fetching"
        })
    }
})

export default productSlice.reducer;