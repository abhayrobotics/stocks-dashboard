import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='h-10 __dark-shade text-white px-16 py-2 mb-12 flex justify-between'>
            <div className='text-lg'>Home</div>
            <div className='flex justify-end'>

            <div className='text-lg px-2'>Search</div>
            <div className='text-lg px-2'>Login</div>
            </div>

        </div>
    </div>
  )
}

export default Header