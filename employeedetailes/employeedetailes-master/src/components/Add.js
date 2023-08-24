import {React,useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'react-uuid';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';




function Add() {
  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState(0)
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState(0)

  // console.log(uname);

  useEffect(()=>{
setId(uuid().slice(0,3))
  },[])

  //create a object for the hook

let location=useNavigate()


  const addEmployee=async(e)=>{
    e.preventDefault()
setId(uuid().slice(0,3))
const body={
  id,
  uname,
  age,
  designation:desig,
  salary
}

    const result=await axios.post('http://localhost:8000/addEmployee',body)
    alert(result.data)

    //redirection to homepage
    location('/')
    console.log(result);
// console.log(body);

    // console.log(id);

    // console.log(uname);
    // console.log(age);
    // console.log(desig);
    // console.log(salary);

  }

  

  return (
    <div>
  <p>A job description contains the following components: job title, job purpose, job duties and responsibilities, required qualifications, preferred qualifications, and working conditions.</p>

<h3 style={{textAlign:'center',fontSize:'60px'}}>Add New Employee</h3>


<Form className='p-5  w-75 container text-container' >
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>UserName</Form.Label>
<Form.Control   onChange={(e)=>setUname(e.target.value)} type="text" placeholder=""/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>Age</Form.Label>
<Form.Control  onChange={(e)=>setAge(e.target.value)} type="text" placeholder=""/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>Designation</Form.Label>
<Form.Control  onChange={(e)=>setDesig(e.target.value)} type="text" placeholder=""/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>Salary</Form.Label>
<Form.Control  onChange={(e)=>setSalary(e.target.value)} type="text" placeholder=""/>
  </Form.Group>

  <Button onClick={(e)=>addEmployee(e)} className="ms-5" variant="success">Add</Button>

  <Link to={'/'}>
      <Button className="ms-5" variant="warning">Cancel</Button>
      </Link>
</Form>

    </div>
    
  )
}

export default Add