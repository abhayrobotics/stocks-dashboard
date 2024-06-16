import React from 'react'

const StockName = ({name,symbol}) => {
  return (
    <div>
        <div className=' flex justify-between px-4 py-2 '>
        <h2 className='text-md'>{name}</h2> 
        <h3 className='text-xs'>{symbol}</h3>
        </div>
        <hr className=''/>
    </div>
  )
}

export default StockName