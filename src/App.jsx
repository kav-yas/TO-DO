import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Signupp from './components/Signupp'
import Loginn from './components/Loginn'
import Addtodo from './components/Addtodo'
import ViewAllList from './components/ViewAllList'
import ViewMine from './components/ViewMine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ffffff, #3a86ff, #d8a7ff)",
      display: "flex",
      flexDirection: "column"
    }}>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/s' element={<Signupp/>}/>
      <Route path='/c' element={<Loginn/>}/>
      <Route path='/t' element={<Addtodo/>}/>
      <Route path='/l' element={<ViewAllList/>}/>
      <Route path='/p' element={<ViewMine/>}/>
  

     </Routes>
     </div>
    
    </>
  )
}

export default App
