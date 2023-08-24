import axios from 'axios';
import {React,useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';
import './View.css'
// import Table from 'react-bootstrap/Table';

function View() {
  //state to store employee data
const [employee,setEmployee]=useState({})
  const params= useParams()

  const fetchEmp=async ()=>{
    const result=await axios.get('http://localhost:8000/getAnEmp/'+params.id)
setEmployee(result.data.employee);
}
console.log(employee);
useEffect(()=>{
fetchEmp()
},[])

  return (
    <div>
        <p>A job description contains the following components: job title, job purpose, job duties and responsibilities, required qualifications, preferred qualifications, and working conditions.</p>

<h3 style={{textAlign:'center',fontSize:'50px'}}>View Employee</h3>





<Card className='w-50 container mt-1 k'>
      <Card.Img variant="top" src="https://i.postimg.cc/vmrFwQjH/images-1.jpg" />
      <Card.Body>
        <Card.Title className='text-center'><h2>{employee.uname}</h2> </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item> Designation <strong className='fs-4'> {employee.designation}</strong></ListGroup.Item>
       <ListGroup.Item>Age {employee.age}</ListGroup.Item>
        <ListGroup.Item>Salary{employee.salary}</ListGroup.Item>
      </ListGroup>
     
    </Card>



      {/* <Table   className='w-75 container border text-center mt-4' striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>

        </tr>
       
      </tbody>
    </Table> */}
    </div>
  )
}

export default View