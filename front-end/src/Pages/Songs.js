import React, { useEffect, useState } from "react";
import Song from "../Components/Song";
import axios from "axios";

export default function Songs(props) {
	const { API, deleteSong } = props;
	const [songList, setSongList] = useState([]);
	useEffect(() => {
		axios
			.get(`${API}/songs`)
			.then((response) => {
				setSongList(response.data);
			})
			.catch((error) => console.log(error));
	}, []);
	return (
		<div className="Songs">
			<h1>Songs (Total: {songList.length})</h1>
			{songList.map((song, index) => {
				return (
					<Song
						key={index}
						index={song.id}
						name={song.name}
						artist={song.index}
						album={song.album}
						time={song.time}
						is_favorite={song.is_favorite}
						deleteSong={deleteSong}
					/>
				);
			})}
		</div>
	);
}
