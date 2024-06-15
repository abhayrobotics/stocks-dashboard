import { useEffect, useRef } from "react";
import {
  Exchange,
  apikey,
  Search_ticker_prefix,
  Search_name_prefix,
} from "../utils/constant";
const SearchBar = () => {
  // getting the value from input function
  const query = useRef("");
  console.log(query.current.value);

  useEffect(() => {
    handleSearch();
  }, []);
  const handleSearch = () => {
    const fetchQuery = async () => {
      const URL =
        Search_ticker_prefix +
        query.current.value +
        "&limit=100&exchange=" +
        Exchange +
        "&apikey=" +
        apikey;
      console.log(URL);
      const data = await fetch(URL);
      const json = await data.json();
      console.log(json);
    };
    fetchQuery();
  };
  return (
    <div>
      <div className="  sm:w-[80%] w-[100%] py-3 px-3  flex mx-auto  border border-red-600 bg">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-between  bg-white bg-opacity-20 m-2 flex-wrap items-center flex-col sm:flex-row  rounded-md"
        >
          <div >
            <input
              className="border px-2 py-0.5 rounded-md text-blue-700"
              type="text"
              ref={query}
            />
            <button
              onClick={handleSearch}
              className=" mx-1 my-1 px-4 py-0.5 text-md  text-white rounded-md bg-blue-300 bg-opacity-90"
            >
              Search
            </button>
          </div>
          <div>
            <select className="h-8 mx-2 px-4 py-0.5 rounded-md">
              <option className="">BSE- India</option>
              <option>NASDAQ- US</option>
              <option>All</option>
            </select>
            <select className="h-8 m-2 px-4 py-0.5 rounded-md ">
              <option>Stocks & ETF</option>
              <option>Mutual Fund</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
