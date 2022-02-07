import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
        <button><Link to="/">Home</Link></button>
        <h1>
            <Link to="/songs">Songs</Link>
        </h1>
        <button>
            <Link to="/songs/new">New Song</Link>
        </button>
    </nav>
  )
}

export default NavBar;