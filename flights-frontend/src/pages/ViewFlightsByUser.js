import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ViewFlightsByUser() {

    const [flights, setFlights] = useState([]);

    useEffect(()=>{
        loadFlights();
    },[]);

    const loadFlights = async () =>{
        const result = await axios.get("http://localhost:8081/flights");
        setFlights(result.data);
    }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">FlightID</th>
      <th scope="col">Source Location</th>
      <th scope="col">DestinationLocation</th>
      <th scope="col">Departure Time</th>
      <th scope="col">Arrival Time</th>
      <th scope="col">Date</th>
      <th scope="col">Fare</th>
      <th scope="col">Available Seats</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

    {
        flights.map((flight,index) =>(
            <tr key={flight.flightId}>
              <th scope="row" key={index}>{index+1}</th>
            <td>{flight.flightId}</td>
            <td>{flight.sourceLocation}</td>
            <td>{flight.destinationLocation}</td>
            <td>{flight.departureTime}</td>
            <td>{flight.arrivalTime}</td>
            <td>{flight.date}</td>
            <td>{flight.fare}</td>
            <td>{flight.availableSeats}</td>
            </tr>
        ))
    }
    
  </tbody>
  
</table>
<Link className="btn btn-outline-dark" to="/login">Back</Link>
<Link className="btn btn-outline-dark mx-2" to="/viewflightbyid">View Flights by Id</Link>

        </div>
    </div>
  )
}
