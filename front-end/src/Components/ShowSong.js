import React from 'react'
import {Link} from 'react-router-dom'

export default function ShowSong({song, index}) {
  return (
    <div>
      <Link to={`song/${index}`}>
        <h4>{song.name} {song.artist}</h4>
      </Link>
    </div>
  )
}
