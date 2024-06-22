import { useDispatch } from "react-redux"
import { addStockDetails } from "../redux-store/stockSlice"
import { StockInfo, apikey, apikey2 } from "../utils/constant"

// takes input as symbol and return info json
const useStockInfo =(symbol)=>{
    const dispatch =useDispatch()
    
    const stockInfo = async (api) =>{
        const url = StockInfo  + symbol + "?apikey=" + api
        const data = await fetch(url)
        const json = await data.json()
        console.log(json)
        dispatch(addStockDetails(json))

     }  
    
    try {
        
         
         stockInfo(apikey)
    } catch (error) {
        console.log(error)
        stockInfo(apikey2)
        
    }

    return  
}

export default useStockInfo;