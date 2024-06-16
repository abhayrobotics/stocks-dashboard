import React from "react";
import { useSelector } from "react-redux";
import StockName from "./StockName";

const Suggestion = () => {
  const stockList = useSelector((store) => store.stock.stockList);
  console.log(stockList);
  return (
    <div className="flex justify-center flex-col mx-auto mb-2 px-3 py-3 sm:w-[80%] max-w-[600px] __dark-shade rounded-md">
      {stockList?.map((item) => {return(
      
          <StockName name={item.name} symbol={item.symbol} key={item.symbol}  />
          
     
      )}
      )}
    </div>
  );
};

export default Suggestion;
