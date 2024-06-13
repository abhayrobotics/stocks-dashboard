import React, { useEffect } from 'react'
import { Search_URL } from '../utils/constant'
import { options } from '../utils/yahooApi'

const DashBoard = () => {

  useEffect(()=>{
    handleSearch();
  },[])
  const handleSearch = async() =>{

    // const data = await fetch("https://financialmodelingprep.com/api/v3/search?query=AA?apikey=gZW5k797olakipqjIPGqToAsnotncqpv");
    const data = await fetch("https://financialmodelingprep.com/api/v3/search?query=tesla&apikey=gZW5k797olakipqjIPGqToAsnotncqpv");
    const json =  await data.json
    console.log(json)
    console.log(data)
  }


  return (
    <div>DashBoard</div>
  )
}

export default DashBoard