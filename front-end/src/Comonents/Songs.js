import React from 'react'
import {useState, useEffect } from 'react'
import axios from 'axios'
import Song from './Song'

const API = process.env.REACT_APP_API_URL

function Songs() {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        axios.get(`${API}/songs`)
        .then((res) => setSongs(res.data))
        .catch((err) => console.error(err))
    } ,[])


  return (
    <div>
<section>
    {songs.map((song) => <Song song={song}/>) }
</section>
    </div>
  )
}

export default Songs