import { Link } from "react-router-dom";

function Song({ song}) {
  return (
    <tr className="Song">
      <td>
        {song.name}
      </td>
      <td>
        {song.artist}
        </td>
        {/* <td>
            {song.album}
        </td> */}
        <td>
            {song.time}
        </td>
      <td>
        <Link to={`/songs/${song.id}`}>✏️</Link>
      </td>
      <td>
      {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
    </tr>
  );
}

export default Song;
