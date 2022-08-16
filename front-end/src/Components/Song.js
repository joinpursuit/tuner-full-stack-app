import React from 'react'
import { Link } from "react-router-dom";
import SongDetails from './SongDetails';


export default function Song({ song }) {

  const { name, artist, album, time, is_favorite } = song

  return (
    <tr className="Song">
      <td>
        {song.is_favorite ? (
          <span className="glow">⭐️</span>
        ) : (
          null
        )}
      </td>
      <td><Link to={`/songs/${song.id}`}>{name}</Link></td>
      <td><Link to={`/songs/${song.id}`}>{artist}</Link></td>
      <td><Link to={`/songs/${song.id}`}>{time}</Link></td>
    </tr>
  )
}
