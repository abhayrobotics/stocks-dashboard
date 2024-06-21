import React from "react";
import useStockData from "../hooks/useStockData";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js";

const StockChart = () => {
 
  useStockData();
  return (
    <div>
      <div>Stcok chart</div>
      <div>
      {/* importing chart js */}
      </div>
    </div>
  );
};

export default StockChart;
