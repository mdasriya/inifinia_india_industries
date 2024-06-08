import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FormData = () => {
const [data, setData] = useState([  {   firstName: 'Mukesh',
lastName: 'Dasriya',
company: 'Royals',
email: 'dasriyamukesh87@gmail.com',
phoneNumber: '9022047533',
message: 'i am not ok',}])

    useEffect(()=> {
axios.get("http://localhost:4000/form/formdata")
.then((res)=>{
    console.log(res.data)
    setData(res.data)
})
.catch((err)=> {
    console.log(err.message)
})
    },[])


  return (
    <>
     
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
       
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          User Query Data
        </h2>
      </div>

    
   

      <table class="table-auto">
  <thead className='border-4 border-orange-200 text-left'>
    <tr>
      <th>firstName</th>
      <th>lastName</th>
      <th>Company</th>
      <th>Email</th>
      <th>phoneNumber</th>
      <th>Message</th>
    </tr>
  </thead>
  <tbody>
   
 {data ? data.map((item, index)=>  <tr>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.company}</td>
      <td>{item.email}</td>
      <td>{item.phoneNumber}</td>
      <td>{item.message}</td>
    </tr>) : <h1>No Data Found</h1>}
   
  </tbody>
</table>
      </div>
 
  </>
  )
}

export default FormData
