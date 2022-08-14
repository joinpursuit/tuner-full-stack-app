import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='NavBar'>
      <nav>
        <Link to='/'><h1>Tuner App</h1></Link>
        <div className='right'>
          <button className='songButton'><Link to='/songs'>Songs</Link></button>
        <button className='newButton'><Link to='/songs/new'>New Song</Link> </button>
        </div>
        
      </nav>
    </div>
  )
}
