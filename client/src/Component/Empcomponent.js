import React from 'react'

function EmployeComponent(EmpId,name,age,city) {
  return (
    <div>
        <h3>EmpId:{EmpId}</h3>
        <h1>Name:{name}</h1>
        <h2>Age:{age}</h2>
        <h2>City:{city}</h2>
    </div>
  )
}

export default EmployeComponent