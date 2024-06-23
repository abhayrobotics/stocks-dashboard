import React from "react";
import useStockData from "../hooks/useStockData";

import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useSelector } from "react-redux";

const StockChart = () => {
  useStockData();
  const timestamp = useSelector((store) => store?.stock?.timeStamp);
  const priceData = useSelector((store) => store?.stock?.priceData);
  const company = useSelector(
    (store) => store?.stock?.stockDetails[0]?.companyName
  );

  let chartData = {
    labels: timestamp,
    datasets: [
      {
        id: 1,
        label: company,
        data: priceData,
        borderColor: "#f26f10",
        pointRadius: 0,
        // fill: true,
        lineTension: 0.1,

        borderWidth: 1.5,
      },
    ],
  };
  const options = {};

  return (
    <div>
      <div>Price Movement</div>
      <div>
        {/* importing chart js */}
        <Chart
          className="w-[100%] p-3 m-3 bg-white text-red-500"
          type="line"
          options={options}
          data={chartData}
        />
      </div>
    </div>
  );
};

export default StockChart;
