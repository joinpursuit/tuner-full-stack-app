/** @format */

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
	const [song, setSong] = useState({
		name: '',
		artist: '',
		album: '',
		year: '',
		time: '',
		is_favorite: false,
	});

	let navigate = useNavigate();

	const addSong = (song) => {
		axios
			.post(`${API}/songs`, song)
			.then(
				(response) => {
					navigate(`/songs`);
				},
				(error) => console.error(error)
			)
			.catch((c) => console.warn('catch', c));
	};

	const handleTextChange = (event) => {
		setSong({ ...song, [event.target.id]: event.target.value });
	};

	const handleCheckboxChange = () => {
		setSong({ ...song, is_favorite: !song.is_favorite });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addSong(song);
	};

	return (
		<div className='New'>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Name:</label>
				<input
					id='name'
					value={song.name}
					type='text'
					onChange={handleTextChange}
					placeholder='Name of Song'
					required
				/>
				<label htmlFor='artist'>Artist:</label>
				<input
					id='artist'
					value={song.artist}
					type='text'
					onChange={handleTextChange}
					placeholder='Name of Artist'
					required
				/>
				<label htmlFor='album'>Album:</label>
				<input
					id='album'
					value={song.album}
					type='text'
					onChange={handleTextChange}
					placeholder='Name of Album'
					required
				/>
				<label htmlFor='year'>Year:</label>
				<input
					id='year'
					value={song.year}
					type='number'
					onChange={handleTextChange}
					placeholder='Year of Song'
					required
				/>
				<label htmlFor='time'>Time:</label>
				<input
					id='time'
					value={song.time}
					type='number'
					onChange={handleTextChange}
					placeholder='Time of Song in Seconds'
					required
				/>
				<label htmlFor='is_favorite'>Favorite:</label>
				<input
					id='is_favorite'
					type='checkbox'
					onChange={handleCheckboxChange}
					checked={song.is_favorite}
				/>
				<br />
				<input type='submit' />
			</form>
		</div>
	);
}

export default SongNewForm;
