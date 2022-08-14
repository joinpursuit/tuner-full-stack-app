import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
    let { id } = useParams();
    const navigate = useNavigate();

    const [song, setSong] = useState({
        name: "",
       artist: "",
        album: "",
        isFavorite: "",
        time: false,
    });
    
    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setSong({ ...song, isFavorite: !song.isFavorite });
    };
    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then(response => setSong(response.data))
            .catch(error => console.error(error))
    }, []);

    const updateSong = () => {
        axios.put(`${API}/songs/${id}`, song)
            .then(response => {
                setSong(response.data)
                navigate(`/songs/${id}`)
            })
        .catch(error => console.error(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSong();
    };
    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    value={song.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Pick your song!"
                    required
                />
                <label htmlFor="artist">ARTIST:</label>
                <input
                    id="artist"
                    type="text"
                    required
                    value={song.artist}
                    onChange={handleTextChange}
                />
                <lable htmlFor="album">Album:</lable>
                <input
                    id="album"
                    type="text"
                    name="album"
                    value={song.album}
                    placeholder="fun, dance, ..."
                    onChange={handleTextChange}
                />
                <label htmlFor="isFavorite">Favorite:</label>
                <input
                    id="isFavorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={song.isFavorite}
                />
                <label htmlFor="time">Time:</label>
                <textarea
                    id="time"
                    name="time"
                    value={song.time}
                    onChange={handleTextChange}
                />
                <br />

                <input type="submit" />
            </form>
            <Link to={`/songs/${id}`}>
                <button>Submit</button>
            </Link>
        </div>
    );
}

export default SongEditForm;