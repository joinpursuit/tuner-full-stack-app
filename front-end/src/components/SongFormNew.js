import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongFormNew() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/songs`, song)
             .then(res => navigate("/songs"))
             .catch(err => console.log(err))
    };

    let {name, artist, album, time, is_favorite} = song;

    return(
        <div>
            <form onSubmit={handleSubmit}>
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
            </form>
        </div>
    )
}

export default SongFormNew;