import { Link } from 'react-router-dom';

function Song({ song }) {
  return (
    <tr className='Song'>
        <td className='Songs'>
            {song.is_favorite ? (
                <span>⭐️</span>
            ) : (
                <span>🗑</span>
            )}
        </td>
        <td className='Songs'>
            <Link to={`/songs/${song.id}`}>{song.name}</Link>
        </td>
        <td className='Songs'>
            {song.artist}
        </td>
        <td className='Songs'>
            {song.time}
        </td>
    </tr>
  );
}

export default Song;
