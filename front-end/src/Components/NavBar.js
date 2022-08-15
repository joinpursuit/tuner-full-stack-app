import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav" id="nav">
      <h2>Tuner App</h2>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="songs">Track Listing</Link>
      <br></br>
      <Link to="/new">Add a Track!</Link>
    </div>
  );
}

export default NavBar