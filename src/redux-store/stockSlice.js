import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name:"stock",
    initialState:{
        stockId :null,
        stockname:null
    },
    reducers:{
        addStockName:(state,action)=>{
            state.stockname = action.payload;
        }
    }
})

export const {addStockName}  = stockSlice.actions
export default stockSlice.reducer