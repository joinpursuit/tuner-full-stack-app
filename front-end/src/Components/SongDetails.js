import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


function SongDetails() {
  const [song, setSong] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then((response) => {
      setSong(response.data);
    });
  }, [id, navigate, API]);
  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deleteSong();
  };
  return (
    <>
      <article className="Song-Details">
        <h3>
          {song.is_favorite ? <span>⭐️</span> : null}
        </h3>
        <h4>{song.name}</h4>
        <h5>Artist: {song.artist}</h5>
        <h5>Album: {song.album}</h5>
        <h5>Time: {song.time}</h5>
        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/songs`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/songs/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    
    </>
  );
}

export default SongDetails;
