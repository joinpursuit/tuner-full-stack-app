import { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
  let { id } = useParams();

  const navigate = useNavigate;

  const [song, setSong] = useState({
    name: "",
    artist: "",
    time: "",
    is_favorite: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => setSong(res.data))
      .catch((error) => console.error(error));
  }, [id]);

//   SUBMIT HAS AN ERROR --------------------
  const editSong = () => {
    axios
      .put(`${API}/songs/${id}`, song)
      .then((res) => {
        setSong(res.data);
        navigate(`/songs/${id}`);
      })
      .catch((error) => console.error(error));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

//   const handleNumberChange = (event) => {
//     setSong({
//       ...song,
//       [event.target.id]: Number(event.target.value),
//     });
//   };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    editSong();
  };

  return (
    <div className="edit">
    <fieldset>
      <h1>Edit Song</h1>
      <form onSubmit={handleSubmit}>
        <h3>Song Name</h3>
        <input
          id="name"
          value={song.name}
          type="text"
          placeholder="Song Name"
          onChange={handleTextChange}
        />
        <h3>Song Artist</h3>
        <input
          id="song-artist"
          value={song.artist}
          type="text"
          placeholder="Song Artist"
          onChange={handleTextChange}
        />
         <h3>Favorite</h3>
        <input
          id="favorite"
          value={song.is_favorite}
          type="bool"
          placeholder="Favorite"
          onChange={handleTextChange}
        />
        <h3>Song Time</h3>
        <input
          id="time"
          value={song.time}
          type="text"
          placeholder="Song Time"
          onChange={handleTextChange}
        />
       
        <br />
        <br />
        <input type="submit" EDIT SONG/>
      </form>
      <br></br>
      <Link to={`/songs/${id}`}>
        <button>BACK</button>
      </Link>
      </fieldset>
    </div>
  );
}

export default SongEditForm;
