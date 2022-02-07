import { Link } from 'react-router-dom';

function Song({ song }) {
  return (
    <tr>
        <td>
            {song.is_favorite ? (
                <span>🎶</span>
            ) : (
                <span>🗑</span>
            )}
        </td>
        <td>
            {song.name}
        </td>
        <td>
            <Link to={`/songs/${song.id}`}>🎧</Link>
        </td>
    </tr>
  );
}

export default Song;
