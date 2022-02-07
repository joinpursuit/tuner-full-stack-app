import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
    let { id } = useParams();
    let navigate = useNavigate();
    
    const [ song, setSong ] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false
    }) 

    const updateSong = (updatedSong) => {
        axios
        .put(`${API}/songs/${id}`, updatedSong)
        .then(
            () => {
                navigate(`/songs/${id}`);
            },
            (error) => console.log(error)
        )
        .catch((c)=> console.warn("catch", c));
    }
    
    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
        .then((res) => setSong(res.data),
        (err) => navigate(`/not-found`)
        );
    }, [id])

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSong(song, id);
    };

    return (
        <div className="Edit"> 
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
              id="name"
              value={song.name}
              type="text"
              onChange={handleTextChange}
              placeholder="song name"
              required
          />
          <label htmlFor="artist">Artist:</label>
          <input
              id="artist"
              type="text"
              value={song.artist}
              onChange={handleTextChange}
              placeholder="artist name"
              required
          />
          <label htmlFor="album">Album:</label>
          <input
              id="album"
              type="text"
              value={song.album}
              placeholder="album name"
              required
              onChange={handleTextChange}
          />
          <label htmlFor="time">Duration:</label>
          <input
              id="time"
              type="text"
              value={song.time}
              placeholder="song duration"
              required
              onChange={handleTextChange}
          />
          <label htmlFor="is_favorite">Favorite:</label>
          <input
              id="is_favorite"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={song.is_favorite}
          />
          <br />
          <input type="submit" />
        </form>
        <Link to={`/songs/${id}`}>
            <button>Cancel</button>
        </Link>
    </div>
  );
}

export default SongEditForm;