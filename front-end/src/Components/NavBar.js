import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/songs">TUNER APP</Link>
      </h1>
      <button class="nav-button">
        <Link to="/songs/new" class="nav-link">New Song</Link>
      </button>
    </nav>
  );
}
