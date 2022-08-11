import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const Songs = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get(`${API}/songs`)
        .then(res => setSongs(res.data))
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="Songs">
            <h1>List of Songs</h1>
            <a href={'/songs/new'}>New Song</a>
            {songs.map((song) => <Song key={song.id} song={song} id={song.id} />)}
        </div>
    );
};

export default Songs;