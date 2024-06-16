import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name:"stock",
    initialState:{
        stockList :[],
        stockname:null
    },
    reducers:{
        addStockList:(state,action)=>{
            state.stockList = action.payload;
        }
    }
})

export const {addStockList}  = stockSlice.actions
export default stockSlice.reducer