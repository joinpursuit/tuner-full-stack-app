import { Link } from "react-router-dom"

function Song({song}) {
  return (
    <tr>
        <td>
            {song.is_favorite ? (
                <span>⭐️</span>
            )  : (
                <span>&nbsp; &nbsp; &nbsp;</span>
            )}
        </td>
        <td>
            <Link to={`/songs/${song.id}`}>
            <h3>
                {song.name}
            </h3>
                {song.artist}
                <br />
                {song.album}
                <br />
                {song.time}
            </Link>
        </td>
    </tr>
  )
}

export default Song;
