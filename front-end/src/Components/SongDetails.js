import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => {
        setSong(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then((res) => {
        // navigate("/songs/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <article className="Song-Details">
      <h3>
        {song.is_favorite ? <span>⭐️</span> : null} {song.name} - By{" "}
        {song.artist}
        <a href={song.url} target="_blank" rel="noreferrer">
          {song.name}
        </a>
      </h3>
      <h5>{song.album}</h5>
      <h5>Time:{song.time}</h5>
      <div>
        <button>
          <Link to="/songs">Back</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to={`/songs/${song.id}/edit`}>Edit</Link>
        </button>
      </div>
      <div>
        <button onClick={handleDelete}>
          <Link to="/songs">Delete</Link>
        </button>
      </div>
    </article>
  );
}

export default SongDetails;

// <button>
// <Link to="/songs/new">New Song</Link>
// </button>
