import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav>
			<h1>
				<Link to="/songs">Tuner</Link>
			</h1>
			<button>
				<Link to="/songs/new">New</Link>
			</button>
		</nav>
	);
}

export default NavBar;
