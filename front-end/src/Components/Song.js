import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/song.css"
function Song({ song }) {
  return (
    <div className='song'>
       <Link to={`/songs/${song.id}`}><h3>{song.is_favorite ? <span>⭐️</span> : null} {song.name}</h3></Link>
       <Link to={`/songs/${song.id}`}><h4>by { song.artist}</h4></Link>
      <Link to={`/songs/${song.id}`}><p>{ song.time }</p></Link>
    </div>
  )
}

export default Song