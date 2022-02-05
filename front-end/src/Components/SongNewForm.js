import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
    let navigate = useNavigate();

    const addSong = (newSong) => {
        axios.post(`${API}/songs`, newSong)
        .then(()=>{
            navigate("/songs")
        }).catch((err)=>{
            console.log(err)
        })
    }

    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSong(song);
    };


  return (
      <div className="newForm">
          <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input 
              id="name"
              value={song.name}
              type="text"
              onChange={handleTextChange}
              placeholder="Name of song"
              required
              />
              <label htmlFor="artist">Artist:</label>
              <input
              id="artist"
              value={song.artist} 
              type="text" 
              onChange={handleTextChange}
              placeholder="Name of Artist"
              required
              />
              <label htmlFor="album">Album:</label>
              <input 
              id="album"
              value={song.album}
              type="text" 
              onChange={handleTextChange}
              placeholder="Name of Album"
              />
              <label htmlFor="time">Time:</label>
              <input 
              id="time"
              value={song.time}
              type="text" 
              onChange={handleTextChange}
              placeholder="Length of song"
              />
              <label htmlFor="is_favorite">Favorite:</label>
              <input 
              id="is_favorite"
              type="checkbox" 
              onChange={handleCheckboxChange}
              />

              <br />
              <input type="submit" />
          </form>
      </div>
  )
}

export default SongNewForm;
