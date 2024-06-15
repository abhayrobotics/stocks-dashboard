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

  const handleSearch =()=>{
    const fetchQuery = async () => {
      const URL =
        Search_ticker_prefix +
        query.current.value +
        "&limit=100&exchange=" +
        Exchange +
        "&apikey=" +
        apikey;
    //   console.log(URL);
      const data = await fetch(URL);
      const json = await data.json();
      console.log(json);
    };
    fetchQuery();
  };
  return (
    <div>
      <div className="  sm:w-[80%] w-[100%] py-3 px-3  mx-auto flex justify-center   ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center  bg-white bg-opacity-20 py-2 px-3 flex-wrap items-center flex-col sm:flex-row  rounded-md "
        >
          <div className=" mr-2 flex justify-between" >
            <input
              className="border px-2 py-0.5 rounded-md text-blue-700"
              type="text"
              ref={query}
            />
            <button
              onClick={handleSearch}
              className=" ml-2 px-4 py-0.5 text-md  text-white rounded-md  "
            >
              Search
            </button>
          </div>
          <div className=" my-2  ">
            <select className="h-8 mr-2 px-4 py-0.5 rounded-md">
              <option className="">BSE- India</option>
              <option>NASDAQ- US</option>
              <option>All</option>
            </select>
            <select className="h-8  px-4 py-0.5 rounded-md ">
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
