import React from 'react'
import { useDispatch,  } from 'react-redux'
import { addStockName, toggleSugesstion } from '../redux-store/stockSlice'


const StockName = ({name,symbol}) => {

    const dispatch = useDispatch()
    const handleSelection = (e)=>{
        console.log(e.target.id)
        // add the selected stock into selected
        dispatch(addStockName(e.target.id))
        
        // hiding suggestion
        dispatch(toggleSugesstion(false))
        
        
    }
    

  return (
    <div className='cursor-pointer hover:bg-red-700'>
        <div  id={symbol} onClick={handleSelection}  className=' flex justify-between px-4 py-2 text-slate-300'>
            <h2  id={symbol} className='text-md'>{name}</h2> 
            <h3  id={symbol} className='text-xs text-green-400'>{symbol}</h3>
        </div>
        <hr className=''/>
    </div>
  )
}

export default StockName