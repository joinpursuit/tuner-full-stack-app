import React from 'react'
import {Link} from 'react-router-dom'

function Song({song}) {

  return (
    <div>
    <header>Tuner</header>
    <h3>{song.is_favorite ? <span>🔥 </span> : null} {song.name}</h3>
        <h4>{song.name}</h4>
        <p>{song.artist}</p>
        <p>{song.time}</p>
        <p>{song.album}</p>
        <Link to={`/songs/${song.id}`}>See More Details...</Link>

    </div>
  )
}

export default Song