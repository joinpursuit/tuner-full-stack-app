import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function EditTrack() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [song, setSongs] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(
        () => {
          setSongs(updatedSong)
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSongs({ ...song, [event.target.id]: event.target.value });
  };

  const handleFavoriteChange = () => {
    setSongs({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Track"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          placeholder="Artist's Name"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="Album Name"
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          name="duration"
          value={song.time}
          placeholder="Duration"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleFavoriteChange}
          checked={song.is_favorite}
        />
        <input type="submit" />
        <br />
      </form>
      <Link to={`/songs`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default EditTrack;
