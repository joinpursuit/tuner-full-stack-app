import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <div className="nav" id="nav">
      <h2>Tuner App</h2>
      <Link className='nav-link'to="/">Home</Link>
      <br></br>
      <Link className='nav-link'to="songs">Track Listing</Link>
      <br></br>
      <Link className='nav-link'to="/new">Add a Track!</Link>
    </div>
  );
}

export default NavBar