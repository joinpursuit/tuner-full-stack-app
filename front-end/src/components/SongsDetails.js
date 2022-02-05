import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SongDetails.css";
const API = process.env.REACT_APP_API_URL;

function SongDetails() {
  const [song, setSong] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => setSong(res.data))
      .catch((e) => console.log(e));
  }, [id]);
  return (
    <section className="song-details">
      <h3>
        {song.is_favorite ? <span>⭐️</span> : ""} {song.name} - By{" "}
        {song.artist}
      </h3>
      <h4>{song.album}</h4>
      <div>{song.time}</div>
    </section>
  );
}

export default SongDetails;
