import React from "react";
import { Link } from "react-router-dom";

function Song({ song }) {
	return (
		<div>
			<span>{song.name}</span>
			<Link to={`/songs/${song.id}`}>✏️</Link>
		</div>
	);
}

export default Song;
