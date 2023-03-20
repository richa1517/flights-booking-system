import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterUser from './pages/RegisterUser';
import Login from './pages/Login';
import ViewFlights from './pages/ViewFlights';
import UserHomePage from './pages/UserHomePage';
import AdminHomePage from './admin/AdminHomePage';
import AddFlights from './admin/AddFlights';
import ViewUsers from './admin/ViewUsers';
import UpdateFlights from './admin/UpdateFlights';
import ViewUserById from './admin/ViewUserById';
import ViewFlightById from './admin/ViewFlightById';
import UserAccountDetails from './pages/UserAccountDetails';
import ViewFlightsByUser from './pages/ViewFlightsByUser';
import UpdateUser from './pages/UpdateUser';
import AddBooking from './pages/AddBooking';
import AddPassenger from './pages/AddPassenger';
import ViewPassengers from './pages/ViewPassengers';
import ViewPassengersByAdmin from './admin/ViewPassengersByAdmin';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/registeruser" element={<RegisterUser/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/viewflights" element={<ViewFlights/>}/>
          <Route path="/userhomepage" element={<UserHomePage/>}/>
          <Route path="/addflights" element={<AddFlights/>}/>
          <Route path="/adminhomepage" element={<AdminHomePage/>}/>
          <Route path="/viewusers" element={<ViewUsers/>}/>
          <Route path="/updateflight" element={<UpdateFlights/>}/>
          <Route path="/viewuserbyid" element={<ViewUserById/>}/>
          <Route path="/viewflightbyid" element={<ViewFlightById/>}/>
          <Route path="/useraccountdetails" element={<UserAccountDetails/>}/>
          <Route path="/viewflightsbyuser/" element={<ViewFlightsByUser/>}/>
          <Route path="/updateuser" element={<UpdateUser/>}/>
          <Route path="/addbooking" element={<AddBooking/>}/>
          <Route path="/addpassenger" element={<AddPassenger/>}/>
          <Route path="/viewpassengers" element={<ViewPassengers/>}/>
          <Route path="/viewpassengersbyadmin" element={<ViewPassengersByAdmin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
