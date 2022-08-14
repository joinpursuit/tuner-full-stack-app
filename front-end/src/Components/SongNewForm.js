import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL

function SongNewForm() {
  const [song, setSong] = useState({
    name: "",
    url: "",
    category: "",
    isFavorite: false,
    description: "",
  });
  const navigate = useNavigate();

  const addSong = (newSong) => {
    axios.post(`${API}/songs`, newSong)
      .then(response => navigate(`/songs`)) 
      .catch(error => console.error(error)) 
  };
  
  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, isFavorite: !song.isFavorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Pick a song"
          required
        />
        <label htmlFor="artist">ARTIST:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="category"
          value={song.album}
          placeholder="fun, dance, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.isFavorite}
        />
        <label htmlFor="time">Time:</label>
        <textarea
          id="time"
          name="time"
          value={song.time}
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SongNewForm;