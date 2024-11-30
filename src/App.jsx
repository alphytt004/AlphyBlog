import  React,{ useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Add from "./components/Add"
import NavBar from "./components/NavBar"

function App() {
  const [count,setCount]=useState(0)

  return (
    <>
    <div>
      <NavBar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Add' element={<Add/>}/>
      </Routes>
    </div>
    </>
  )
}
export default App