import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
export default function SongDetails() {
    const [song, setSong] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then((response) => {
                setSong(response.data)
            })
    }, [id, navigate, API]);

    const deleteSong = () => {
        axios.delete(`${API}/songs/${id}`)
          .then(() => {
            navigate(`/songs`);
          })
          .catch((c) => console.error("catch", c));
      };
      const handleDelete = () => {
        deleteSong();
      };

    return (
        <div className="Song-Details comp">
          
            <h1>Tuner</h1>
            <h3>Name: {song.name}</h3>
            <h3>Artist:{song.artist}</h3>
            <h3>Album: {song.album}</h3>
            <h3>Favorite: {song.is_favorite? <span className="glow">⭐️</span> : null}</h3>
            <h3>Time: {song.time}</h3>
            <Link to={`/songs`}>
              <button>Back</button>
            </Link>
            <Link to={`/songs/${id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

