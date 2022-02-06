import Songs from "../Components/Songs";
import { Link } from "react-router-dom"

function Index() {
  return (
    <div className="Index">
      <h2>Index</h2>
      <button>
        <Link to="/songs/new">NEW SONG</Link>
      </button>
      <Songs />
    </div>
  );
}

export default Index;