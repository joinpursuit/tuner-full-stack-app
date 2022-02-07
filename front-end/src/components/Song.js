import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Song() {
  const[song, setSong] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    axios.get(`${API}/songs/${id}`)
    .then((res)=>{
      setSong(res.data)
    }).catch((err)=>{
      navigate("*")
    })
  }, [id, navigate]);

  const handleDelete =()=>{
    axios.delete(`${API}/songs/${id}`)
    .then((res)=>{
      navigate("/songs")
    }).catch((err)=>{
      console.log(err);
    })
  }
    return (
      <div className="Song-Details">
        <h1>Tuner Song</h1>
        <h3>{song.is_favorite ? <span>⭐️</span> : null} {song.name}</h3>
        <h3>{song.artist}</h3>
        <h3>{song.album}</h3>
        <h3>{song.time}</h3>
        <div>
          <Link to={`/songs`}><button>Back</button></Link>
          <Link to={`/songs/${song.id}/edit`}><button>Edit</button></Link>
          <button onClick={handleDelete}>Delete Song</button>
        </div>
      </div>
    );
  }
  
  export default Song;
  