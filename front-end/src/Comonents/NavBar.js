import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <br />
      <br />

      <Link to="/songs">SONGS</Link>
      <br />
      <br />

      <Link to="/songs/new">NEW</Link>
      <br />
    </div>
  );
}

export default NavBar;
