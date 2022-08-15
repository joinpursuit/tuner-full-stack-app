import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function SongDetails() {
  const [song, setSong] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${API}/songs/${id}`)
    .then((response) => setSong(response.data))
    .catch(error => console.log(error))
  }, [id])

  return (
    <div class="Song-Details">
      <h1>Tuner</h1>
      <h2 class="Song-Details">{song.is_favorite ? <span>⭐️</span> : null } {song.name}</h2>
      {/* <h2 class="Song-Details">{song.name}</h2> */}
      <p class="Song-Details">{song.artist}</p>
      <p class="Song-Details">{song.time}</p>
    </div>
  )
}
