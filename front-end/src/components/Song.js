import { Link } from "react-router-dom"

function Song( { song }) {
  return (
      <tr>
          <td>
              {song.is_favorite ? (
                  <span>♥</span>
              ) : (
                  <span>&nbsp; &nbsp; &nbsp;</span>
              )}
          </td>
          <td>
              <h4>{song.name}</h4>
          </td>
          <td>
              <Link to={`/songs/${song.id}`}>○○○</Link>
          </td>
      </tr>
  );
}

export default Song;
