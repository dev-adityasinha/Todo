import React from 'react'

function navbar() {
  return (
    <>
      <div className='border-b-1 rounded-2xl'>
        <div className='h-[70px] flex justify-between items-center text-xl p-4'>
          <h1 className='text-[2.5rem] font-bold cursor-pointer pl-4'>Todo</h1>
          <div className=' flex gap-4'>
            <button
              className=' flex p-1 rounded-md pl-4 pr-4 font-semibold cursor-pointer text-2xl'>Sign In</button>
            <button
              className=' flex p-1 rounded-md pl-4 pr-4 font-semibold cursor-pointer text-2xl' >Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default navbar