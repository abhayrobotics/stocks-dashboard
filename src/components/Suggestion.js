import React from "react";
import { useSelector } from "react-redux";
import StockName from "./StockName";

const Suggestion = () => {
  const stockList = useSelector((store) => store.stock.stockList);
  console.log(stockList);
  return (
    <div className="relative  sm:w-[80%] max-w-[600px] mx-auto">

    <div className=" absolute top-0 left-0 w-[100%] __bg-suggestion flex justify-center  max-h-96 overflow-y-scroll flex-col  mb-2 px-3 py-3  __dark-shade rounded-md border ">
      {stockList?.map((item) => {return(
        
        <StockName name={item.name} symbol={item.symbol} key={item.symbol}  />
        
        
      )}
    )}
    </div>
    </div>
  );
};

export default Suggestion;
