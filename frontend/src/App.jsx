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
import Crash from './pages/Crash'
import ErrorBoundary from './components/ErrorBoundary'
const App = () => {
  return (
    <>
    <Navbar/>
    <div className="flex">
      <Sidebar/>
      <ErrorBoundary>
      <Routes>
     <Route path="/" element={<Dashboard/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/settings" element={<Settings/>}/>
     <Route path="/students" element={<Students/>}/>
     <Route path="/crash" element={<Crash/>}/>
      </Routes>
      </ErrorBoundary>
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