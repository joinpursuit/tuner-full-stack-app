import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const API = process.env.REACT_APP_API_URL;

export default function NewSong() {

  const navigate = useNavigate();

  const [songs, setSongs] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false,
  });

  const addSong = () => {
    axios.post(`${API}/songs`, songs)
      .then(response => navigate(`/songs`))
      .catch(error => console.error(error))
  };

  const handleTextChange = (event) => {
    setSongs({ ...songs, [event.target.id]: event.target.value })
  };

  const handleCheckboxChange = () => {
    setSongs({ ...songs, is_favorite: !songs.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong();
  };

  return (
    <div className="NewSong">

      <form onSubmit={handleSubmit}>

        <label htmlFor='name'>Song Name:</label>
        <input
          id="name"
          value={songs.name}
          type='text'
          onChange={handleTextChange}
          required
        />

        <label htmlFor='artist'>Artist:</label>
        <input
          id="artist"
          value={songs.artist}
          type='text'
          onChange={handleTextChange}
          required
        />

        <label htmlFor='album'>Album:</label>
        <input
          id="album"
          value={songs.album}
          type="text"
          onChange={handleTextChange}
        />

        <label htmlFor='time'>Time:</label>
        <input
          id="time"
          value={songs.time}
          type='text'
          onChange={handleTextChange}
          placeholder="0:00"
        />

        <label htmlFor="is_favorite">Favorite</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={songs.is_favorite}
        />

        <br />
        <input type='submit' />
      </form>

    </div>
  )
}
