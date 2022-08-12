import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function ShowSong({ API, deleteSong }) {
	const { id } = useParams();
	const [song, setSong] = useState({});
	useEffect(() => {
		axios
			.get(`${API}/songs/${id}`)
			.then((response) => {
				setSong(response.data);
			})
			.catch((error) => console.log(error));
	});
	return (
		<div>
			<h1>{song.name}</h1>
			<h2>{song.artist}</h2>
			<p>{song.album}</p>
			<p>{song.time}</p>
			{song.is_favorite && "HEART EMOJI"}
			<br />
			<Link to={`/songs`}>
				<button>Back</button>
			</Link>
			<Link to={`/songs/${id}/edit`}>
				<button>Edit</button>
			</Link>
			<button onClick={() => deleteSong(id)}>Delete</button>
		</div>
	);
}
