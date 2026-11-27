
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-80 h-45 bg-pink-200 p-5">
      <h2 className="font-bold">Menu</h2>
      <Link to="/about" className="mt-3">About</Link>
      <Link to="/" className="mt-3" >DashBoard</Link>
      <Link to="/students" className="mt-3">Students</Link>
      <Link to="/settings" className="mt-3">Settings</Link>
      
      
      
    </div>
  )
}

export default Sidebar