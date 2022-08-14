import React from 'react'

import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    is_favorite: false,
    time: "",
  });
  const navigate = useNavigate();
  

  const newSong = () => {
    axios
      .post(`${API}/songs`, song)
      .then((res) => {
        setSong(res.data)
        navigate(`/songs`);
      })
      .catch((error) => console.error(error));
  };

  const handleTextChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleCheckbox = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    newSong();
  };

  return (
    <div className="new">
      <fieldset>
        <form onSubmit={handleSubmit}>
          <h1>Add A Song</h1>
          <br></br>
          <h3>Favorite</h3>
          <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckbox}
          checked={song.is_favorite}
           />
          <br></br>
          <h3>Name</h3>
          <input
            id="name"
            value={song.name}
            type="text"
            placeholder="Name"
            onChange={handleTextChange}
          />
          <br></br>
          <h3>Artist</h3>
          <input
            id="artist"
            value={song.artist}
            type="text"
            placeholder="Artist"
            onChange={handleTextChange}
          />
          <br></br>
          <h3>Album</h3>
          <input
            id="album"
            value={song.album}
            type="text"
            placeholder="Album"
            onChange={handleTextChange}
          />
          <br></br>
          
          <h3>Time</h3>
          <input
            id="time"
            value={song.time}
            type="text"
            placeholder="Time"
            onChange={handleTextChange}
          />
          <br></br>
          <br></br>
          <input type="submit" CREATE NEW SONG />
        </form>
      </fieldset>
    </div>
  );
}

export default SongNewForm;
