import React from 'react'

const StudentDetails = ({name,email,age,course}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>"age":{age}</p>
      <p>"course":{course}</p>
    </div>
  )
}

export default StudentDetails