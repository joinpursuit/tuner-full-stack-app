import React from 'react'
import { Link } from "react-router-dom"
import "../styles/nav.css"
function Nav() {
  return (
    <div className='navbar'>
        <Link to="/">Tuner</Link>
        <Link to="/songs">Tunes</Link>
        <Link to="/songs/new">New Tune</Link>
    </div>
  )
}

export default Nav
