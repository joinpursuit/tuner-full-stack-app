import { useState } from "react";
import { useNavigate } from "react-router-dom";


const NewTrack = () => {
    const [time, setTime] = useState(0);
    const [name, setName] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [is_favorite, setFavorite] = useState(false)
    
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
    const API = process.env.REACT_APP_API_URL;
    
    event.preventDefault();
    
    const newSongRoute = `${API}/songs/new`;

    fetch(newSongRoute, {
      method: "POST",
      body: JSON.stringify({ name, artist, album, time, is_favorite }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/songs");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a New Entry</h1>
      <label>Track Name:</label>
      <input
        type="text"
        name="artist-name"
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="newArtist"
      />
      <label>Artist's Name:</label>
      <input
        type="text"
        name="artist-name"
        onChange={(event) => {
          setArtist(event.target.value);
        }}
        id="artist"
      />
      <label>Album Name:</label>
      <input
        type="text"
        name="album-name"
        onChange={(event) => {
          setAlbum(event.target.value);
        }}
        id="newAlbum"
      />
      <label>Time:</label>
      <input
        type="number"
        name="time"
        onChange={(event) => {
          setTime(event.target.value);
        }}
        id="duration"
      />
      <label>Favorite?:</label>
      <input
        type="text"
        name="transaction-amount"
        onChange={(event) => {
          setFavorite(!is_favorite);
        }}
        id="favorite"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NewTrack;
