import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
    name:"stock",
    initialState:{
        stockList :[],
        stockname:null,
        stockDetails:null,
        showSuggestion:false,
        priceData:[],
        timeStamp:[],
        ratios:[],
        rawData:[]

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
        },
        addPriceData:(state,action)=>{
            state.priceData =action.payload
        },
        addTimeStamp:(state,action)=>{
            state.timeStamp=action.payload
        },
        addRatios:(state,action)=>{
            state.ratios =action.payload
        },
        addRawData:(state,action)=>{
            state.rawData.push(action.payload);
        }
    }
})

export const {addStockList,addStockName,toggleSugesstion,addStockDetails,addPriceData,addTimeStamp,addRatios,addRawData}  = stockSlice.actions
export default stockSlice.reducer