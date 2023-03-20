import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

export default function ViewPassengersByAdmin() {
    let navigate = useNavigate();

    const [passengers, setPassengers] = useState([]);
  
    const [bookingCookie, setBookingCookie] = useCookies();
  
    let bId = bookingCookie.BookingId;
  
    const loadPassengers = async () =>{
      const res = await axios.get("http://localhost:8081/passengers");
      setPassengers(res.data);
      console.log("res.data: " + res.data);
    };
  
    useEffect(()=>{
      loadPassengers();
    },[]);
  
    return (
      <div className='container'>
          <div className='py-4'>
            <h4 className="my-3">Booking Details</h4>
          <table className="table border shadow">
              <thead>
                  <tr>
                  <th >PassengerId</th>
                  <th >First Name</th>
                  <th >Last Name</th>
                  <th >Age</th>
                  <th >Gender</th>
                  <th >Passport Number</th>
                  <th >Seat Number</th>
                  <th >Booking Date</th>
                  </tr>
              </thead>
              <tbody>
                {
                  passengers.map((passenger) => (
                    <tr key = {passenger.passengerId}>
                      <td>{passenger.passengerId}</td>
                      <td>{passenger.firstName}</td>
                      <td>{passenger.lastName}</td>
                      <td>{passenger.age}</td>
                      <td>{passenger.gender}</td>
                      <td>{passenger.passportNumber}</td>
                      <td>{passenger.seatNumber}</td>
                      <td>{passenger.booking.bookingDate}</td>
                      
                    </tr>
                  ))
                }
              </tbody>
          </table >
  
          <h4>User Details</h4>
  
          <table className="table border shadow">
                <thead>
                  <tr>
                  
                  <th >User First Name</th>
                  <th >User Last Name</th>
                  <th >Email</th>
                  <th>Contact number</th>
                  
                  </tr>
                </thead>
                <tbody>
                {
                  passengers.map((passenger) => (
                    <tr key = {passenger.passengerId}>
                      
                      <td>{passenger.booking.user.firstName}</td>
                      <td>{passenger.booking.user.lastName}</td>
                      <td>{passenger.booking.user.email}</td>
                      <td>{passenger.booking.user.contactNo}</td>
                    </tr>
                  ))
                }
                </tbody>
          </table>
          <h4>Flight Details</h4>
          <table className="table border shadow">
                <thead>
                  <tr>
                  <th >Source Location</th>
                  <th >Destination Location</th>
                  <th >Departure Time</th>
                  <th >Arrival Time</th>
                  <th >Date</th>
                  <th>Fare</th>
                  </tr>
                </thead>
                <tbody>
                {
                  passengers.map((passenger) => (
                    <tr key = {passenger.passengerId}>
                      
                      <td>{passenger.booking.flight.sourceLocation}</td>
                      <td>{passenger.booking.flight.destinationLocation}</td>
                      <td>{passenger.booking.flight.departureTime}</td>
                      <td>{passenger.booking.flight.arrivalTime}</td>
                      <td>{passenger.booking.flight.date}</td>
                      <td>{passenger.booking.flight.fare}</td>
                    </tr>
                  ))
                }
                </tbody>
          </table>
          
      
      
          </div>
          <Link className="btn btn-outline-dark" to="/adminhomepage">Back</Link>
      </div>
      
    )
}
