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
      <h2>Tuner</h2>
      <h3>{song.is_favorite ? <span>⭐️</span> : null } {song.name}</h3>
      <h4>{song.artist}</h4>
      <h6>{song.time}</h6>
    </div>
  )
}
