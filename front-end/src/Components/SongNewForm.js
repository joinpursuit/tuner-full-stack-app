import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SongNewForm() {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    Is_favorite: false,
  });
  const navigate = useNavigate();

  const addSong = () => {
    axios
      .post(`${API}/songs`, song)
      .then((res) => {
        navigate(`/songs`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong();
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <br />
        <label>Artist:</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Artist Name"
          required
        />
        <br />
        <label>Album:</label>
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleTextChange}
          placeholder="Album Name"
          required
        />
        <br />
        <label>Time:</label>
        <input
          id="time"
          value={song.time}
          type="text"
          onChange={handleTextChange}
          placeholder="Time"
          required
        />
        <br />

        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
