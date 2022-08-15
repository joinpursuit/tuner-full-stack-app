import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from 'axios' 
import "../styles/details.css"

const API = process.env.REACT_APP_API_URL

function SongDetails() {
    const [ song, SetSong ] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${API}/songs/${id}`)
        .then(res => SetSong(res.data))
        .catch(err => console.error(err))
    }, [id])
   
    const deleteOption = (id) => {
        axios.delete(`${API}/songs/${id}`)
        .then(() => navigate(`/songs`))
        .catch((c) => console.error("catch", c));
  };

    const handleDelete = (e) => {
      e.preventDefault()
      deleteOption(id)
    }

  return (
    <div className='details'>
      <h3>{song.is_favorite ? <span>⭐️</span> : null} {song.name}</h3>
        <h4>{ song.artist }</h4>
        <h4>{ song.album }</h4>
        <p>{ song.time }</p>
        <button onClick={() => navigate("/songs")}>Back</button>
        <Link to={`/songs/${id}/edit`}><button>Edit Song</button></Link>
        <button onClick={handleDelete}>Delete Song</button>
    </div>
  )
}

export default SongDetails


