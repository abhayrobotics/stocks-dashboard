import React from 'react'
import StockDescription from './StockDescription'
import { useSelector } from 'react-redux'
import StockChart from './StockChart'

const StockDetails = () => {
  const stockDetails = useSelector(store=>store.stock.stockDetails)
  // console.log(stockDetails)
  

  return (
    <div className='max-w-[100%] sm:max-w-[80%] mx-auto '>
      
      <StockDescription content={stockDetails[0]} />
      <StockChart/>
    </div>
  )
}

export default StockDetails