import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h1>
        <Link to="/songs">Songs</Link>
      </h1>
      <h2>Tuner</h2>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
