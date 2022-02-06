import React from "react";
import { Link } from "react-router-dom";

function Song({ song }) {
	return (
		<div>
			<span className="indexName">{song.name}</span>
			<Link className="indexName" to={`/songs/${song.id}`}>
				✏️
			</Link>
		</div>
	);
}

export default Song;
