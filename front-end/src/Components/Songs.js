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
      <table className="Songs">
        <caption><h1>All Songs </h1></caption>
        <thead>
        <tr>
          <th scope="col">Fav</th>
          <th scope="col">Song</th>
          <th scope="col">Artist</th>
          <th scope="col">Time</th>
        </tr>
        </thead>
        <tbody>
        {songs.map(song => {
          return (
            <>
              <tr className='Song' key={song.id}>
                <td className="td">{song.is_favorite ? '⭐️' : null}</td>
                <td className="td">
                  <a href={`/songs/${song.id}`}>{song.name}</a>
              </td>
                <td className="td">{song.artist}</td>
                <td className="td">{song.time}</td>
              </tr>
            </>
          )
        })}
        </tbody>
      </table>
      <button className='new-song'><span><Link to='/songs/new'>New Song</Link></span></button>
    </div>
  )
}

export default Songs