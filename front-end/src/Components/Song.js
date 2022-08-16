/** @format */

import { Link } from 'react-router-dom';

function Song({ song, id }) {
	return (
		<tr className='song-show'>
			<td>
				{song.is_favorite ? <span>🎸</span> : <span>&nbsp; &nbsp; &nbsp;</span>}
			</td>
			<td>
				<Link to={`/songs/${id}`} className='song-show-link'>
					{song.name}
				</Link>
			</td>
			<td>{song.artist}</td>
			<td>{song.album}</td>
			<td>{song.year}</td>
			<td>{song.time}</td>
		</tr>
	);
}

export default Song;
