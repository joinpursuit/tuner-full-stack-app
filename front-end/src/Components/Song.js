import React from 'react'
import { Link } from "react-router-dom";
import SongDetails from './SongDetails';


export default function Song({song}) {

   
    const { name, artist, album, time, is_favorite } = song

    return (
        <div>
            <Link to={`/songs/${song.id}`}>{name}</Link>,
            <Link to={`/songs/${song.id}`}>{artist}</Link>
            <Link to={`/songs/${song.id}`}>{time}</Link>
            <Link to={`/songs/${song.id}`}>{is_favorite}</Link>
            
        </div>
    )
}
