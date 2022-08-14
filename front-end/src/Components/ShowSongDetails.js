import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import React from 'react'

function ShowSongDetails() {
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
    .catch((err) => console.error("catch", err));
};
const handleDelete = () => {
    deleteSong();
};

  return (
    <div>
        <article>
            <h3>
                {song.is_favorite ? <span> 💖 </span> : null}
                {song.name}
            </h3>
            <h5>
                Artist Name: {song.artist}
            </h5>
            <h5>
                Album: {song.album}
            </h5>
            <h6>
                Play Time: {song.time}
            </h6>
            <div className="showNavigation">
                <div>
                    <Link to ={`/Songs`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div>
                    <Link to ={`/Songs/${id}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
            </div>
        </article>
    </div>
  )
}

export default ShowSongDetails;