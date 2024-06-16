import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Suggestion from "./Suggestion";
import StockDetails from "./StockDetails"
import useStockInfo from "../hooks/useStockInfo";



const DashBoard = () => {
  const showSuggestion = useSelector(store=>store.stock.showSuggestion)
  const selectedStock = useSelector(store=>store.stock.stockname);
  console.log(selectedStock)
    useStockInfo(selectedStock)

  
  
  return (
    <div className="w-screen h-screen bg-[--main-color]">
      <SearchBar />
     { showSuggestion && <Suggestion/>}
     {selectedStock && <StockDetails />}
    </div>
  );
};

export default DashBoard;
