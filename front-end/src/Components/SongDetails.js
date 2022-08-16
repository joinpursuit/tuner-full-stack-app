/** @format */

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function SongDetails() {
	const [song, setSong] = useState([]);
	let { id } = useParams();
	let navigate = useNavigate();

	const API = process.env.REACT_APP_API_URL;

	useEffect(() => {
		axios.get(`${API}/songs/${id}`).then((response) => {
			setSong(response.data);
		});
	}, [id, navigate, API]);

	const deleteSong = () => {
		axios
			.delete(`${API}/songs/${id}`)
			.then(() => {
				navigate(`/songs`);
			})
			.catch((c) => console.error('catch', c));
	};

	const handleDelete = () => {
		deleteSong();
	};

	return (
		<>
			<article>
				<h2>
					{song.is_favorite ? <span>🎸</span> : null} {song.name}
				</h2>
				<h3>{song.artist}</h3>
				<h4>{song.album}</h4>
				<h5>{song.year}</h5>
				<h5>{song.time}</h5>
			</article>
			<div className='showNavigation'>
				<div>
					<Link to={`/songs`}>
						<button>Back</button>
					</Link>
				</div>
				<div>
					<Link to={`/songs/${id}/edit`}>
						<button>Edit</button>
					</Link>
				</div>
				<div>
					<button onClick={handleDelete}>Delete</button>
				</div>
			</div>
		</>
	);
}

export default SongDetails;
