import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <div className="Navbar">
        <button><Link to="/"><h1>Tuner Navbar</h1></Link></button>
        <button><Link to="/songs"><h1>Songs</h1></Link></button>
        <button><Link to="/songs/new"><h1>New Song</h1></Link></button>
      </div>
    );
  }
  
  export default NavBar;
  