import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function NewSong(props) {
	const API = process.env.REACT_APP_API_URL;
	const navigate = useNavigate();
	const [song, setSong] = useState({
		name: "",
		artist: "",
		album: "",
		time: "",
		is_favorite: false,
	});
	const handleChange = (event) => {
		setSong({
			...song,
			[event.target.id.toLowerCase()]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${API}/songs`, song)
			.then(() => {
				navigate("/songs");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleCheckboxChange = (event) => {
		setSong({ ...song, is_favorite: !song.is_favorite });
	};
	return (
		<div className="song-form">
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input id="name" type="text" name="name" onChange={handleChange} />
				</label>
				<label>
					Artist
					<input id="artist" type="text" name="artist" onChange={handleChange} />
				</label>
				<label>
					Album
					<input id="album" type="text" name="album" onChange={handleChange} />
				</label>
				<label>
					Time
					<input id="time" type="text" name="time" onChange={handleChange} />
				</label>
				<label>
					Favorite?
					<input
						id="is_favorite"
						type="checkbox"
						name="is_favorite"
						onChange={handleCheckboxChange}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
