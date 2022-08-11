import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const SongDetails = () => {
    const [song, setSong] = useState({});
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
        .then(res => setSong(res.data))
        .catch(err => console.error(err))
    }, [id]);

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
        <div className="Song-Details" >
            <p>{song.name}</p>
            <p>{song.artist}</p>
            <p>{song.album}</p>
            <p>{song.time}</p>
            <p>{song.is_favorite ? '⭐️' : null}</p>
            <Link to={'/songs'}>
                <button>Back</button>
            </Link>
            <Link Link to={`/songs/${id}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
       
        </div>
    );
};

export default SongDetails;