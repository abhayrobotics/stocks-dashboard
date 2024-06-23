import React from "react";
import useStockData from "../hooks/useStockData";



import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useSelector } from "react-redux";



const StockChart = () => {
  
  useStockData();
  const timestamp = useSelector(store=>store?.stock?.timeStamp)
  const priceData = useSelector(store=>store?.stock?.priceData)
  const company = useSelector(store=>store?.stock?.stockDetails[0]?.companyName)
  
  let chartData={
    labels: timestamp,
    datasets: [
      {
        id: 1,
        label: company,
        data: priceData,
      }
      
    ],
  }


  return (
    <div>
      <div>Price Movement</div>
      <div>
      {/* importing chart js */}
<Chart  className="w-[100%] p-3 bg-white" type='line' data={chartData} />
      
  

      </div>
    </div>
  );
};

export default StockChart;
