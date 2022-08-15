import axios from "axios";
import React, { useEffect, useState } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function SongsIndex() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((response) => setSongs(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Song Title</th>
              <th>Artist</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
                return <Song key={song.id} song={song} />
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default SongsIndex;
