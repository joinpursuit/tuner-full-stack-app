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
		<div>
			<section>
				<table>
					<thead>
						<tr>
							<th></th>
							<th>Take me there</th>
							<th>See this Song</th>
						</tr>
					</thead>
					<tbody>
						{songs.map((song) => {
							return <Song key={song.id} song={song} />;
						})}
					</tbody>
				</table>
			</section>
		</div>
	);
}

export default Songs;
