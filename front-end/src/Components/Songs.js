import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Songs() {
	const [songs, setSongs] = useState([]);
	useEffect(() => {
		axios.get(API + "/songs").then((res) => {
			setSongs(res.data);
		});
	}, []);

	let songMap = songs.map((song) => {
		return (
			<div className="songMap">
				<div className="indexName">{song.name}</div>
				<div className="indexName">{song.album}</div>
				<div>
					<Link className="indexName" to={`/songs/${song.id}`}>
						✏️
					</Link>
				</div>
			</div>
		);
	});
	return <div className="detailsMain">{songMap}</div>;
}

export default Songs;
