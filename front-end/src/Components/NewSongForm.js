import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
          type="text"
          id="name"
          value={song.name}
          onChange={handleInput}
          required
        />
        <br />
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          value={song.artist}
          onChange={handleInput}
          required
        />
        <br />
        <label htmlFor="album">Album:</label>
        <input
          type="text"
          id="album"
          value={song.album}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="time">Time:</label>
        <input type="text" id="time" value={song.time} onChange={handleInput} />
        <br />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          type="checkbox"
          id="is_favorite"
          value={song.is_favorite}
          onChange={handleCheckbox}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewSongForm;
