import { useState, useEffect } from "react";
import Song from "./Song.js";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="songs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Time</th>
              <th>⭐️</th>
            </tr>
          </thead>
          <tbody>
          
            {songs.map((song) => {
              return <Song key={song.id} song={song}   />;
            })        
            }
        
          </tbody>
        </table>
      </section>
    </div>
  );
}