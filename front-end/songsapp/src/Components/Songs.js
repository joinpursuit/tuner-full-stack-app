import React from "react";
import Song from "./Song";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((res) => setSongs(res.data))
      // console.log(res.data)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <section>
        {songs.map((song, index) => {
          return <Song />;
        })}
      </section>
    </div>
  );
}

export default Songs;
