import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import './songs.css'

function Songs() {
  const [songs, setSongs] = useState([]);


  useEffect(() => {
    const API = process.env.REACT_APP_API_URL;
    axios
      .get(`${API}/songs`)
      .then((response) => {
        setSongs(response.data.payload);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(songs);

const handleDelete = (event) => {
    event.preventDefault();
    //goes to backend to delete 
    const { id } = event.target
    console.log('HandleDelete:', id)
    const API = process.env.REACT_APP_API_URL
    axios.delete(`${API}/songs/${id}`)
    .then((respone) => {
        setSongs(songs.filter((song) => {
            return song.id !== parseInt(id) 
        }))
    })
}
  return (
    <div className="songs-list">
      <h1>Welcome to the Song Index</h1>
      {songs.map((song, index) => {
        return (
          <div key={index}>
            <h2>{song.name}</h2>
            <h3>{song.artist}</h3>
            <h3>{song.album}</h3>
            <h4>{song.time}</h4>
            <h4>{song.is_favorite ? 'Yes' : 'No'}</h4>
            <Link className='track-link'to={`/songs/${song.id}`}>Track Details</Link>
            <br></br>
            <button id={song.id} onClick={handleDelete}>Delete Track</button>
          </div>
        );
      })}
      <br></br>
      <Link to='/new'>New Track</Link>
    </div>
  );
}

export default Songs;
