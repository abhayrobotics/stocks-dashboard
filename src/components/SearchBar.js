import { useEffect, useRef } from "react";
import {useDispatch} from "react-redux"
import {
  Exchange,
  apikey,
  Search_ticker_prefix,
  apikey2,
  Search_name_prefix,
  Search_cik,
  
} from "../utils/constant";
import { addStockList } from "../redux-store/stockSlice";


const SearchBar = () => {
  // getting the value from input function
  const query = useRef("");
  const dispatch = useDispatch()

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch =()=>{
    
    const fetchQuery = async (api) => {
      const URL =
        Search_ticker_prefix +
        query.current.value +
        "&limit=10"+
        "&apikey=" +
        api;
      console.log(URL);
      const data = await fetch(URL);
      const json = await data.json();
      // console.log(json);
      dispatch(addStockList(json))
      
      // if error use 2nd api key
      if(json["Error Message"]){
        console.log(json["Error Message"])
        fetchQuery(apikey2)
      }
    };
    fetchQuery(apikey);
  };
  return (
    <div>
      <div className="  sm:w-[80%] w-[100%] py-3 px-3  mx-auto flex justify-center   ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center  __dark-shade py-2 px-3 flex-wrap items-center flex-col sm:flex-row  rounded-md "
        >
          <div className=" mr-2 flex justify-between" >
            <input
              className=" px-2 py-0.5 rounded-md min-w-[300px] text-[--main-color]"
              type="text" placeholder="Search a stock "
              ref={query}
            />
            <button
              onClick={handleSearch}
              className=" ml-2 px-4 py-0.5 text-md __light-shade  text-white font-semibold  rounded-md  "
            >
              Search 🔍
            </button>
          </div>
          <div className=" my-2  ">
            <select className="h-8 mr-2 px-4 py-0.5 rounded-md">
              <option className="">BSE- India</option>
              <option>NASDAQ- US</option>
              <option>All</option>
            </select>
            {/* <select className="h-8  px-4 py-0.5 rounded-md ">
              <option>Stocks & ETF</option>
              <option>Mutual Fund</option>
            </select> */}
          </div>

        </form>
      </div>
    </div>
  );
};

export default SearchBar;
