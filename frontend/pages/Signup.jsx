import React from 'react'

function Signup() {
    return (
        <>
            <div className='border h-screen w-screen flex align-middle items-center justify-center'>
                <div className='border-2 h-[500px] w-[400px] rounded-lg'>
                    <div className='h-[100px] w-[400px] flex justify-center'>
                        <img src="https://img.freepik.com/premium-vector/checklist-clipboard-pencil-icon_736051-1227.jpghttps://img.freepik.com/premium-vector/checklist-clipboard-pencil-icon_736051-1227.jpg" className="mt-2" alt="" />                    </div>
                    <div className='h-[400px] w-[400px]'>
                        <div className='flex flex-col align-middle p-4 mb-6'>
                            <label htmlFor="username" className='text-2xl font-semibold'>Username</label>
                            <input type="text" name="username" id="" className='h-[40px] border p-2 rounded-md mb-4' />
                            <label htmlFor="email" className='text-2xl font-semibold'>Email</label>
                            <input type="email" name="email" id="" className='h-[40px] p-2 border rounded-md' />
                            <label htmlFor='password' className='text-2xl mt-4 font-semibold'>Password</label>
                            <input type="text" name='password' id='' className='h-[40px] border p-2 rounded-md' />
                            <button className='border mt-8 h-[50px] text-2xl rounded-md align-middle justify-center font-semibold bg-blue-950 text-white cursor-pointer '>Sign Up</button>
                            <p className='text-center mt-2'>Have an account? <a href="/signin">Sign In</a></p>

                        </div>

                    </div>
                </div>

            </div >
        </>
    )
}
export default Signup