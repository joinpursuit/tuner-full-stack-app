import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Album from './Album';

const API = process.env.REACT_APP_API_URL;

function Albums() {
    const [albums, setAlbums] = useState([]);
    const { id } = useParams();

    useEffect(()=>{
        axios.get(`${API}/songs/${id}/albums`)
        .then((res)=>{
            setAlbums(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    })


  return (
      <div>
          {albums.map((album)=>{
              return <Album key={album.id} album={album} />
          })}
      </div>
  )
}

export default Albums;
