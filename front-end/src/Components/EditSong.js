import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function EditSong() {
    let navigate = useNavigate();
    let { id } = useParams();

    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });

    const updateSong = (song, id) => {
        axios.put(`${API}/songs/${id}`, song)
            .then(
                () => {
                    navigate(`/songs/${id}`)
                },
                (err) => console.log(err)
            )
            .catch((err2) => console.log(err2))
    };
    console.log(song)
    const handleTextChange = (e) => {
        setSong({ ...song, [e.target.id]: e.target.value});
    }

    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite})
    }

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then(
                (res) => setSong(res.data),
                (err) => console.log(err)
                );

    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id)
        updateSong(song, id);
    }

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label> Song Name:
                    <input
                        id="name"
                        value={song.name}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Name of Song"
                        required
                    />
                </label>
                <br/>
                <label> Artist:
                    <input
                        id="artist"
                        value={song.artist}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Name of Artist"
                        required
                    />
                </label>
                <br/>
                <label> Album:
                    <input
                        id="album"
                        value={song.album}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Name of Album"
                        required
                    />
                </label>
                <br/>
                <label> Song Length:
                    <input
                        id="time"
                        value={song.time}
                        type="text"
                        onChange={handleTextChange}
                        required
                    />
                </label>
                <br/>
                <label> Add to favorites?
                    <input
                        id="is_favorite"
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        checked={song.is_favorite}
                    />
                </label>
                <br/>
                <div className='nav-buttons'>
                    <button type="submit">Submit</button>
                    <Link to={"/songs"}><button>Back</button></Link>
                </div>
            </form>

        </div>
    )
}

export default EditSong