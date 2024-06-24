// it will take input as url ,stock symbol and reducer action and output result in array

import { useEffect } from "react";
import { apikey, apikey2, apikey3 } from "../utils/constant";
import { useDispatch } from "react-redux";

const useFetchData = (url, stockSymbol,addReducer) => {
    const dispatch =useDispatch()
    console.log("I am running")
  const fetchData = async (api) => {
    console.log(url + api);
    const data = await fetch(url + api);
    const json = await data.json();
    console.log(json);
    dispatch(addReducer(json))
  };

  //   call only when stock symbol changes
  useEffect(() => {
    try {
      fetchData(apikey);
    } catch (error) {
      console.log(error, "Api key2");
      try {
        fetchData(apikey2);
      } catch (error) {
        fetchData(apikey3);
        console.log(error, "Api key3");
      }
    }
  }, []);
};

export default useFetchData;
