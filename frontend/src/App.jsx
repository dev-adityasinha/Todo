import Navbar from "../components/navbar"
import Landing from "../pages/landing"
import Signin from "../pages/Signin"
import Todo from "../pages/Todo"
import Signup from "../pages/Signup"

import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
