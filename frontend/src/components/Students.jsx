import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const allowedDomain="https://jsonplaceholder.typicode.com"
const api=axios.create({
  baseURL:allowedDomain
})
api.interceptors.request.use((config)=>{
const url=new URL(config.url,config.baseURL);
if(url.origin!==allowedDomain)
{
  throw new Error (" Request to unallowed domain");
}
return config
});

const Students = () => {
  const[students,setStudents]=useState([]);
  const[name,setname]=useState("")
   const[email,setemail]=useState("")
  const getstudents=async()=>{
    try{
      const response=await api.get("/users");
      setStudents(response.data);
    }
    catch(error){
      console.error("Error fetching stidents:",error);
    }
  }
  // add students
  const addstudents=async()=>{
    try{
      const response=await api.post("/users",{name:name,email:email})
      setStudents([...students,response.data]);
    setname("");
    setemail("");
    }catch(error){
      console.error("Error adding student:",error);
    }
  
  }
  //update student
  const updateStudents=async(id)=>{
    try{
      const response=await api.put(`/users/${id}`,{name:name,email:email});
      setStudents(
        students.map((student)=>
        student.id===id? response.data:student))
      }
      catch(error){
        console.error("Error updating student:",error);

    }
  };
  return (
    <div>
        <h4>Students</h4>
        <p>Welcome to our students page!</p>
        <button className="bg-yellow-200 text-black" onClick={getstudents}>Get Students</button>
        <br></br>
        <input type="text" placeholder=' Enter Name' value={name} onChange={(e)=>setname(e.target.value)} /><br></br>
        <input type="text" placeholder=' Enter Email' value={email} onChange={(e)=>setemail(e.target.value)} /><br></br>
        <button className="bg-yellow-200 text-black" onClick={addstudents}>Add Students</button><br></br>
        
        <ul>
          <br></br>
          {students.map((student)=>(
            <li key={student.id}>
              {student.name}-{student.email}<br></br>
              <button onClick={()=>
                setname(student.name)& setemail(student.email)}>edit</button>
                <br></br>
                <button onClick={()=>updateStudents(student.id)}>Update</button>
            </li>
            
            
          ))}
        </ul>
        
    </div>
  )
}

export default Students