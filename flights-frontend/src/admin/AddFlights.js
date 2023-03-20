import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddFlights() {

    let navigate = useNavigate(); 

    const [flight, setFlight] = useState({
        flightId:"",
        sourceLocation:"",
        destinationLocation:"",
        departureTime:"",
        arrivalTime:"",
        date:"",
        fare:"",
        availableSeats:""
    });

    const{flightId, sourceLocation, destinationLocation, departureTime, arrivalTime, date, fare, availableSeats} = flight;

    const onInputChange=(e)=>{
        setFlight({...flight,[e.target.name]:e.target.value})
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8081/flight",flight);
        navigate("/viewflights");
    }
  return (
    <div className="container">
        <div className="row my-5 mb-5">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    
                <h2 className="text-center m-4">Add New Flights</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="flightId" className="form-label">FlightId</label>
                    <input type={"text"} className="form-control" placeholder="Enter the flightId" name="flightId" value={flightId} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="sourceLocation" className="form-label">Source Location</label>
                    <input type={"text"} className="form-control" placeholder="Enter the source location" name="sourceLocation" value = {sourceLocation} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="destinationLocation" className="form-label">Destination Location</label>
                    <input type={"text"} className="form-control" placeholder="Enter your destination location" name="destinationLocation" value={destinationLocation} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="departureTime" className="form-label">Departure Time</label>
                    <input type={"text"} className="form-control" placeholder="Enter the departure time" name="departureTime" value={departureTime} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="arrivalTime" className="form-label">Arrival Time</label>
                    <input type={"text"} className="form-control" placeholder="Enter the arrival time" name="arrivalTime" value={arrivalTime} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type={"text"} className="form-control" placeholder="Enter the date" name="date" value={date} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="fare" className="form-label">Fare</label>
                    <input type={"text"} className="form-control" placeholder="Enter the fare in Rs." name="fare" value={fare} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="availableSeats" className="form-label">Available Seats</label>
                    <input type={"text"} className="form-control" placeholder="Enter the number of seats available" name="availableSeats" value={availableSeats} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <Link className="btn btn-outline-danger mx-2" to="/adminhomepage">Cancel</Link>
                </form>
            </div>

        </div>

    </div>
  )
}
