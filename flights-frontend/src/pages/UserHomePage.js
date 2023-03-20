// import axios from 'axios';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom'

export default function UserHomePage() {

  let navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [cookie, setCookie, removeCookie] = useCookies();

  const onSubmit = async(e)=>{
    e.preventDefault();
    if(userId.length == 0){
      alert("Value is required");
      return false;
    }
    setCookie('UserId', userId, { path: '/' });
    console.log("cookie:" + cookie.UserId);
    navigate("/login");
  }

  return (
    <div className="container">
    <div className="row mt-5">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h3 className="text-center m-4">Login to Your Account</h3>
        <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mt-5">
                <label htmlFor="userId" className="form-label">UserId</label>
                <input type={"text"} className="form-control" placeholder="Enter your userId" name="userId" value={userId} onChange={(e)=> setUserId(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-outline-dark mt-5">Login</button>
            <Link className="btn btn-outline-dark mt-5 mx-2" to="/">Back</Link>
            <div className="mt-4">
            
            <Link to="/registeruser">Don't have an account? Register Here.</Link>
            </div>
            
        </form>
      </div>
    </div>
    </div>
  )
}
