import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/songs">Songs</Link>
			<Link to="/songs/new">Add New Song</Link>
		</div>
	);
}
