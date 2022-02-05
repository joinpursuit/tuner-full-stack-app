import Songs from "../Components/Song";

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