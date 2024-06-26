import { useDispatch, useSelector } from "react-redux"
import { addPriceData, addStockDetails, addTimeStamp } from "../redux-store/stockSlice"
import {  apikey, apikey2 } from "../utils/constant"
import { combineSlices } from "@reduxjs/toolkit"
import { useEffect } from "react"

// takes input as symbol and return info json
// const useStockData =(symbol,timeframe,start,end)=>{
const useStockData =()=>{
    const dispatch =useDispatch()
    const stockSymbol = useSelector(store=>store.stock.stockname)
    // console.log(stockSymbol)
    const stockData = async (api) =>{
        const url = "https://financialmodelingprep.com/api/v3/historical-chart/5min/"+stockSymbol+"?from=2024-06-19&to=2024-06-20" + "&apikey=" + api
        console.log(url)
        const data = await fetch(url)
        const json = await data.json()
        // console.log(json)
        // price data
        const closePrice =json?.map(item=>item?.close);
        console.log(closePrice)
        dispatch(addPriceData(closePrice.reverse()))

        // time data
        const timeStamp = json?.map(item=>item.date.split(" ")[1]);
        // console.log(timeStamp)
        dispatch(addTimeStamp(timeStamp.reverse()))
        // dispatch(addStockDetails(json))

     }  
     useEffect(()=>{


         
             try {
                  stockData(apikey)
             } catch (error) {
                 console.log(error)
                 stockData(apikey2)
                 
             }
     },[stockSymbol])

    return  
}

export default useStockData;