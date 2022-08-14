// import dependancies to the INDEX page 
import React from 'react'
import {useState, useEffect } from 'react'
import axios from 'axios'

// import Song child component 
import Song from './Song'

// create an API attached to .env PORT to communicate 
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