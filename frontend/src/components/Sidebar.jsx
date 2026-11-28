
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-70 h-120 bg-green-200 p-5">
      <h2 className="font-bold">Menu</h2>
      <Link to="/about" className="mt-3">About</Link><br>
      </br>
      <Link to="/" className="mt-3" >DashBoard</Link><br></br>
      <Link to="/students" className="mt-3">Students</Link><br></br>
      <Link to="/settings" className="mt-3">Settings</Link><br></br>
      <Link to="/crash" className="mt-3">Crash Test</Link><br></br>
      
      
    </div>
  )
}

export default Sidebar