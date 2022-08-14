import React,{useEffect, useState} from 'react'
import axios from 'axios'

import ShowSong from './ShowSong'

const API = process.env.REACT_APP_API_URL;

export default function IndexAllSongs() {
  const [indexSong, setIndexSong] = useState([]);

  useEffect(()=>{
    axios.get(`${API}/songs`)
    .then((response)=> {setIndexSong(response.data)
      console.log(response.data)
    })
    
    .catch((error)=> console.error(error))
  },[])
  return (
    <div>
      {indexSong.map((song,index)=>{
        return <ShowSong key={index} song ={song} index={index}/>;
      })}

    </div>
  )
}
