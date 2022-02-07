import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const API = process.env.REACT_APP_API_URL

function EditSong() {
  let { id } = useParams();
  let navigate = useNavigate();

  const[song, setSong] = useState({
      name: "",
      artist: "",
      album: "",
      time: "",
      is_favorite: false
  });

  useEffect(()=>{
    axios.get(`${API}/songs/${id}`)
    .then((res)=>{
        setSong(res.data)
    }).catch((err)=>{
        navigate("*")
    })
  }, [id,navigate]);

  const handleInputChange = (event)=>{
    setSong({...song, [event.target.id]: event.target.value});
  };
  const handleCheckboxChange = () =>{
    setSong({...song, is_favorite: !song.is_favorite});
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`${API}/songs/${id}`,song)
    .then((res)=>{
        navigate(`/songs/${id}`)
    }).catch((err)=>{
        navigate("*")
    })
};
    return (
      <div className="">
        <h1>Tuner EditSong</h1>
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
        <Link to={`/songs/${id}`}><button>Cancel Edit</button></Link>

      </div>
    );
  }
  
  export default EditSong;
  