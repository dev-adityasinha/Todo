import { useState } from "react"

function Todo() {
    const [todo, setTodo] = useState("")
    return (
        <>
            <div className="flex h-screen w-screen gap-[2rem]">
                <div className="h-screen w-screen flex align-middle items-center justify-center">
                    <input
                        type="text"
                        className="flex h-[50px] w-[700px] border-2 rounded-md font-semibold text-2xl text-center"
                    />
                    <button className="flex text-4xl align-middle cursor-pointer">✅</button>
                    <button className="flex text-4xl align-middle cursor-pointer">❌</button>
                </div>
            </div>
        </>
    )

}


export default Todo