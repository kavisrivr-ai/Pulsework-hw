import React from 'react'

const Crash = () => {
    throw new Error("Database password is wrong")
  return (
    <div>Crash</div>
  )
}

export default Crash