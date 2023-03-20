import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function AddBooking() {

    let navigate = useNavigate();

    const [cookie, setCookie] = useCookies();
    const [bookingCookie, setBookingCookie] = useCookies();
    console.log("Cookie new: "+ cookie.UserId);

    const [booking, setBooking] = useState({
        bookingId:"",
        userId:"",
        flightId:"",
        bookingDate:"",
        totalCost:"",
        seatsBooked:""
    });

    const today = new Date();

    const{bookingId, userId, flightId, bookingDate, totalCost, seatsBooked} = booking; //userId and bookingDate not written

    



    const onInputChange = (e)=>{
        setBooking({...booking,[e.target.name]:e.target.value});
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        booking.userId = cookie.UserId;
        booking.bookingDate = `${today.getDate()}-${(today.getMonth() + 1)}-${today.getFullYear()}`;
        let res = await axios.get(`http://localhost:8081/flight/${booking.flightId}`);
        console.log("res.data: ");
        console.log(res.data)
        booking.totalCost = res.data.fare;
        await axios.post("http://localhost:8081/booking",booking);
        setBookingCookie('BookingId', booking.bookingId, { path: '/' });
        navigate("/addpassenger");
    }

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Make a Booking</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="bookingId" className="form-label">BookingId</label>
                    <input type={"text"} className="form-control" placeholder="Enter your bookingId" name="bookingId" value={bookingId} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="flightId" className="form-label">FlightId</label>
                    <input type={"text"} className="form-control" placeholder="Enter the flightId" name="flightId" value={flightId} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="seatsBooked" className="form-label">Seats Booked</label>
                    <input type={"text"} className="form-control" placeholder="Enter the no. of seats booked" name="seatsBooked" value={seatsBooked} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className="btn btn-outline-primary">Next</button>
                <Link className="btn btn-outline-danger mx-2" to="/login">Cancel</Link>
                </form>
            </div>
      </div>
    </div>
  )
}
