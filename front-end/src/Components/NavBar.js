import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='NavBar'>
      <nav>
        <Link to='/'><h1 className='tuner'>Tuner App</h1></Link>
        <button className='songButton'><Link to='/songs'><h1>Songs</h1></Link></button>
        <button className='newButton'><Link to='/songs/new'><h1>New Song</h1></Link> </button>
      </nav>
    </div>
  )
}
