import React from 'react'
import { useCookies } from 'react-cookie';
import { BrowserRouter, Link, useNavigate } from 'react-router-dom';

export default function Login() {

  let navigate = useNavigate();

  const [cookie, setCookie] = useCookies();

  const logout = () => {
    navigate("/userhomepage");
  }
  return (
    <div className="row mt-5">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h3 className="text-center m-4">Welcome to your account!</h3>
            <h5 className="my-3">Choose your option:</h5>
            <Link className="btn btn-outline-dark col-12" to="/useraccountdetails">View Account Details</Link> {/* update user and delete user in account details page*/}
            <Link className="btn btn-outline-dark col-12 my-2" to="/viewflightsbyuser">View Flights</Link>
            <Link className="btn btn-outline-dark col-12" to="/addbooking">Make a Booking</Link>
            <Link className="btn btn-outline-dark col-12 my-2" to="/viewpassengers">View Bookings</Link>{/*update and delete inside*/}
            <div>
            <Link className="btn btn-outline-dark mt-3 mx-2" to="/userhomepage">Back</Link>
          <button className="btn btn-outline-danger mt-3" onClick={()=>logout()}>Logout</button>
        </div>
        </div>
        
    </div>
    
  )
}
