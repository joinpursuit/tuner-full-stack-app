import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Reviews from "./Reviews";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
    const [song, setSong] = useState({});
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then((res) => setSong(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    const handleDelete = () => {
        axios.delete(`${API}/songs/${id}`)
            .then((res) => navigate(`/songs`))
            .catch((err) => console.log(err));
    };

  return (
    <article>
        <h3>{true ? <span>⭐️</span> : null} {song.name}</h3>
        <h5>
            <span>
            <div>{song.name}</div>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {song.artist}
        </h5>
        <h6>{song.album}</h6>
        <p>{song.time}</p>
        <div className="showNavigation">
            <div>
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
      <Reviews />
    </article>
  );
}

export default SongDetails;
