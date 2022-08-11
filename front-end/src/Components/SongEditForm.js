

import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function SongEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => setSong(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const updatedSong = () => {
    axios
      .put(`${API}/songs/${id}`, song)
      .then((response) => {
        setSong(response.data);
        navigate(`/songs/${id}`);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatedSong();
  };

  return (
    <div className="Edit">
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