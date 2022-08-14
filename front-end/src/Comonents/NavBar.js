import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <h1>
        <Link to="/">HOME</Link>
      </h1>
      <br />
      <br />
      <h1>
        <Link to="/songs">SONGS</Link>
      </h1>
      <br />
      <br />
      <h1>
        <Link to="/songs/new">NEW</Link>
      </h1>
      <br />
    </nav>
  );
}

export default NavBar;
