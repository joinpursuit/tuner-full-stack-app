import React from "react";
import { Link } from "react-router-dom";

export default function Song(props) {
	const { name, artist, index, deleteSong } = props;
	return (
		<div className="Song">
			<Link to={`/songs/${index}`}>
				<h2>{name}</h2>
			</Link>
			<h3>{artist}</h3>
			<Link to={`/songs/${index}/edit`}>
				<button>Edit</button>
			</Link>
			<button onClick={() => deleteSong(index)}>Delete</button>
		</div>
	);
}
