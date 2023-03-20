import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-custom navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Flights Booking System</Link>
                <Link className = "btn btn-outline-dark" to="/viewflights">View Flights</Link>
            </div>
        </nav>
    </div>
  )
}