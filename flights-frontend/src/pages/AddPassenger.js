import axios from 'axios';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function AddPassenger() {

    let navigate = useNavigate();

    const [bookingCookie, setBookingCookie] = useCookies();

    const [passenger, setPassenger] = useState({
        passengerId:"",
        bookingId:"",
        firstName:"",
        lastName:"",
        age:"",
        gender:"",
        passportNumber:"",
        seatNumber:""
    }); 
    
    const {passengerId, bookingId, firstName, lastName, age, gender, passportNumber, seatNumber} = passenger;

    const onInputChange = async(e) =>{
        setPassenger({...passenger,[e.target.name]:e.target.value});
    }

    const onSubmit = async(e)=>{
        e.preventDefault();
        passenger.bookingId = bookingCookie.BookingId;
        await axios.post("http://localhost:8081/passenger", passenger);
        alert("Your Flight Booking is Successfully Done!")
        navigate("/login");
    }

    return (
    <div className="container">
      <div className="row mt-5 mb-5">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Add Passenger Details</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="passengerId" className="form-label">PassengerId</label>
                    <input type={"text"} className="form-control" placeholder="Enter the passengerId" name="passengerId" value={passengerId} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type={"text"} className="form-control" placeholder="Enter your first name" name="firstName" value={firstName} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type={"text"} className="form-control" placeholder="Enter your last name" name="lastName" value={lastName} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type={"text"} className="form-control" placeholder="Enter your age" name="age" value={age} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <input type={"text"} className="form-control" placeholder="Enter your gender" name="gender" value={gender} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="passportNumber" className="form-label">Passport Number</label>
                    <input type={"text"} className="form-control" placeholder="Enter your passport number" name="passportNumber" value={passportNumber} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="seatNmber" className="form-label">Seat Number</label>
                    <input type={"text"} className="form-control" placeholder="Enter the seat number" name="seatNumber" value={seatNumber} onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                </form>
            </div>
      </div>
    </div>
  )
}
