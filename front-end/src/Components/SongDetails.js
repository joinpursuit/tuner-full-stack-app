import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

function SongDetails() {
    const [song, setSong] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
            .then(response => setSong(response.data))
            .catch(error => navigate('*'))
    }, [id, API]);

    const deleteSong = () => {
        axios.delete(`${API}/songs/${id}`)
            .then(() => {
                navigate('/songs')
            })
            .catch(err => console.log(err))
    };
    const handleDelete = () => {
        deleteSong();
    }

    return (
        <article className="song">
            <h1>{song.name} {song.is_favorite ? "⭐️" : null}</h1>
            <p> Artist: {song.artist}</p>
            <p> Album: {song.album}</p>
            <p> Song Length: {song.time}</p>
            <div className="nav-buttons">
                <Link to={"/songs"}><button>Back</button></Link>
                <Link to={`/songs/${id}/edit`}><button>Edit</button></Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </article>
    )
}

export default SongDetails;