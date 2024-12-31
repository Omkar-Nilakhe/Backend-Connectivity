import React, { useEffect, useState } from 'react'

export default function ApiFun() {

    const[edata,setEdata]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/getemps")
        .then((response)=>{
            if(!response.ok){
              throw new Error("http error");
              
            }
            return response.json();
        })
          .then((data)=>{
            setEdata(data);
          })
          .catch(()=>{
            console.error("error fetching data");
            
          },[])


    })

  return (
    <div>
      <h2>List of Employees</h2>
      <table border="1px" className='container text-center'>
      <thead>
        <tr>
            <th>Eid</th>
            <th>Ename</th>
            <th>Salary</th>
            </tr>
            </thead>
            <tbody>
       { edata.map(emp=>
             <tr key={emp.id}>
             <td>{emp.id}</td>
             <td>{emp.name}</td>
             <td>{emp.salary}</td>
          </tr>
        )
        }
       
        </tbody>
        
      </table>
    </div>
  )
}
