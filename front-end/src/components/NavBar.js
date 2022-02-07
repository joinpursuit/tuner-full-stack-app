import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <div className="Navbar">
        <button><Link to="/"><h1>Tuner Navbar</h1></Link></button>
        <button><h1><Link to="/songs">Songs</Link></h1></button>
        <button><h1><Link to="/songs/new">New Song</Link></h1></button>
      </div>
    );
  }
  
  export default NavBar;
  