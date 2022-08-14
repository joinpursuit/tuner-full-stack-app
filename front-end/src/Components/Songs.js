import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios.get(`${API}/songs`)
      .then(response => setSongs(response.data))
      .catch(error => console.error(error))
  }, []);

  return (
    <div className='show-all-songs'>
      {songs.map(song => {
        return (
          <ul className='song-card' key={song.id} >
            <a href={`/songs/${song.id}`} >
              <li>{song.name} {song.is_favorite ? '★' : null}</li>
            </a>
            <li>{song.artist}</li>
            <li>{song.time}</li>
          </ul>
        )
      })}
    <button><Link to='/songs/new'><span>New Song Entry</span></Link></button>
    </div>
  )
}

export default Songs