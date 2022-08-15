import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/edit.css"

const API = process.env.REACT_APP_API_URL;

function EditSong() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => setSong(res.data))
      .catch((err) => console.error(err));
  }, [id, navigate]);

  const handleTextChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleCheckBox = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };
  const updateSong = (updatedSong) => {
    console.log(updatedSong);
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(
        () => {
          console.log("hello!");
          navigate(`/songs/${id}`);
        },
        (error) => console.error(error, "!!!")
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong(song);
  };

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label for="name">Song Name</label>
          <br />
          <input
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name"
            required
          />
          <br />
          <label for="is_favorite">Favorite:</label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckBox}
            checked={song.is_favorite}
          />
          <br />
          <label for="artist">Artist</label>
          <br />
          <input
            id="artist"
            value={song.artist}
            type="text"
            onChange={handleTextChange}
            placeholder="Artist"
            required
          />
          <br />
          <label for="album">Album</label>
          <br />
          <input
            id="album"
            value={song.album}
            type="text"
            onChange={handleTextChange}
            placeholder="Album"
            required
          />
          <br />
          <br />
          <Link to={`/songs/${id}`}>
            <button>Nevermind!</button>
          </Link>
          <input type="submit" value="Submit Edit" />
        </fieldset>
      </form>
    </div>
  );
}

export default EditSong;
