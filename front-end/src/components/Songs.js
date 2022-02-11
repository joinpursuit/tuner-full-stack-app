import axios from "axios";
import {useState, useEffect} from "react";
import Song from "./Song.js";

function Songs() {
    const [songs, setSongs] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/songs`)
             .then(res => setSongs(res.data))
             .catch(err => console.log(err))
    }, [API]);

    let displaySongs = songs.map((song, index) => {
        return <Song key = {index} song = {song} />
    });

    return(
        <div>
            <div>Displaying All Songs</div>
            <ul>
                {displaySongs}
            </ul>
        </div>
    )
}

export default Songs;