import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/songs">SONGS</Link>
      <br />
      <Link to="/songs/new">NEW</Link>
    </div>
  );
}

export default NavBar;
