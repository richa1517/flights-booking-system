import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

export default function UserAccountDetails() {

    let navigate = useNavigate();

    const [cookie, setCookie] = useCookies();
  console.group("Cookie new: "+ cookie.UserId);

    let userId = cookie.UserId;

    const [user, setUser] = useState({
        userId:"",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        contactNo:""
    });

    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8081/user/${userId}`);
        setUser(result.data);
    }

    useEffect(()=>{
        loadUser();
    },[]);

    // const deleteUser = async(uId)=>{
    //     // var res = alert("You are going to delete your account");
    //     // if(res=true){
    //         await axios.delete(`http://localhost:8081/user/${userId}`);
    
    //         navigate("/userhomepage")
    //     // }
    //     // else{
    //     //     return false;
    //     // }
        
    // }

    const deleteUser = async(userId)=>{
        await axios.delete(`http://localhost:8081/user/${userId}`);
        navigate("/userhomepage");
    }

  return (
    <div>
        
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
            <Link className="btn btn-outline-dark" to="/updateUser">Update Details</Link>
            <button className="btn btn-outline-danger mx-2" onClick={()=>deleteUser(userId)}>Delete Account</button>
            <Link className="btn btn-outline-dark" to="/login">Back</Link>
            </div>
            </div>
        </div>
  )
}
