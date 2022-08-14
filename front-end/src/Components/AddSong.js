import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function AddSong() {
    let navigate = useNavigate();

    const addSong = (song) => {
        axios.post(`${API}/songs`, song)
            .then(
                () => {
                    navigate('/songs')
                },
                (err) => console.log(err)
            )
            .catch((err2) => console.log(err2))
    };

    const [newSong, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });

    const handleTextChange = (e) => {
        setSong({ ...newSong, [e.target.id]: e.target.value });
    }

    const handleCheckboxChange = () => {
        setSong({ ...newSong, is_favorite: !newSong.is_favorite })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newSong)
        addSong(newSong);
    }

    return (
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label for='name'> Song Name:
                    <input
                        id="name"
                        value={newSong.name}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Name of Song"
                        required
                    />
                </label>
                <br />
                <label for='artist'> Artist:
                    <input
                        id="artist"
                        value={newSong.artist}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Name of Artist"
                        required
                    />
                </label>
                <br />
                <label for='album'> Album:
                    <input
                        id="album"
                        value={newSong.album}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Name of Album"
                        required
                    />
                </label>
                <br />
                <label for='time'> Time:
                    <input
                        id="time"
                        value={newSong.time}
                        type="text"
                        onChange={handleTextChange}
                        required
                    />
                </label>
                <br />
                <label for='is_favorite'> Favorite?
                    <input
                        id="is_favorite"
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        checked={newSong.is_favorite}
                    />
                </label>
                <br />
                <div className=''></div>
                <div className='nav-buttons'>
                    <button type="submit">Submit</button>
                    <Link to={"/songs"}><button>Back</button></Link>
                </div>
            </form>

        </div>
    )
}

export default AddSong