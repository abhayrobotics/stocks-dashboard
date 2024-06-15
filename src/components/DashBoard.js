import { useEffect, useRef } from "react";
import { Exchange, apikey, Search_ticker_prefix } from "../utils/constant";

const DashBoard = () => {

  // getting the value from input function
  const query = useRef("");
  // console.log(query.current.value)

  useEffect(() => {
    handleSearch();
  }, []);
  const handleSearch = () => {
    const fetchQuery = async () => {
      const URL =
        Search_ticker_prefix + query.current.value + "&limit=10&exchange=" + Exchange+" &apikey=" +
        apikey;
      // console.log(URL)
      const data = await fetch(URL);
      const json = await data.json();
      console.log(json);
    };
    fetchQuery();
  };
  
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input className="border" type="text" ref={query} />
        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
};

export default DashBoard;
