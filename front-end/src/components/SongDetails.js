import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
    const [song, setSong] = useState([]);
    let {id} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
             .then(res => setSong(res.data))
             .catch(err => console.log(err))
    }, [id]);

    const handleDelete = () => {
        axios.delete(`${API}/songs/${id}`)
             .then(res => navigate("/songs"))
             .catch(err => console.log(err))
    };

    let {name, artist, album, time, is_favorite} = song;
    
    return(
        <div>
            <h1>{name}</h1>
            <h3>Artist: {artist}</h3>
            <h3>Album: {album}</h3>
            <h3>Time: {time}</h3>
            <h3>Favorite: {is_favorite ? "True" : "False"}</h3>
            <button><Link to = {"/songs"}>Back</Link></button>
            <button><Link to = {`/songs/${id}/edit`}>Edit</Link></button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default SongDetails;

