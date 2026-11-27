import React from 'react'
import {useState,useEffect} from 'react'

const UserInput = () => {
    const [Name, SetName]= useState("");
    useEffect(()=>{
        console.log("changing",Name)
    },[Name])
  return (
    <div>
        <h3>UserInput</h3>
        <input type="text" placeholder='Enter name' value={Name} onChange={(t)=>{SetName(t.target.value)}}>
        </input>
        <p>Welcome {Name}</p>
    </div>
  )
}

export default UserInput