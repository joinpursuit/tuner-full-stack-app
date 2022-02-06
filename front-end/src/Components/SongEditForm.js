import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL


function SongEditForm() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [song, SetSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false
    })

    useEffect(()=>{
        axios.get(`${API}/songs/${id}`)
        .then((res)=>{
            SetSong(res.data)
        }).catch(()=>{
            navigate("/not-found")
        })
    }, [])

    const handleTextChange = (event) => {
        SetSong({...song, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        SetSong({...song, is_favorite: !song.is_favorite});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${API}/songs/${id}`, song)
        .then(()=>{
            navigate(`/songs/${id}`)
        }).catch((err)=>{
            console.log(err)
        })

    }


  return (
      <div className="Edit">
          <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input 
              id="name"
              value={song.name}
              type="text" 
              onChange={handleTextChange}
              placeholder="Name of Song"
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
              <label htmlFor="time">Time:</label>
              <input 
              id="time"
              value={song.time}
              type="text"
              onChange={handleTextChange}
              placeholder="Length of Song"
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
            <button>Cancel</button>
          </Link>

      </div>
  )
}

export default SongEditForm;
