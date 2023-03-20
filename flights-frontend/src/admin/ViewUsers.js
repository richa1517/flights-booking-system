import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Home() {

    // const {userId} = useParams();

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8081/users");
        setUsers(result.data);
    };

  return (
    <div className='container'>
        <div className='py-4'>
          <h3 className="my-3">User Details</h3>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">S. No.</th>
      <th scope="col">UserId</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Contact No.</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user,index) =>(
            <tr key={user.userId}>
            <th scope="row" key={index}>{index+1}</th>
            <td>{user.userId}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.contactNo}</td>
            </tr>
        ))
    }
    
  </tbody>
</table>
<Link className="btn btn-outline-dark" to="/adminhomepage">Back</Link>
<Link className="btn btn-outline-dark mx-2" to="/viewuserbyid">View user by Id</Link>
        </div>
    </div>
  )
}
