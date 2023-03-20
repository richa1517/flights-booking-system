import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="row mt-5">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <div className="text-center m-4"><h3>Select Your Option</h3></div>
        <Link className="btn btn-outline-dark mt-5" to="/userhomepage">User</Link>
        <Link className="btn btn-outline-dark mt-5 mx-2" to="/adminhomepage">Admin</Link>
      </div>
    </div>
  )
}
