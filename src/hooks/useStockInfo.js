import { useDispatch } from "react-redux"
import { addStockDetails } from "../redux-store/stockSlice"
import { StockInfo, apikey, apikey2 ,apikey3} from "../utils/constant"

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
    } 
    catch (error) 
    {
        console.log(error)
        try {
            stockInfo(apikey2)
        
         
        } catch (error) {
           stockInfo(apikey3)
           console.log(error)
        }
        
    }

     
}

export default useStockInfo;