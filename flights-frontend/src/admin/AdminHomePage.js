import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminHomePage() {
  return (
    <div className="row mt-5">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <div className="text-center m-4"><h1>Welcome Admin. Choose your option:</h1></div>
        <div>
        <Link className="btn btn-outline-dark mt-5" to="/viewusers">View Users</Link>
        <Link className="btn btn-outline-dark mt-5 mx-2" to="/addflights">Add Flights</Link>
        <Link className="btn btn-outline-dark mt-5" to="/updateflight">Update Flights</Link>
        <Link className="btn btn-outline-dark mt-5 mx-2" to="/viewpassengersbyadmin">View All Bookings</Link>
       
        </div>
        <Link className="btn btn-outline-dark my-3" to="/">Back</Link>
      </div>
      
    </div>
  )
}
