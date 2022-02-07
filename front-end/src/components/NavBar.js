import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <section className="nav-bar">
      <button>
        <Link to="/songs">Tuner </Link>
      </button>
    </section>
  );
}

export default NavBar;
