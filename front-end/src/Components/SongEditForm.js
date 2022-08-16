/** @format */

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
	let { id } = useParams();
	let navigate = useNavigate();

	const [song, setSong] = useState({
		name: '',
		artist: '',
		album: '',
		year: 1970,
		time: 0,
		is_favorite: false,
	});

	const updateSong = (updatedSong) => {
		axios
			.put(`${API}/songs/${id}`, updatedSong)
			.then(
				() => {
					navigate(`/songs/${id}`);
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

	useEffect(() => {
		axios.get(`${API}/songs/${id}`).then(
			(response) => setSong(response.data),
			(error) => navigate(`/not-found`)
		);
	}, [id, navigate]);

	const handleSubmit = (event) => {
		event.preventDefault();
		updateSong(song, id);
	};

	return (
		<div className='Edit'>
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
			<Link to={`/songs/${id}`}>
				<button>Back</button>
			</Link>
		</div>
	);
}

export default SongEditForm;
