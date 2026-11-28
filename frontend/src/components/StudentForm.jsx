
import { useForm } from "react-hook-form"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import studentSchema from '@/lib/studentSchema'
const StudentForm = ({addOn}) => {
    const {
    register,reset,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver:zodResolver(studentSchema)})

  const submit=(data)=>{
   addOn(data);
   reset();
  }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <br></br>
            <input {...register("name")} placeholder="Enter name" />
            <p>{errors.name?.message}</p>
            <input {...register("email")} placeholder="Enter email" />
            <p>{errors.email?.message}</p>
            <input {...register("age")} placeholder="Enter age" />
            <p>{errors.age?.message}</p>
            <select {...register("course")}>
                <option>CSE</option>
                <option>ECE</option>
                <option>CSBS</option>
                <option>MECH</option>
            </select>
            <p>{errors.course?.message}</p>
            <button type="submit">add Student</button>

        </form>
    </div>
  )
}

export default StudentForm