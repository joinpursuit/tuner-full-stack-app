import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongDetails() {
    const [song, setSong] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API}/songs/${id}`)
        .then((res)=>{
            setSong(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    const handleDelete = () =>{
        axios.delete(`${API}/songs/${id}`)
        .then(()=>{
            navigate("/songs")
        }).catch((err)=>{
            console.log(err)
        })
    };


  return (
     <article>
         <h3>{true ? <span>⭐️</span> : null}</h3>
        <h5>
            {song.name}
            {song.artist}
        </h5>
        <h6>
            {song.album}
            {song.time}
        </h6>
        <div className="showNav">
            <div>
                <Link to={`/songs`}>
                    <button>Back</button>
                </Link>
            </div>
            <div>
                <Link to={`/song/${song.id}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
            <div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
     </article>
  )
}

export default SongDetails;
