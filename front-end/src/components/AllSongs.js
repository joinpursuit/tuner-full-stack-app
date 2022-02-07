import axios from 'axios';
import {useState, useEffect } from "react";
import {Link} from "react-router-dom"
const API = process.env.REACT_APP_API_URL

function AllSongs() {

  const[songs, setSongs] = useState([])

  useEffect(()=>{
    axios.get(`${API}/songs`)
    .then((res)=>{
      setSongs(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  })
      return (
        <div className="Songs">
          <section>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Favortite Song?</th>
                  <th>Artist</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                  {songs.map((song)=>{
                    return(
                      <tr className="Song">
                        <td> <Link to={`/songs/${song.id}`}><h1>{song.name}</h1></Link> </td>
                        <td>
                          {song.is_favorite ? (
                            <span>⭐️</span>
                          ) : (
                            <span>&nbsp; &nbsp; &nbsp;</span>
                          )}
                        </td>
                        <td>{song.artist}</td>
                        <td>{song.time}</td>
                      </tr>
                    )
                  })}        
              </tbody>
            </table>
          </section>
        </div>
      )
}
  export default AllSongs;
  