import { useEffect, useState } from "react"
import axios from "axios"
import Song from "./Song"

const API = process.env.REACT_APP_API_URL;

export default function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get(`${API}/songs`)
      .then((res) => { setSongs(res.data) })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className="Songs">
      <div>
        {songs.map((song) => {
          return (
            <div >
              <Song key={song.id} song={song} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
