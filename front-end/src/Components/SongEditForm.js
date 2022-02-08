import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const API_URL = process.env.REACT_APP_API_URL;

function SongEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const updateSong = (updatedSong) => {
    axios.put(`${API_URL}/songs/${id}`, updatedSong)
      .then(() => {
        navigate(`/songs/${id}`);
      }).catch((err) => {
        console.log(err);
      });
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API_URL}/songs/${id}`)
    .then(
      (res) => setSong(res.data),
      (err) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          className="form-control"
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          className="form-control"
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Artist Name"
          required
        />
        <label htmlFor="album">Album</label>
        <input
          className="form-control"
          id="album"
          value={song.album}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Album"
          required
        />
        <label htmlFor="time">Time:</label>
        <input
          className="form-control"
          id="time"
          type="text"
          name="time"
          value={song.time}
          placeholder="0:00"
          onChange={handleTextChange}
        />
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
      <Link to={`/songs/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default SongEditForm;
