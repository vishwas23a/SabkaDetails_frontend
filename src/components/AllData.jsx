import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
function AllData() {
    const [studentData,setStudentData]=useState([]) 
useEffect(()=>{
    axios.get('http://localhost:3000/api/users')
    .then((resp)=>setStudentData(resp.data))
})

  return (
    <>
    <div className=''>

   <div className='flex justify-center'><h1 className=' font-extrabold text-4xl text-green-800 mt-5 underline underline-offset-4 decoration-double	'>All Students Data </h1></div> 

</div>


    <div className='flex flex-col      text-white h-max '>

     
        <div className='flex justify-center'>
            <table className='w-11/12   mt-10 '>
            <thead className='text-purple text-lg font-bold text-white bg-green-800 ' >
                <tr  >
                    <th className='p-3  '>Roll No.</th>
                    <th className=''>Name</th>
                    <th className=''>Email</th>
                    <th className=''>DOB</th>
                    <th className=''>Phone NO.</th>
                    <th className=''>Course</th>
            
                </tr>
            </thead>
            <tbody>
                {
                studentData.map((value)=>(
                 <tr className=' bg-gray-800 text-center  text-white border border-green-800' key={value.rollNo}>
                       <td className='p-3'>{value.rollNo}</td> 
                       <td >{value.name}</td> 
                       <td>{value.email}</td> 
                       <td>{value.dob}</td> 
                       <td>{value.phoneNo}</td> 
                       <td>{value.course}</td> 
                 </tr>
                ))
                }
            </tbody>
            </table>
        </div>
      
    </div>
    </>
  )
}

export default AllData
