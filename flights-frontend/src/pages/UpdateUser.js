import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function UpdateUser() {

    let navigate = useNavigate();

    // const [uId, setUserId] = useState();

    const [cookie, setCookie] = useCookies();
  console.group("Cookie new: "+ cookie.UserId);

    const [user, setUser] = useState({
        userId:"",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        contactNo:""
    });

    let uId = cookie.UserId;

    const{userId, firstName, lastName, email, password, contactNo} = user;

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8081/user/${uId}`,user);
        navigate("/useraccountdetails");
    }

    // const onSubmitId=async(e)=>{
    //     e.preventDefault();
    //     const result = await axios.get(`http://localhost:8081/user/${uId}`);
    //     setUser(result.data);
    // }

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8081/user/${uId}`);
        setUser(result.data);
    }

  return (
    <div className="container">
    <h2 className="text-center m-4">Update User</h2>
    <div className="row my-5 mb-5">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

            

            <h4>Enter the userId:</h4>
            {/* <form onSubmit={(e)=>onSubmitId(e)}>
            <div className="mt-5">
            <label htmlFor="userId" className="form-label">UserId</label>
            <input type={"text"} className="form-control" placeholder="Enter your userId" name="userId" value={userId} onChange={(e)=> setUserId(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-outline-primary mt-5">Submit</button>
            <Link className="btn btn-outline-danger mt-5 mx-2" to="/useraccountdetails">Cancel</Link>
        
            </form> */}
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type={"text"} className="form-control" placeholder="Enter your first name" name="firstName" value={firstName} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type={"text"} className="form-control" placeholder="Enter your last name" name="lastName" value={lastName} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type={"text"} className="form-control" placeholder="Enter your email" name="email" value={email} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type={"text"} className="form-control" placeholder="Enter your password" name="password" value={password} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="contactNo" className="form-label">Contact Number</label>
                    <input type={"text"} className="form-control" placeholder="Enter your contact number" name="contactNo" value={contactNo} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <Link className="btn btn-outline-danger mx-2" to="/useraccountdetails">Cancel</Link>
            </form>
        </div>

    </div>

</div>
  )
}
