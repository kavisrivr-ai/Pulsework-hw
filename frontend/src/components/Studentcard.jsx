import React from 'react'

function Studentcard(props){
  return (
    <div>
      <h2 className="text-lg font-bold">
          {props.Name}
       
      </h2>
      <p className="mt-2 text-4xl text-blue-600">{props.roll}</p>
        
    </div>
  )
}

export default Studentcard