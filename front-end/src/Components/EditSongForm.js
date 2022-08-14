import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


function EditSongForm() {
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
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(
        () => {
          navigate(`/songs/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((err) => console.log.warn("catch", err));
  };
  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };
  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${id}`)
    .then((response) => 
      setSong(response.data), (error) => navigate(`/not-found`)
    )
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song);
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
          placeholder="Song name"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          value={song.artist}
          placeholder="name of artist"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="name of album"
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

export default EditSongForm;
