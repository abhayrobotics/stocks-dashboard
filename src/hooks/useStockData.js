import { useDispatch, useSelector } from "react-redux"
import { addPriceData, addStockDetails, addTimeStamp } from "../redux-store/stockSlice"
import { StockInfo, apikey, apikey2 } from "../utils/constant"
import { combineSlices } from "@reduxjs/toolkit"

// takes input as symbol and return info json
// const useStockData =(symbol,timeframe,start,end)=>{
const useStockData =()=>{
    const dispatch =useDispatch()
    const stockSymbol = useSelector(store=>store.stock.stockname)
    // console.log(stockSymbol)
    
    try {
        
         const stockInfo = async (api) =>{
            const url = "https://financialmodelingprep.com/api/v3/historical-chart/5min/"+stockSymbol+"?from=2023-08-10&to=2023-09-10" + "&apikey=" + api
            console.log(url)
            const data = await fetch(url)
            const json = await data.json()
            // console.log(json)
            // price data
            const closePrice =json?.map(item=>item?.close);
            console.log(closePrice)
            dispatch(addPriceData(closePrice))

            // time data
            const timeStamp = json?.map(item=>item.date.split(" ")[1]);
            // console.log(timeStamp)
            dispatch(addTimeStamp(timeStamp))
            // dispatch(addStockDetails(json))

         }  
         stockInfo(apikey)
    } catch (error) {
        console.log(error)
        StockInfo(apikey2)
        
    }

    return  
}

export default useStockData;