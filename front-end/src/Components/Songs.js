import React, { useEffect, useState } from 'react'
import axios from "axios"
import Song from './Song';
import "../styles/songs.css"


const API = process.env.REACT_APP_API_URL;

function Songs() {
    const [ songs, setSongs ] = useState([]);

    useEffect(() => {
        axios.get(`${API}/songs`)
        .then(res => setSongs(res.data))
        .catch(err => console.error(err))
    }, [])
  return (
    <div className='songs-page'>
        <section className='songs'>{songs.map(song => <Song key={song.id} song={song} />)}</section>
    </div>
  )
}

export default Songs