import React from 'react'
import { Link } from 'react-router-dom'
function Song({ song }) {
  return (
    <div>
      <h3>{ song.name}</h3>
      <h4>by { song.artist}</h4>
      <p>{ song.time }</p>
      <Link to={`/songs/${song.id}`}>See More Details</Link>
    </div>
  )
}

export default Song