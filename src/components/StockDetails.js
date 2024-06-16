import React from 'react'
import StockDescription from './StockDescription'
import { useSelector } from 'react-redux'

const StockDetails = () => {
  const stockDetails = useSelector(store=>store.stock.stockDetails)
  console.log(stockDetails)
  console.log(stockDetails[0].description)
  return (
    <div>
      <StockDescription content={stockDetails[0].description} />
    </div>
  )
}

export default StockDetails