import React from 'react'

function Navbar() {
  return (
    <>
      <div className='border-b-1 border-indigo-900 rounded-2xl'>
        <div className='h-[70px] flex justify-between items-center text-xl p-4'>
          <h1 className='text-[2.5rem] font-bold cursor-pointer pl-4 text-indigo-900'>Todo</h1>
          <div className=' flex gap-4'>
            <a
              href='/signin'
              className=' flex p-1 rounded-md pl-4 pr-4 font-bold cursor-pointer text-2xl text-indigo-900'>Sign In</a>
            <a
              href='/signup'
              className=' flex p-1 rounded-md pl-4 pr-4 font-bold cursor-pointer text-2xl text-indigo-900' >Sign Up</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar