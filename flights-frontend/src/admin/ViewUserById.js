import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function ViewuserById() {

    const [uId, setuserId] = useState("");
    const [user, setUser] = useState({
        userId:"",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        contactNo:""
    });

    const onSubmit=async(e)=>{
        e.preventDefault();
        const result = await axios.get(`http://localhost:8081/user/${uId}`);
        setUser(result.data);
    }

  return (
    <div>
        <div className="container">
        <div className="row mt-5">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h5 className="text-center m-4">Enter UserId</h5>
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mt-5">
                <label htmlFor="userId" className="form-label">UserId</label>
                <input type={"text"} className="form-control" placeholder="Enter your userId" name="userId" value={uId} onChange={(e)=> setuserId(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-outline-dark mt-5">Submit</button>
            <Link className="btn btn-outline-dark mt-5 mx-2" to="/viewusers">Back</Link>
            
        </form>
            </div>
        </div>
        </div>

        <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">UserId</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Contact No.</th>
    </tr>
  </thead>
  <tbody>
  <tr>
            <td>{user.userId}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.contactNo}</td>
            </tr>
            </tbody>
            </table>
            </div>
            </div>
        </div>
  )
}
