import React from "react";
import Song from "./Song";
import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

function Songs() {
	const [songs, setSongs] = useState([]);
	useEffect(() => {
		axios.get(API + "/songs").then((res) => {
			setSongs(res.data);
		});
	}, []);
	return (
		<div className="detailsMain">
			{songs.map((song) => {
				return <Song key={song.id} song={song} />;
			})}
		</div>
	);
}

export default Songs;
