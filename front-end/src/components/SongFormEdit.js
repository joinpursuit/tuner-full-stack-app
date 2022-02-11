import {useState, useEffect} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongFormEdit() {
    let {id} = useParams();
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false
    });

    const navigate = useNavigate();

    const handleText = (e) => {
        setSong({...song, [e.target.id]: e.target.value})
    };

    const handleCheckbox = () => {
        setSong({...song, is_favorite: !song.is_favorite})
    };

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
             .then(res => setSong(res.data))
             .catch(err => console.log(err))
    }, [id]);

    const handleEdit = (e) => {
        e.preventDefault();
        axios.put(`${API}/songs/${id}`, song)
             .then(res => navigate("/songs"))
             .catch(err => console.log(err))
    };

    let {name, artist, album, time, is_favorite} = song;

    return(
        <div>
            <form onSubmit={handleEdit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id = "name" value = {name} type = "text" onChange = {handleText} required />
                </div>

                <div>
                    <label htmlFor="artist">Artist</label>
                    <input id = "artist" value = {artist} type = "text" onChange = {handleText} required />
                </div>

                <div>
                    <label htmlFor="album">Album</label>
                    <input id = "album" value = {album} type = "text" onChange = {handleText} required />
                </div>

                <div>
                    <label htmlFor="time">Time</label>
                    <input id = "time" value = {time} type = "text" onChange = {handleText} required />
                </div>

                <div>
                    <label htmlFor="is_favorite">Favorite</label>
                    <input id = "is_favorite" value={is_favorite} type = "checkbox" onChange = {handleCheckbox} />
                </div>

                <button type="submit">Submit</button>
                <button><Link to = {`/songs/${id}`}>Back</Link></button>
            </form>
        </div>
    )
}

export default SongFormEdit;