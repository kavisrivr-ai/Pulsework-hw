// import React from 'react'
// import Studentcard from '../components/Studentcard'
import StudentForm from "../components/StudentForm"
import StudentDetails from "@/components/StudentDetails"
import { useEffect,useState}from "react" 
function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    document.title ="Student count"+students.length
  },[students])
  const addStudent=(student)=>{
    setStudents([...students,student])
  }

  return (
//     <div className="flex-1 bg-green-100 p-6">
//       <h2 className="mb-5 text-2xl font-bold">
//         Dashboard
//       </h2>
//       <div className="grid grid-cols-3 ">
//         <Studentcard Name="Kavisri" roll="23"/>
//         <Studentcard Name="Aswatha" roll="03"/>
//         <Studentcard Name="Dhanya" roll="07"/>
//         </div>
//        </div>
<>

<h1> Dashboard  </h1>

<p>  Students count : {students.length} </p>
<StudentForm addOn= {addStudent}/>
<>
{students.map((s,index)=>(
  <StudentDetails key={index}{...s}/>

)
)}
</>

</>
  )}

export default Dashboard