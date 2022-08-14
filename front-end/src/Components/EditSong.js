import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;

export default function EditSong() {

  let { id } = useParams();
  const navigate = useNavigate();

  const [songs, setSongs] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false,
  });

  useEffect(() => {
    axios.get(`${API}/songs/${id}`)
      .then(response => setSongs(response.data))
      .catch(error => console.error(error))
  }, [id]);

  const handleTextChange = (event) => {
    setSongs({ ...songs, [event.target.id]: event.target.value })
  };

  const handleCheckboxChange = () => {
    setSongs({ ...songs, is_favorite: !songs.is_favorite });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong();
  };

  const updateSong = () => {
    axios.put(`${API}/songs/${id}`, songs)
      .then(response => {
        setSongs(response.data)
        navigate(`/songs/${id}`)
      })
      .catch(error => console.error(error))
  };

  return (
    <div className="EditSong">

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
        <input className="backButton" type='submit' />
      </form>

      <Link to={`/songs/${id}`}>
        <button className="backButton">Back</button>
      </Link>

    </div>
  )
}
