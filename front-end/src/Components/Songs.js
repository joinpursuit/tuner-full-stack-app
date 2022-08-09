import axios from "axios";
import { useState, useEffect } from "react"

const API = process.env.REACT_APP_API_URL;

const Songs = () => {
    const [songs, setSongs] = useState([]);
    


    return (
        <h1>Songs Index</h1>
    );
};

export default Songs;