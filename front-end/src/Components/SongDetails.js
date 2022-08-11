import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


//changed id to index - ITS NOT WORKING YET. 

export default function SongDetails() {
    const [song, setSong] = useState({});
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(
        () => {
          axios.get(`${API}/songs/${id}`)
            .then((response) => setSong(response.data))
            .catch((error) => navigate(`/404`));
        }, [id, navigate, API]);

    const handleDelete = () => {
            axios.delete(`${API}/songs/${id}`)
              .then((response) => navigate(`/songs`))
              .catch((error) => console.error(error));
          };

  return (
    <article>
    <strong>Name:</strong> {song.name}
      <br/><br/>
   <strong>Artist:</strong> {song.artist}
    <br/><br/>
    <strong>Album:</strong> {song.album}
    <br/><br/>
    <strong>Is Favorite:</strong>  {song.is_favorite ? <span>⭐️</span> : "Nope"}
    <br/><br/>
    <strong>Time:</strong> {song.time}
    <br/><br/>

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
  )
}