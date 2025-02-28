import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EmployeComponent from '../../Component/Empcomponent.js'

function Home() {
    const [Employee, setEmployee] =useState([])
    const LoadEmployee = async()=>{
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/employes`);
        console.log(response.data.data);
    }
    
    useEffect(()=>{
        LoadEmployee();
    },[])
  return (
    <div>
         <h1>Employee List</h1>
         <div>
            {
                Employee.map((Empl,i)=>{
                      const {EmpId,name,age,city}=Empl
                      return(
                        <EmployeComponent  key={i} EmpId={EmpId} name={name} age={age} city={city} />
                      )
                })
            }
         </div>

    </div>
  )
}

export default Home