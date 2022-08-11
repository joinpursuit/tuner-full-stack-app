import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

const Songs = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get(`${API}/songs`)
        .then(res => setSongs(res.data))
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <h1>Songs Index</h1>
            {songs.map(song => <Song song={song}/>)}
        </div>
    );
};

export default Songs;