import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const NewSongForm = () => {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const navigate = useNavigate();

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(() => navigate("/songs"))
      .catch((err) => console.error(err));
  };

  const handleInput = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleCheckbox = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(song);
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Song Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleInput}
          required
        />
        <br />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleInput}
          required
        />
        <br />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleInput}
        />
        <br />
        <label htmlFor="time">Time:</label>
        <input 
            id="time" 
            value={song.time} 
            type="text" 
            onChange={handleInput} />
        <br />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          value={song.is_favorite}
          type="checkbox"
          onChange={handleCheckbox}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewSongForm;
