import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name:"stock",
    initialState:{
        stockList :[],
        stockname:null,
        stockDetails:null,
        showSuggestion:false

    },
    reducers:{
        addStockList:(state,action)=>{
            state.stockList = action.payload;
        },
        addStockName :(state,action)=>{
            state.stockname =action.payload;
        },
        addStockDetails:(state,action)=>{
            state.stockDetails = action.payload;
        },
        toggleSugesstion:(state,action)=>{
            state.showSuggestion = action.payload
        }
    }
})

export const {addStockList,addStockName,toggleSugesstion,addStockDetails}  = stockSlice.actions
export default stockSlice.reducer