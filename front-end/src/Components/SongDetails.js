import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState({});
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(
    () => {
      axios
        .get(`${API}/songs/${id}`)
        .then((response) => setSong(response.data))
        .catch((error) => console.log(error));
    },[id] );


  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then((response) => navigate(`/songs`))
      .catch((error) => console.error(error));
 };

 const handleDelete = () => {
    deleteSong();
  };

  return (
    <article>
      <h5> {song.name} </h5>
        <span>
        {song.artist}
        </span>
      <h6>{song.time}</h6>
      <p>{song.album}</p>
      <h3>
        {song.is_favorite ? <span>⭐️</span> : null} 
      </h3>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default SongDetails;