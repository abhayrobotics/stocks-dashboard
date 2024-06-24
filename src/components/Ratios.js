import { useDispatch, useSelector } from "react-redux"
import useFetchData from "../hooks/useFetchData";
import { StockRatiosURL } from "../utils/constant";
import { addRatios, addRawData } from "../redux-store/stockSlice";

const Ratios = () => {

    const dispatch =useDispatch();

    const stockSymbol =useSelector(store=>store.stock.stockname);
    const url= StockRatiosURL +stockSymbol+ "?period=annual&apikey="
    // console.log(url)
     useFetchData(url,stockSymbol,addRawData)
     const rawData = useSelector(store=>store?.stock?.rawData)
     
     const debtToEquity = rawData[0]?.debtToEquity?.toFixed(2);
     console.log(debtToEquity)
     dispatch(addRatios(["debtToEquity",debtToEquity]))
     const marketCap = rawData[0]?.marketCap/1000000 +"Million USD"
     const enterpriseValue = rawData[0]?.enterpriseValue/1000000 +"Million USD"
     const bookValuePerShare = rawData[0]?.bookValuePerShare?.toFixed(2);
     const peRatio = rawData[0]?.peRatio?.toFixed(2);
     const pbRatio = rawData[0]?.pbRatio?.toFixed(2);
     const roe = rawData[0]?.roe?.toFixed(2);
     const roic = rawData[0]?.roic?.toFixed(2);
     const dividendYield = rawData[0]?.dividendYield?.toFixed(2);
     const currentRatio = rawData[0]?.currentRatio?.toFixed(2);
     const revenuePerShare = rawData[0]?.revenuePerShare?.toFixed(2);
     
    
    
    
    
  return (
    <div>
        <div>
            <h2>Financial Ratios</h2>
            <div>
                <div>Debt To Equity : {debtToEquity}</div>
            </div>
        </div>
    </div>

  )
}

export default Ratios