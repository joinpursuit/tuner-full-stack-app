import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
	const [song, setSong] = useState([]);
	let { id } = useParams();
	let navigate = useNavigate();

	useEffect(() => {
		axios
			.get(API + "/songs/" + id)
			.then((res) => {
				setSong(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	const handleDelete = () => {
		axios
			.delete(API + "/songs/" + id)
			.then((res) => {
				navigate("/songs");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<article>
			<div>
				<h3>
					{true ? <span>⭐️</span> : null} {song.name}
				</h3>
				<h3> Name: {song.name} </h3>
				<h3> Song: {song.artist} </h3>
				<h3> Album: {song.album}</h3>
				<h3> Time: {song.time}</h3>
			</div>

			<div className="detailsButtton">
				<div>
					<Link to={`/songs`}>
						<button>Back</button>
					</Link>
				</div>
				<div>
					<Link to={`/songs/${song.id}/edit`}>
						<button>Edit</button>
					</Link>
				</div>
				<div>
					<button onClick={handleDelete}>Delete</button>
				</div>
			</div>
		</article>
	);
}

export default SongDetails;
