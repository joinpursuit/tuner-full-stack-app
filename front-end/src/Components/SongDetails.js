import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Song from "./Song";

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
                .catch((error) => navigate(`/404`));
        },
        [id]
    );
    const handleDelete = () => {
        axios
            .delete(`${API}/songs/${id}`)
            .then((response) => navigate(`/songs`))
            .catch((error) => console.error(error));
    };
    return (
        <article>
            <h3>
                {song.isFavorite ? <span>🎧</span> : null} {song.name}
            </h3>
            <h5>
                <span>
                    {song.name}
                </span>
               
                
            </h5>
            <h6>{song.artist}</h6>
            <p>{song.album}</p>
            <p>{song.time }</p>
            <div className="showNavigate">
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
        </article>
    );
}

export default SongDetails;