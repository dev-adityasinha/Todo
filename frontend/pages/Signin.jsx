import { useState } from 'react'
import { Link } from "react-router-dom"
function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    async function handleSumbit(e) {
        e.preventDefault()


        const response = await fetch('http://localhost:4000/signin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        },
        )

        const data = await response.json();
        // console.log(data)

    }

    return (
        <form onSubmit={handleSumbit}>
            <div className='border h-screen w-screen flex align-middle items-center justify-center'>
                <div className='border-2 h-[435px] w-[400px] rounded-lg'>
                    <div className='h-[100px] w-[400px] flex align-middle justify-center'>
                        <Link to={"/"}>
                            <img src="https://img.freepik.com/premium-vector/checklist-clipboard-pencil-icon_736051-1227.jpghttps://img.freepik.com/premium-vector/checklist-clipboard-pencil-icon_736051-1227.jpg" className="mt-2 h-[100px]" alt="todo icon" loading='lazy' />
                        </Link>
                    </div>
                    <div className='h-[400px] w-[400px]'>
                        <div className='flex flex-col align-middle p-4 mb-8'>
                            <label htmlFor="email" className='text-2xl font-semibold'>Email</label>
                            <input type="email" value={email} name="email" id="email" className='h-[40px] p-2 border rounded-md' onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor='password' className='text-2xl mt-4 font-semibold'>Password</label>
                            <input type="text" name='password' id='password' value={password} className='h-[40px] border p-2 rounded-md' onChange={(e) => setPassword(e.target.value)} />
                            <button type='submit' className='border mt-8 h-[50px] text-2xl rounded-md align-middle justify-center font-semibold bg-blue-950 text-white cursor-pointer'>Sign In</button>
                            <p className='text-center mt-2'>Don't have an account? <a href="/signup">Sign Up</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    )
}

export default Signin