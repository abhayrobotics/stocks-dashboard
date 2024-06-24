import React from "react";
import StockDescription from "./StockDescription";
import { useSelector } from "react-redux";
import StockChart from "./StockChart";
import Ratios from "./Ratios";

const StockDetails = () => {
  const stockDetails = useSelector((store) => store?.stock?.stockDetails);
  const stockName = useSelector((store) => store?.stock?.stockname);
  console.log(stockName);
  console.log(stockDetails);

  return (
    <div className="max-w-[100%] sm:max-w-[80%] mx-auto ">
      {/* when stock name is present */}

      <StockDescription content={stockDetails[0]} />
      <StockChart />
      <Ratios />
    </div>
  );
};

export default StockDetails;
