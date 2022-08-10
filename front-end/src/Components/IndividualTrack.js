import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import EditTrack from './EditTrack'

function IndividualTrack () {
    const { id } = useParams()
    const [ songs, setSongs ] = useState({})
    
    
    useEffect(() => {
        const API = process.env.REACT_APP_API_URL;
        axios
          .get(`${API}/songs/${id}`)
          .then((response) => {
            setSongs(response.data.payload);
          })
          .catch((e) => {
            console.log(e);
          });
      }, [id]);
      console.log(songs);



const { name, artist, album, time, is_favorite } = songs
    return (
        <div>
            <h1>{name}</h1>
            <h3>{artist}</h3>
            <h3>{album}</h3>
            <h3>{time}</h3>
            <h3>{is_favorite}</h3>
            <Link to='/songs/edit'>Edit Track Information</Link>
        </div>
    )}

export default IndividualTrack