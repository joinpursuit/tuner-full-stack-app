import React from 'react'
import {Link} from 'react-router-dom'

function Song({song}) {

  return (
    <div>
        <h3>{song.name}</h3>
        <p>{song.artist}</p>
        <p>{song.time}</p>
        <p>{song.is_favorite}</p>
        <Link to={`/songs/${song.id}`}>See More Details...</Link>

    </div>
  )
}

export default Song