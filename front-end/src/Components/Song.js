import { Link } from "react-router-dom";

function Song({ song, id }) {
    console.log(song);
    return (

        <tr>
            <td>
                {song.isFavorite ? (
                    <span>🎧</span>
                 ) : null
                }
            </td>
            <td>
                <a href={`/songs/${id}`} >
                    {song.name}
                </a>
            </td>
            <td>
                <Link to={`/songs/${id}`}>🎧</Link>
            </td>
        </tr>

    );
}

export default Song;