import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function SongEditForm() {
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false
    });
    
    let { id } = useParams();
    let navigate = useNavigate();


    const API = process.env.REACT_APP_API_URL;


    return (
        <div className="song-edit-form">
            <h1>Song Edit Form Page</h1>
        </div>
    )
}

export default SongEditForm;