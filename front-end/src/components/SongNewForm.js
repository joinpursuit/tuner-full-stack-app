import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


// CREATE TABLE songs (
//     id SERIAL PRIMARY KEY,
//     name TEXT,
//     artist TEXT,
//     album TEXT,
//     time TEXT,
//     is_favorite BOOLEAN
// )
function SongNewForm() {
    let navigate = useNavigate();

    const [ song, setSong ] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false
    });

    const addSong = (newSong) => {
        axios.post(`${API}/songs`, newSong)
        .then(
            () => {
                navigate(`/songs`);
            },
            (err) => console.error(err)
        )
        .catch((c) => console.warn("catch", c));
    };

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value})
    };
 
    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSong(song);
    }

  return (
      <div className="New"> 
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                value={song.name}
                type="text"
                onChange={handleTextChange}
                placeholder="song name"
                required
            />
            <label htmlFor="artist">Artist:</label>
            <input
                id="artist"
                type="text"
                value={song.artist}
                onChange={handleTextChange}
                placeholder="artist name"
                required
            />
            <label htmlFor="album">Album:</label>
            <input
                id="album"
                type="text"
                value={song.album}
                placeholder="album name"
                required
                onChange={handleTextChange}
            />
            <label htmlFor="time">Duration:</label>
            <input
                id="time"
                type="text"
                value={song.time}
                placeholder="song duration"
                required
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
      </div>
  )
}

export default SongNewForm;
