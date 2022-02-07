import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
    const [ song, setSong ] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then((res) => {
                setSong(res.data);
            }).catch((err) => console.log(err))
    }, [id])

    const handleDelete = () => {
        axios.delete(`${API}/songs/${id}`)
        .then((res) => {
            navigate("/songs")
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <article>
        <h3>{song.is_favorite ? <span>♥</span> : null} {song.name}</h3>
        <h4>{song.artist}</h4>
        <h4>{song.album}</h4>
        <h4>{song.time}</h4>
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
    </article>
  );
}

export default SongDetails;