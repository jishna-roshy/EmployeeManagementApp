import {React,useState,useEffect} from 'react'
import axios from 'axios';
import './Admin.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'


function Admin() {
  var[Employees,setEmployee]=useState([])

const EmployeeList=async()=>{
const result =await axios.get("http://localhost:8000/getAllEmployee")
setEmployee(result.data.employees);
}

const handleDelete=async (id)=>{
  const result=await axios.delete('http://localhost:8000/deleteEmployee/'+id)
  // console.log(result);
  alert(result.data.message)

  //to refresh that table content
  EmployeeList()
}

// console.log(Employees);
useEffect(()=>{
EmployeeList()
},[])

  return (
    <div>

    
<div>

</div>

   
    <div  className='mt-4 text-end me-4'>

<Link to={'/add'}>
    <Button variant="primary"><i class="fa-solid fa-user-plus"></i>Add Employee</Button> 
    </Link>
    </div>

<p>A job description contains the following components: job title, job purpose, job duties and responsibilities, required qualifications, preferred qualifications, and working conditions.</p>




    <Table className='w-75 container border text-center' striped bordered hover variant="dark">
      <thead>

        <tr > 

            
         <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Actions</th>


        </tr>
      </thead>
      <tbody>

        {Employees?.map((item,index)=>(


<tr>
<td>{index+1}</td>
<td>{item.uname}</td>
<td>{item.age}</td>
<td>{item.designation}</td>
<td>{item.salary}</td>
<td>
  
  <Link to={'edit/'+item.id}><Button className='me-5' variant="primary" > <i class="fa-regular fa-pen-to-square"></i>Edit</Button></Link> 

<Link to={'/view/'+item.id}>
  <Button  className='me-5'  variant="primary"> <i class ="fa-solid fa-book-open-reader"></i>View</Button>
  </Link>
 <Button onClick={()=>handleDelete(item.id)} className='me-5'  variant="danger"><i class="fa-regular fa-trash-xmark"></i> Delete</Button>

</td>




</tr>

        ))}
       

        
      </tbody>
    </Table>

    </div>
  )
  }

export default Admin