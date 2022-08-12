import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function EditSong(props) {
	const { API } = props;
	const { id } = useParams();
	const navigate = useNavigate();
	const [song, setSong] = useState({
		name: "",
		artist: "",
		album: "",
		time: "",
		is_favorite: false,
	});
	useEffect(() => {
		axios
			.get(`${API}/songs/${id}`)
			.then((response) => {
				setSong(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);
	const handleChange = (event) => {
		setSong({
			...song,
			[event.target.id.toLowerCase()]: event.target.value,
		});
	};
	const handleCheckboxChange = (event) => {
		setSong({ ...song, is_favorite: !song.is_favorite });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.put(`${API}/songs/${id}`, song)
			.then((response) => {
				navigate(`/songs/${id}`);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="song-form">
			<form onSubmit={handleSubmit}>
				<label>
					name:
					<input
						id="name"
						type="text"
						name="name"
						onChange={handleChange}
						value={song.name}
					/>
				</label>
				<label>
					song artist:
					<input
						id="artist"
						type="text"
						name="artist"
						onChange={handleChange}
						value={song.artist}
					/>
				</label>
				<label>
					album
					<input
						id="album"
						type="text"
						name="album"
						onChange={handleChange}
						value={song.album}
					/>
				</label>
				<label>
					Time:
					<input
						id="time"
						type="text"
						name="time"
						onChange={handleChange}
						value={song.time}
					/>
				</label>
				<label>
					Favorite?
					<input
						id="is_favorite"
						type="checkbox"
						name="is_favorite"
						onChange={handleCheckboxChange}
						value={song.is_favorite}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
