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
    <article className="Song-Details">
        <h2>{true ? <span>⭐️</span> : null} {song.name} - By {song.artist}</h2>
        <h4>
            <span>
            <div>{song.album}</div>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {song.artist}
        </h4>
        <p>Time: {song.time}</p>
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
