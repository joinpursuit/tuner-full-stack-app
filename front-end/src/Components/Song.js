import { Link } from "react-router-dom"

export default function Song({song}) {
  return (
    <div className="Song">
      <div>
        <Link to={`/songs/${song.id}`}><td><h1>{song.name}</h1></td></Link>
        {song.is_favorite ? (
          <td>⭐️</td>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      <td>By: {song.artist}</td>
      <td>From album: {song.album}</td>
      <td>Run time: {song.time}</td>
      </div>
    </div>
  )
}
