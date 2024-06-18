import React from 'react'
import StockDescription from './StockDescription'
import { useSelector } from 'react-redux'

const StockDetails = () => {
  const stockDetails = useSelector(store=>store.stock.stockDetails)
  console.log(stockDetails)
  console.log(stockDetails[0]?.description)
  return (
    <div className='max-w-[100%] sm:max-w-[80%] mx-auto '>
      
      <StockDescription content={stockDetails[0]} />
    </div>
  )
}

export default StockDetails