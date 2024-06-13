import React, { useEffect } from "react";


const DashBoard = () => {
  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = async () => {
    const data = await fetch(
      "https://financialmodelingprep.com/api/v3/income-statement/tcs?period=annual&apikey=gZW5k797olakipqjIPGqToAsnotncqpv"
    );
    const json = await data.json();
    console.log(json);
  
  };

  return <div>DashBoard</div>;
};

export default DashBoard;
