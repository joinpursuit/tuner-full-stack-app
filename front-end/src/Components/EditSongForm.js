import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const EditSongForm = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });

    const updateSong = (updatedSong, id) => {
        axios.put(`${API}/songs/${id}`, updatedSong)
        .then(() => navigate(`/songs/${id}`))
        .catch((err) => console.error(err));
    };

    const handleInput = (e) => {
        setSong({...song, [e.target.id]: e.target.value})
    };

    const handleCheckbox = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
      };

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
        .then(res => setSong(res.data))
        .catch(err => console.error(err))
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateSong(song, id)
    }

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleInput}
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          onChange={handleInput}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          value={song.album}
          onChange={handleInput}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          value={song.time}
          onChange={handleInput}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckbox}
          checked={song.is_favorite}
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/songs/${id}`}>
        <button>Back</button>
      </Link>
        </div>
    );
};

export default EditSongForm;