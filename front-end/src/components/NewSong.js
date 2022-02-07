import axios from "axios";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const API = process.env.REACT_APP_API_URL;


function NewSong() {
  let navigate = useNavigate();

  const[song, setSong] = useState({
      name: "",
      artist: "",
      album: "",
      time: "",
      is_favorite: false
  });
  const addSong = ()=>{
    axios.post(`${API}/songs`, song)
    .then((res)=>{
      navigate("/songs")
    }).catch((err)=>{
      navigate("*")
    });
  }
  const handleInputChange = (event)=>{
    setSong({...song, [event.target.id]: event.target.value});
  };
  const handleCheckboxChange = () =>{
    setSong({...song, is_favorite: !song.is_favorite});
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    addSong(song);
  }
    return (
      <div className="">
        <h1>Add New Song</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Song Name</label>
          <input
            id="name"
            value={song.name}
            type="text"
            onChange={handleInputChange}
            placeholder="Song Name"
            required
           />
          <label htmlFor="artist">Artist</label>
          <input
            id="artist"
            value={song.artist}
            type="text"
            onChange={handleInputChange}
            placeholder="Artist"
            required
           />
          <label htmlFor="album">Album</label>
          <input
            id="album"
            value={song.album}
            type="text"
            onChange={handleInputChange}
            placeholder="Album"
            required
           />
          <label htmlFor="time">Time</label>
          <input
            id="time"
            value={song.time}
            type="text"
            onChange={handleInputChange}
            placeholder="Time"
            required
           />
          <label htmlFor="is_favorite">Favorite Song?</label>
          <input
            id="is_favorite"
            value={song.is_favorite}
            type="checkbox"
            onChange={handleCheckboxChange}
           />
           <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default NewSong;
  