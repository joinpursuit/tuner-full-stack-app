import React from 'react'
import { Link } from "react-router-dom"
function Nav() {
  return (
    <div>
        <Link to="/">Chuner</Link>
        <Link to="/songs">Chunes</Link>
    </div>
  )
}

export default Nav