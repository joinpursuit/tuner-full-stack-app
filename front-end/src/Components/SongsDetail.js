import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const API = process.env.REACT_APP_API_URL;


export default function SongsDetail() {
  const [songs, setSongs] = useState({});
  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(
    () => {
      axios
        .get(`${API}/songs/${id}`)
        .then((response) => setSongs(response.data))
        .catch((error) => navigate('/songs'))
    });

  const handleDelete = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then((response) => navigate(`/songs`))
      .catch((error) => console.error(error))
  }

  return (
    <article className="Song-Details">
      <h1>
        <td>
          <td>{songs.name}</td>
          <td>
            <td>
              {songs.is_favorite ? <td>⭐️</td> : null}
            </td>
          </td>
        </td>
      </h1>
      <td> Artist:{songs.artist}</td>
      <td>Album: {songs.album}</td>
      <td> Time length {songs.time}</td>

      <div className="showNavigation">
        <div>
          <a href={`/songs`}>
            <button className="backButton">Back</button>
          </a>
        </div>

        <div>
          <a href={`/songs/${id}/edit`}>
            <button className="editButton">Edit</button>
          </a>
        </div>

        <span>
          <button className="deleteButton" onClick={handleDelete}>Delete</button>
        </span>

      </div>

    </article>
  )
}
