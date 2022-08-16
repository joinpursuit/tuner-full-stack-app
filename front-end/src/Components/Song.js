import { Link } from "react-router-dom";

function Song({ song, id }) {
  return (
    <div className="Songs">
      <td>
        <Link to={`/songs/${song.id}`}> <a href={song.id}>
          {song.name}
        </a> </Link>
      </td>
    </div>
  );
}

export default Song;