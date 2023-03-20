import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function ViewFlightById() {

  const [fId, setFlightId] = useState("");
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

    const onSubmit=async(e)=>{
        e.preventDefault();
        const result = await axios.get(`http://localhost:8081/flight/${fId}`);
        setFlight(result.data);
    }

  return (
    <div>
        <div className="container">
        <div className="row mt-5">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h5 className="text-center m-4">Enter FlightId</h5>
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mt-5">
                <label htmlFor="flightId" className="form-label">FlightId</label>
                <input type={"number"} className="form-control" placeholder="Enter your flightId" name="flightId" value={fId} onChange={(e)=> setFlightId(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-outline-dark mt-5">Submit</button>
            <Link className="btn btn-outline-dark mt-5 mx-2" to="/viewflights">Back</Link>
            
        </form>
            </div>
        </div>
        </div>

        <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">FlightID</th>
      <th scope="col">Source Location</th>
      <th scope="col">DestinationLocation</th>
      <th scope="col">Departure Time</th>
      <th scope="col">Arrival Time</th>
      <th scope="col">Date</th>
      <th scope="col">Fare</th>
      <th scope="col">Available Seats</th>
    </tr>
  </thead>
  <tbody>
  <tr>
            <td>{flight.flightId}</td>
            <td>{flight.sourceLocation}</td>
            <td>{flight.destinationLocation}</td>
            <td>{flight.departureTime}</td>
            <td>{flight.arrivalTime}</td>
            <td>{flight.date}</td>
            <td>{flight.fare}</td>
            <td>{flight.availableSeats}</td>
            </tr>
            </tbody>
            </table>
            </div>
            </div>
        </div>
  )
}
