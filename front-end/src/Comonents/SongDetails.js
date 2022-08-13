import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from 'axios' 

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
   
    // const handleDelete = (id) => {
    //     axios.delete(`${API}/songs/${id}`)
    //     .then(res => navigate(`/songs`))
    //     .catch(err => console.error(err))
    // }

    const handleDelete = () => {
        axios
          .delete(`${API}/songs/${id}`)
          .then((response) => navigate(`/songs`))
          .catch((error) => console.error(error));
      };

    // const handleEdit = (id) => {
    //     axios.put(`${API}/songs/${id}`, song)
    //     .then((res) => {
    //         SetSong(res.data)
    //         navigate(`/songs/${id}`)
    //     })
    //     .catch((err) => console.log(err))        
        
    // }

    // const editSong = () => {
    //     axios
    //       .put(`${API}/songs/${id}`, song)
    //       .then((res) => {
    //         SetSong(res.data);
    //         navigate(`/songs/${id}`);
    //       })
    //       .catch((error) => console.error(error));
    //   };
    

  return (
    <div>
        <h3>{ song.name }</h3>
        <h4>{ song.artist }</h4>
        <h5>{ song.album }</h5>
        <p>{ song.is_favorite}</p>
        <p>{ song.time }</p>
        <br />
        <Link to={`/songs`}>
        <button className="back-button">Back</button>
      </Link>
        <button className='delete-button' onClick={handleDelete} >Delete Song</button>
        <Link to={`/songs/${id}/edit`}>
        <button className="edit-button">Edit</button>
      </Link>
    </div>
  )
}

export default SongDetails