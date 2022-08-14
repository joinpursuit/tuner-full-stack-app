import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default function Nav() {

  return (
    <div> 
       <h1> <Link to="/" className="link">My Songs Page</Link><br/></h1>
        <Link to="/songs" className="link">Songs</Link>
        <Link to="/songs/new" className="link">Add a Song</Link>
    </div>
  );
}