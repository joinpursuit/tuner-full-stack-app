import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function SongEditForm() {
    let { id } = useParams();
  
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });
  
    const navigate = useNavigate();
  
    const handleTextChange = (event) => {
      setSong({ ...song, [event.target.id]: event.target.value });
    };
  
    const handleCheckboxChange = () => {
      setSong({ ...song, is_favorite: !song.is_favorite });
    };
  
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/songs/${id}`)
        .then((res)=>{
          setSong(res.data);
        }).catch((err)=>{
          navigate("/not-found");
        })
    }, []);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.put(`${process.env.REACT_APP_API_URL}/songs/${id}`, song)
        .then((res)=>{
          navigate(`/songs/${id}`);
        }).catch((err)=>{
          console.log(err)
        })
    };
    return (
      <div className="Edit">
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Song Name</label>
            <input
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Song"
            />
           <label htmlFor="artist">Artist:</label>
            <input
            id="artist"
            type="text"
            name="artist"
            value={song.artist}
            placeholder="Name of Artist"
            onChange={handleTextChange}
            />
            <label htmlFor="album">Album:</label>
            <textarea
            id="album"
            type="text"
            value={song.album}
            placeholder="Name of Album"
            onChange={handleTextChange}
            />
            <label htmlFor="is_favorite">Favorite:</label>
            <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
            />
            <label htmlFor="time">Time:</label>
            <input
            id="time"
            value={song.time}
            type="text"
            onChange={handleTextChange}
            placeholder="Time"
            />
            <br />
          <input type="submit" />
        </form>
        <Link to={`/songs/${id}`}>
          <button>Back</button>
        </Link>
      </div>
    );
  }
  
  export default SongEditForm;