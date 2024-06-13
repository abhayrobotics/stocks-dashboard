import { useEffect, useRef } from "react";
import { apikey } from "../utils/constant";

const DashBoard = () => {
  
  const query = useRef("5");
  const handleSearch = () => {
    console.log(query)
    
    
    const fetchQuery = async () => {
      const URL =
      "https://financialmodelingprep.com/api/v3/search-ticker?query=" +
      query +
      "&limit=10&exchange=BSE&apikey=gZW5k797olakipqjIPGqToAsnotncqpv";
      
      const data = await fetch(URL);
      const json = await data.json();
      console.log(json);
      };
    fetchQuery();
  };
  console.log(process.env.REACT_APP_STOCKS_API);
  return (
    <div>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input className="border" type="text" ref={query} />
        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
};

export default DashBoard;
