import {Link} from "react-router-dom";

function NavBar() {
    return (
      <nav>
        <button><Link to = "/">Home</Link></button>
        <button><Link to = "/songs">Show All Songs</Link></button>
        <button><Link to = "/songs/new">New Song</Link></button>
        <h1>Nav</h1>
      </nav>
    );
}

export default NavBar;