import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
// import Login from './pages/Login'
// import Counter from './components/Counter'
// import UserInput from './components/UserInput'
import { Routes,Route } from 'react-router-dom'
import About from './components/About'
import Students from './components/Students'
import Settings from './components/Settings'
const App = () => {
  return (
    <>
    <Navbar/>
    <div className="flex">
      <Sidebar/>
      <Routes>
     <Route path="/" element={<Dashboard/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/settings" element={<Settings/>}/>
     <Route path="/students" element={<Students/>}/>
      </Routes>
      {/* <Dashboard/> */}
      {/* <Counter/> */}
    </div>
    <Footer/>
    {/* <Login/> */}
    {/* <UserInput/> */}
  
    </>
  )
}
export default App