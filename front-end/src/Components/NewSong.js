import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/new.css"

const API = process.env.REACT_APP_API_URL;

function NewSong() {
    const navigate = useNavigate();
    
    const createSong = (newSong) => {
        axios
        .post(`${API}/songs`, newSong)
        .then(() => {
            navigate(`/songs`);
        },
        (err) => console.error(err)
        )
        .catch((c) => console.warn("catch", c));
    };
    
    const [newSong, setNewSong] = useState({
      name: "",
      artist: "",
      album: "",
      time: "",
      is_favorite: false,
    });
    const handleTextChange = (e) => {
        setNewSong({ ...newSong, [e.target.id]: e.target.value });
    };
    
    const handleCheckBox = () => {
        setNewSong({ ...newSong, is_favorite: !newSong.is_favorite });
    };
    
    
  const handleSubmit = (e) => {
    e.preventDefault();
    createSong(newSong);
  };

  return (
    <div className="new">
      <form onSubmit={handleSubmit}>
        <h3>Create New Chune Below</h3>
        <fieldset>
          <label htmlFor="name">Song Name</label>
          <br />
          <input
            id="name"
            value={newSong.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name"
            required
          />
          <br />
          <label htmlFor="is_favorite">Favorite:</label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckBox}
            checked={newSong.is_favorite}
          />
          <br />
          <label htmlFor="artist">Artist</label>
          <br />
          <input
            id="artist"
            value={newSong.artist}
            type="text"
            onChange={handleTextChange}
            placeholder="Artist"
            required
          />
          <br />
          <label htmlFor="name">Album</label>
          <br />
          <input
            id="album"
            value={newSong.album}
            type="text"
            onChange={handleTextChange}
            placeholder="Album"
            required
          />
          <br />
          <label htmlFor="time">Runtime</label>
          <br />
          <input
            id="time"
            value={newSong.time}
            type="text"
            onChange={handleTextChange}
            placeholder="Time"
            required
          />
          <br />
          <br />
          <input type="submit" value="Submit New Chune" />
        </fieldset>
      </form>
    </div>
  );
}

export default NewSong;
