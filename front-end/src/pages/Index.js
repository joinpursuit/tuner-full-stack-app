import Songs from "../components/Songs";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div>
      <section>
        <h2>Index</h2>
        <button>
          <Link to="/songs/new">New Song</Link>
        </button>
      </section>
      <Songs />
    </div>
  );
}

export default Index;
