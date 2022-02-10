import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SongNewForm(){
    const[song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    })

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
    };
    
    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/songs`, song)
          .then((res)=>{
            navigate("/songs");
          }).catch((err)=>{
            console.log(err);
          })
    };  
    return(
        <div className="New">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Song Name</label>
            <input required
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Song"
            />
            <label htmlFor="artist">Artist:</label>
            <input required
            id="artist"
            type="text"
            name="artist"
            value={song.artist}
            placeholder="Name of Artist"
            onChange={handleTextChange}
            />
            <label htmlFor="album">Album:</label>
            <input
            id="album"
            type="text"
            value={song.album}
            placeholder="Name of Album"
            onChange={handleTextChange}
            />
            <label htmlFor="is_favorite">Favorite:</label>
            <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
            />
            <label htmlFor="time">Time:</label>
            <input
            id="time"
            value={song.time}
            type="text"
            onChange={handleTextChange}
            placeholder="Time"
            />
            <br />
            <input type="submit" />
      </form>
    </div>
    )
}

export default SongNewForm;