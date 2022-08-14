import { useState, useEffect } from "react";
import Song from "./Song";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    axios.get(`${API}/songs`)
      .then((response) => {
        setSongs(response.data)
      })
      
      .catch((error) => { console.error(error) })
  },[])
  

  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this song</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} id={song.id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;